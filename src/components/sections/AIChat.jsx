import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { aiContext } from '../../data';

const QUICK_CHIPS = [
  "What tech stack?",
  "Best projects?",
  "Why hire Sumit?",
  "Experience level?",
];

function ChatMessage({ msg }) {
  const isAI = msg.role === 'ai';
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        padding: '9px 13px',
        borderRadius: isAI ? '12px 12px 12px 4px' : '12px 12px 4px 12px',
        fontSize: 13, lineHeight: 1.65,
        maxWidth: '88%',
        alignSelf: isAI ? 'flex-start' : 'flex-end',
        background: isAI ? 'rgba(59,130,246,0.1)' : 'var(--blue)',
        border: isAI ? '1px solid rgba(59,130,246,0.15)' : 'none',
        color: isAI ? 'var(--text-dim)' : 'white',
        opacity: msg.typing ? 0.6 : 1,
      }}
    >
      {msg.text}
    </motion.div>
  );
}

export default function AIChat() {
  const [open, setOpen]         = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hi! I'm Sumit's AI assistant. Ask me anything about his skills, projects, or why you should hire him." }
  ]);
  const [input, setInput]       = useState('');
  const [loading, setLoading]   = useState(false);
  const endRef                  = useRef();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = useCallback(async (text) => {
    const userMsg = (text || input).trim();
    if (!userMsg || loading) return;
    setInput('');
    setMessages(m => [...m, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const history = messages.slice(-6).map(m => ({
        role: m.role === 'ai' ? 'assistant' : 'user',
        content: m.text,
      }));

      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 300,
          system: aiContext,
          messages: [...history, { role: 'user', content: userMsg }],
        }),
      });
      const data  = await res.json();
      const reply = data.content?.[0]?.text || "Sorry, I couldn't get a response right now.";
      setMessages(m => [...m, { role: 'ai', text: reply }]);
    } catch {
      setMessages(m => [...m, { role: 'ai', text: "Connection error. Please try again." }]);
    }
    setLoading(false);
  }, [input, messages, loading]);

  return (
    <>
      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            style={{
              position: 'fixed', bottom: 100, right: 32, zIndex: 200,
              width: 370, borderRadius: 20,
              border: '1px solid var(--glass-border)',
              background: 'rgba(13,18,32,0.97)',
              backdropFilter: 'blur(30px)',
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '16px 18px',
              borderBottom: '1px solid var(--glass-border)',
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: 'linear-gradient(135deg, var(--blue), #818cf8)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16,
              }}>
                🤖
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700,
                }}>
                  Ask about Sumit
                </div>
                <div style={{
                  fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--emerald)',
                }}>
                  ● AI Assistant · Online
                </div>
              </div>
            </div>

            {/* Messages */}
            <div style={{
              height: 280, overflowY: 'auto',
              padding: 14,
              display: 'flex', flexDirection: 'column', gap: 10,
            }}>
              {messages.map((m, i) => <ChatMessage key={i} msg={m} />)}
              {loading && <ChatMessage msg={{ role: 'ai', text: 'Thinking...', typing: true }} />}
              <div ref={endRef} />
            </div>

            {/* Quick chips */}
            {!loading && (
              <div style={{ padding: '6px 14px', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {QUICK_CHIPS.map(chip => (
                  <button
                    key={chip}
                    onClick={() => send(chip)}
                    style={{
                      padding: '5px 11px', borderRadius: 100,
                      fontSize: 11, fontFamily: 'var(--font-mono)',
                      border: '1px solid var(--glass-border)',
                      background: 'var(--glass)',
                      color: 'var(--text-muted)', cursor: 'pointer',
                      transition: 'var(--transition)',
                    }}
                    onMouseEnter={e => {
                      e.target.style.borderColor = 'rgba(59,130,246,0.3)';
                      e.target.style.color = 'var(--blue)';
                    }}
                    onMouseLeave={e => {
                      e.target.style.borderColor = 'var(--glass-border)';
                      e.target.style.color = 'var(--text-muted)';
                    }}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div style={{
              padding: '10px 14px',
              borderTop: '1px solid var(--glass-border)',
              display: 'flex', gap: 8,
            }}>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
                placeholder="Ask anything..."
                style={{
                  flex: 1,
                  background: 'var(--bg3)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: 8,
                  padding: '9px 13px',
                  color: 'var(--text)',
                  fontSize: 13,
                  fontFamily: 'var(--font-body)',
                  outline: 'none',
                }}
                onFocus={e => (e.target.style.borderColor = 'rgba(59,130,246,0.4)')}
                onBlur={e => (e.target.style.borderColor = 'var(--glass-border)')}
              />
              <button
                onClick={() => send()}
                style={{
                  width: 38, height: 38, borderRadius: 8,
                  background: 'var(--blue)', border: 'none',
                  cursor: 'pointer', fontSize: 14, color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 300, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(o => !o)}
        style={{
          position: 'fixed', bottom: 32, right: 32, zIndex: 200,
          width: 54, height: 54, borderRadius: 16,
          background: 'var(--blue)', border: 'none', cursor: 'pointer',
          boxShadow: '0 8px 30px rgba(59,130,246,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 22, color: 'white',
        }}
      >
        {open ? '✕' : '💬'}
      </motion.button>
    </>
  );
}
