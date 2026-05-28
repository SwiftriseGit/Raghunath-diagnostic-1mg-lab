import { contactInfo } from '../data/packages';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import Logo from './Logo';

const softGold = '#A68B52';

export default function Footer() {
  const ls: React.CSSProperties = { fontSize: 14, color: '#f3e8d2', textDecoration: 'none', display: 'block', marginBottom: 8, transition: 'color 0.2s', fontWeight: 600 };
  const hov = (e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = '#ffffff'; };
  const out = (e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = '#f3e8d2'; };

  return (
    <footer style={{ background: '#210A0D', color: '#ffffff', paddingTop: 'clamp(32px,5vw,48px)', paddingBottom: 18 }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gap: 'clamp(20px,3vw,28px)', marginBottom: 24 }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand Column */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#ffffff',
              borderRadius: 16,
              border: '2px solid rgba(166, 139, 82, 0.35)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
              marginBottom: 14,
              overflow: 'hidden'
            }}
              className="w-16 h-16 sm:w-20 sm:h-20">
              <Logo size="sm" />
            </div>
            <p style={{ fontSize: 14, color: '#f3e8d2', lineHeight: 1.6, marginBottom: 14, fontWeight: 600 }}>
              Raghunath Diagnostics, in association with Tata 1mg Labs, provides accurate and affordable health checkups with free home sample collection in Jeypore.
            </p>
            {/* <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '6px 14px', background: 'rgba(166,139,82,0.08)', borderRadius: 50,
              fontSize: 11, color: softGold, border: '1.5px solid rgba(166,139,82,0.2)',
              fontWeight: 800,
            }}>
              <span style={{ width: 6, height: 6, background: '#25d366', borderRadius: '50%', display: 'inline-block' }} />
              Tata 1mg Partner         
            </div> */}
          </div>

          {/* Links Column */}
          <div>
            <h4 style={{ fontWeight: 800, fontSize: 12, color: '#ffffff', marginBottom: 14, letterSpacing: 1.5, textTransform: 'uppercase' }}>Quick Links</h4>
            {[
              ['Home', '#hero'],
              ['Plans', '#packages'],
              ['Packages', '#compare'],
              ['Why Us', '#why-us'],
              ['Contact', '#contact']
            ].map(([l, h]) => (
              <a key={h} href={h} style={ls} onMouseEnter={hov} onMouseLeave={out}>{l}</a>
            ))}
          </div>

          {/* Tests Column */}
          <div>
            <h4 style={{ fontWeight: 800, fontSize: 12, color: '#ffffff', marginBottom: 14, letterSpacing: 1.5, textTransform: 'uppercase' }}>Tests Available</h4>
            {['Diabetes Care', 'Heart Health', 'Liver & Kidney', 'Thyroid Profile', 'Vitamin Tests', 'Iron Studies'].map(c => (
              <span key={c} style={{ display: 'block', fontSize: 14, color: '#f3e8d2', marginBottom: 8, fontWeight: 600 }}>{c}</span>
            ))}
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={{ fontWeight: 800, fontSize: 12, color: '#ffffff', marginBottom: 14, letterSpacing: 1.5, textTransform: 'uppercase' }}>Contact</h4>
            <a href={`tel:${contactInfo.phone}`} style={{ ...ls, display: 'flex', alignItems: 'center', gap: 8 }} onMouseEnter={hov} onMouseLeave={out}>
              <FiPhone size={14} style={{ flexShrink: 0 }} /> {contactInfo.phoneDisplay}
            </a>
            <a href={`mailto:${contactInfo.email}`} style={{ ...ls, display: 'flex', alignItems: 'center', gap: 8, wordBreak: 'break-all' }} onMouseEnter={hov} onMouseLeave={out}>
              <FiMail size={14} style={{ flexShrink: 0 }} /> {contactInfo.email}
            </a>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#f3e8d2', fontWeight: 600 }}>
              <FiMapPin size={14} style={{ flexShrink: 0 }} /> Jeypore, Odisha 764003
            </span>
          </div>
        </div>

        {/* Bottom copyright */}
        <div style={{ borderTop: '1px solid rgba(166,139,82,0.15)', paddingTop: 18, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12 }}>
          <p style={{ fontSize: 12, color: '#a2888c', fontWeight: 600 }}>
            © 2026 All rights reserved by{' '}
            <a
              href="https://swiftrise.in/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: softGold, textDecoration: 'underline', fontWeight: 800, transition: 'color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#ffffff'; }}
              onMouseLeave={e => { e.currentTarget.style.color = softGold; }}
            >
              SwiftRise Solution Pvt.Ltd.
            </a>
          </p>
          <p style={{ fontSize: 12, color: '#a2888c', fontWeight: 600 }}>Associated with <img src="/images/1mglab.png" alt="Tata 1mg Labs Logo" className="h-[25px] w-auto object-contain inline-block" style={{ verticalAlign: 'middle', marginLeft: 4, background: '#ffffff', borderRadius: 6, padding: 2 }} /></p>
        </div>
      </div>
    </footer>
  );
}
