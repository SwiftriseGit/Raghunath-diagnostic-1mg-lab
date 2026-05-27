import { useState, useEffect } from 'react';
import { contactInfo } from '../data/packages';
import { FiPhone, FiMenu, FiX } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io5';
import Logo from './Logo';

const burgundy = '#7E1E2B';
const darkWine = '#631620';
const primaryGold = '#A68B52';
const beigeWash = '#F5ECE1';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { label: 'Home', href: '#hero' },
    { label: 'Packages', href: '#packages' },
    { label: 'Compare', href: '#compare' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'all 0.3s',
      background: scrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(20px)',
      boxShadow: scrolled ? '0 4px 20px rgba(126, 30, 43, 0.06)' : 'none',
      borderBottom: '1px solid rgba(226, 232, 240, 0.5)',
    }}>
      <div style={{ maxWidth: 1680, margin: '0 auto', padding: '0 clamp(16px, 4vw, 48px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 80 }}>
          {/* Custom Medical Vector Logo */}
          <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Logo size="sm" />
          </a>

          {/* Desktop Nav */}
          <div style={{ display: 'none', alignItems: 'center', gap: 2 }} className="lg:!flex">
            {links.map(l => (
              <a key={l.href} href={l.href} style={{
                padding: '8px 20px', fontSize: 16, fontWeight: 600, color: '#475569',
                textDecoration: 'none', borderRadius: 8, transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = burgundy; e.currentTarget.style.background = beigeWash; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.background = 'transparent'; }}
              >{l.label}</a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div style={{ display: 'none', alignItems: 'center', gap: 10 }} className="lg:!flex">
            <a href={`tel:${contactInfo.phone}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '10px 20px', background: burgundy, color: '#fff',
              fontSize: 13, fontWeight: 700, borderRadius: 50, textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(126, 30, 43, 0.2)', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = darkWine; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = burgundy; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <FiPhone size={14} /> Call Now
            </a>
            <a href={`https://wa.me/${contactInfo.whatsapp}?text=Hi%2C%20I%20want%20to%20book%20a%20health%20checkup`}
              target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                padding: '9px 20px', border: `2px solid ${primaryGold}`, color: primaryGold,
                fontSize: 13, fontWeight: 700, borderRadius: 50, textDecoration: 'none',
                background: 'transparent', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = primaryGold; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = primaryGold; }}
            >
              <IoLogoWhatsapp size={15} /> WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:!hidden"
            style={{ padding: 8, border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex' }}>
            {menuOpen ? <FiX size={24} color={burgundy} /> : <FiMenu size={24} color={burgundy} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:!hidden" style={{
        transition: 'all 0.3s ease-in-out', overflow: 'hidden',
        maxHeight: menuOpen ? 500 : 0, opacity: menuOpen ? 1 : 0,
        width: '100%',
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.98)', backdropFilter: 'blur(20px)',
          borderTop: '1px solid #f1f5f9', padding: 16,
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              display: 'block', padding: '14px 16px', fontSize: 15, fontWeight: 600,
              color: '#334155', textDecoration: 'none', borderRadius: 10,
            }}>{l.label}</a>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }} className="sm:!flex-row">
            <a href={`tel:${contactInfo.phone}`} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              padding: 14, background: burgundy, color: '#fff', fontSize: 14, fontWeight: 700,
              borderRadius: 50, textDecoration: 'none', boxShadow: '0 4px 12px rgba(126, 30, 43, 0.15)'
            }} className="w-full sm:w-1/2"><FiPhone size={16} /> Call Now</a>
            <a href={`https://wa.me/${contactInfo.whatsapp}?text=Hi%2C%20I%20want%20to%20book%20a%20health%20checkup`}
              target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: 14, background: primaryGold, color: '#fff', fontSize: 14, fontWeight: 700,
                borderRadius: 50, textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(166, 139, 82, 0.15)',
              }} className="w-full sm:w-1/2"><IoLogoWhatsapp size={16} /> WhatsApp</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
