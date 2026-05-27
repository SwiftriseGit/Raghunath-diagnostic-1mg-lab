import { contactInfo } from '../data/packages';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { HiOutlineMapPin } from 'react-icons/hi2';

const burgundy = '#7E1E2B';
const gold = '#A68B52';

const jk = "'Plus Jakarta Sans', sans-serif";
const cs = '0 10px 30px rgba(126, 30, 43, 0.03), 0 1px 4px rgba(0, 0, 0, 0.02)';

const cards = [
  { icon: <FiMapPin size={22} />, bg: '#F5ECE1', color: gold, title: 'Our Lab', val: contactInfo.address },
  { icon: <FiPhone size={22} />, bg: '#fdf2f4', color: burgundy, title: 'Phone', val: contactInfo.phoneDisplay, href: `tel:${contactInfo.phone}` },
  { icon: <FiMail size={22} />, bg: '#FAF6F0', color: gold, title: 'Email', val: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: <FiClock size={22} />, bg: '#fdf2f4', color: burgundy, title: 'Hours', val: 'Mon–Sat: 7AM–8PM | Sun: 7AM–2PM' },
];

export default function Contact() {
  return (
    <section id="contact" style={{ position: 'relative', padding: 'clamp(80px,10vw,120px) 0', background: 'linear-gradient(180deg, #FAF6F0 0%, #ffffff 100%)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', position: 'relative' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px,5vw,64px)' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '8px 18px', background: '#ffffff', border: `1.5px solid ${gold}`,
            borderRadius: 50, fontSize: 11, fontWeight: 800, color: burgundy,
            letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16,
            boxShadow: '0 2px 8px rgba(126, 30, 43, 0.05)',
          }}><HiOutlineMapPin size={14} /> Visit Us</div>
          <h2 style={{ fontFamily: jk, fontWeight: 800, fontSize: 'clamp(28px,4.5vw,46px)', color: '#0f172a', marginBottom: 14, letterSpacing: -0.5 }}>
            Get In <span style={{ color: burgundy }}>Touch</span>
          </h2>
          <p style={{ fontSize: 'clamp(14px,1.5vw,17px)', color: '#475569', maxWidth: 480, margin: '0 auto', fontWeight: 500 }}>
            Walk in, call, or WhatsApp. We're here to help you with your health checkup.
          </p>
        </div>

        <div style={{ display: 'grid', gap: 28 }} className="grid-cols-1 lg:grid-cols-2">
          {/* Left Column - Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {cards.map(c => (
              <div key={c.title} style={{ background: '#ffffff', borderRadius: 24, padding: '24px', border: '1.5px solid #eaeae8', boxShadow: cs }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <div style={{ width: 46, height: 46, borderRadius: 14, flexShrink: 0, background: c.bg, color: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{c.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: jk, fontWeight: 800, fontSize: 16, color: '#0f172a', marginBottom: 6 }}>{c.title}</h3>
                    {c.href
                      ? <a href={c.href} style={{ fontSize: 14, color: burgundy, fontWeight: 700, textDecoration: 'none', wordBreak: 'break-all' }}>{c.val}</a>
                      : <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>{c.val}</p>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Map & Call Action */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Embed Map */}
            <div style={{ background: '#ffffff', borderRadius: 24, border: '1.5px solid #eaeae8', boxShadow: cs, overflow: 'hidden', height: 280, minHeight: 200 }}>
              <iframe title="Location" src={`https://www.google.com/maps?q=${contactInfo.mapQuery}&output=embed`}
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
            </div>

            {/* Direct Booking Card */}
            <div style={{ background: `linear-gradient(135deg, ${burgundy}, #631620)`, borderRadius: 24, padding: '32px', textAlign: 'center', boxShadow: '0 12px 28px rgba(126, 30, 43, 0.15)' }}>
              <h3 style={{ fontFamily: jk, fontWeight: 800, fontSize: 24, color: '#ffffff', marginBottom: 10, letterSpacing: -0.5 }}>Ready to Book?</h3>
              <p style={{ color: '#f5ebeb', fontSize: 13, marginBottom: 24, maxWidth: 360, margin: '0 auto 24px', fontWeight: 500, lineHeight: 1.6 }}>
                No complicated app downloads or web forms. Simply call us directly or click to book instantly via WhatsApp!
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
                <a href={`tel:${contactInfo.phone}`} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 28px', background: '#ffffff', color: burgundy,
                  fontWeight: 700, borderRadius: 50, textDecoration: 'none', fontSize: 14,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}><FiPhone size={16} /> Call Now</a>

                <a href={`https://wa.me/${contactInfo.whatsapp}?text=Hi%2C%20I%20want%20to%20book`}
                  target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '14px 28px', background: gold, color: '#ffffff',
                    fontWeight: 700, borderRadius: 50, textDecoration: 'none', fontSize: 14,
                    boxShadow: '0 4px 12px rgba(166, 139, 82, 0.25)',
                  }}><IoLogoWhatsapp size={16} /> WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
