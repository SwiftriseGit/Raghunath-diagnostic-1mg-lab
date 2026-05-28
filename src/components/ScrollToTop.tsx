import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const primaryGold = '#A68B52';
const burgundy = '#7E1E2B';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-6 z-[99] w-12 h-12 rounded-full text-white border-none cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out bottom-6 ${
        visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
      }`}
      style={{
        background: primaryGold,
        boxShadow: '0 4px 16px rgba(126, 30, 43, 0.15)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = burgundy;
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(126, 30, 43, 0.25)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = primaryGold;
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(126, 30, 43, 0.15)';
      }}
      aria-label="Scroll to top"
    >
      <FiArrowUp size={22} strokeWidth={2.5} />
    </button>
  );
}
