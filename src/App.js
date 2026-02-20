import React from 'react';
import './styles/globals.css';
import Navbar     from './components/layout/Navbar';
import Background from './components/layout/Background';
import Cursor     from './components/layout/Cursor';
import Footer     from './components/layout/Footer';
import Home       from './pages/Home';

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Background />
      <Cursor />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 2 }}>
        <Home />
      </main>
      <Footer />
    </div>
  );
}
