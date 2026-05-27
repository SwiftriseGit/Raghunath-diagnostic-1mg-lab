import { contactInfo } from '../data/packages';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import Logo from './Logo';

const softGold = '#A68B52';

export default function Footer() {
  const ls: React.CSSProperties = { fontSize: 13, color: '#e4d2bf', textDecoration: 'none', display: 'block', marginBottom: 10, transition: 'color 0.2s', fontWeight: 500 };
  const hov = (e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = '#ffffff'; };
  const out = (e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = '#e4d2bf'; };

  return (
    <footer style={{ background: '#210A0D', color: '#ffffff', paddingTop: 'clamp(56px,8vw,80px)', paddingBottom: 28 }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gap: 'clamp(28px,4vw,40px)', marginBottom: 48 }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Column */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#ffffff',
              borderRadius: '50%',
              border: '2px solid rgba(166, 139, 82, 0.35)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25), 0 0 0 6px rgba(166, 139, 82, 0.15)',
              marginBottom: 18
            }}
            className="w-16 h-16 sm:w-24 sm:h-24">
              <Logo size="sm" />
            </div>
            <p style={{ fontSize: 13, color: '#e4d2bf', lineHeight: 1.7, marginBottom: 18, fontWeight: 500 }}>
               NABL & CAP Certified lab associated with Tata 1mg Labs.
            </p>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '6px 14px', background: 'rgba(166,139,82,0.08)', borderRadius: 50,
              fontSize: 11, color: softGold, border: '1.5px solid rgba(166,139,82,0.2)',
              fontWeight: 700,
            }}>
              <span style={{ width: 6, height: 6, background: '#25d366', borderRadius: '50%', display: 'inline-block' }} />
              Tata 1mg Partner
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 style={{ fontWeight: 800, fontSize: 12, color: '#ffffff', marginBottom: 16, letterSpacing: 1.5, textTransform: 'uppercase' }}>Quick Links</h4>
            {[['Home','#hero'],['Packages','#packages'],['Compare','#compare'],['Why Us','#why-us'],['Contact','#contact']].map(([l,h]) => (
              <a key={h} href={h} style={ls} onMouseEnter={hov} onMouseLeave={out}>{l}</a>
            ))}
          </div>

          {/* Tests Column */}
          <div>
            <h4 style={{ fontWeight: 800, fontSize: 12, color: '#ffffff', marginBottom: 16, letterSpacing: 1.5, textTransform: 'uppercase' }}>Tests Available</h4>
            {['Diabetes Care','Heart Health','Liver & Kidney','Thyroid Profile','Vitamin Tests','Iron Studies'].map(c => (
              <span key={c} style={{ display: 'block', fontSize: 13, color: '#e4d2bf', marginBottom: 10, fontWeight: 500 }}>{c}</span>
            ))}
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={{ fontWeight: 800, fontSize: 12, color: '#ffffff', marginBottom: 16, letterSpacing: 1.5, textTransform: 'uppercase' }}>Contact</h4>
            <a href={`tel:${contactInfo.phone}`} style={{ ...ls, display: 'flex', alignItems: 'center', gap: 8 }} onMouseEnter={hov} onMouseLeave={out}>
              <FiPhone size={14} /> {contactInfo.phoneDisplay}
            </a>
            <a href={`mailto:${contactInfo.email}`} style={{ ...ls, display: 'flex', alignItems: 'center', gap: 8, wordBreak: 'break-all' }} onMouseEnter={hov} onMouseLeave={out}>
              <FiMail size={14} /> {contactInfo.email}
            </a>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#e4d2bf', fontWeight: 500 }}>
              <FiMapPin size={14} style={{ flexShrink: 0 }} /> Jeypore, Odisha 764003
            </span>
          </div>
        </div>

        {/* Bottom copyright */}
        <div style={{ borderTop: '1px solid rgba(166,139,82,0.15)', paddingTop: 28, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12 }}>
          <p style={{ fontSize: 12, color: '#8b7074', fontWeight: 500 }}>© {new Date().getFullYear()} Raghunath Diagnostics. All rights reserved.</p>
          <p style={{ fontSize: 12, color: '#8b7074', fontWeight: 500 }}>Associated with <span style={{ color: softGold, fontWeight: 700 }}>Tata 1mg</span></p>
        </div>
      </div>
    </footer>
  );
}
