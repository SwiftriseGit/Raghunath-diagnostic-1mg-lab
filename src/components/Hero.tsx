import { contactInfo, featuredPackage } from '../data/packages';
import { FiPhone, FiCheckCircle, FiShield, FiActivity, FiClock, FiHome } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { HiOutlineSparkles } from 'react-icons/hi2';

const burgundy = '#7E1E2B';
const darkWine = '#631620';
const primaryGold = '#A68B52';
const lightBg = '#FAF6F0'; // Premium warm ivory wash

const jk = "'Plus Jakarta Sans', sans-serif";

export default function Hero() {
  return (
    <section id="hero" style={{ position: 'relative', minHeight: 'auto', overflow: 'hidden', background: lightBg, paddingTop: 100, paddingBottom: 24 }}>
      {/* Dynamic Blobs using palette colors */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: 60, right: -100, width: 500, height: 500, background: 'rgba(166,139,82,0.1)', borderRadius: '50%', filter: 'blur(100px)' }} />
        <div style={{ position: 'absolute', bottom: -100, left: -100, width: 450, height: 450, background: 'rgba(126,30,43,0.06)', borderRadius: '50%', filter: 'blur(100px)' }} />
      </div>

      {/* Grid Pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.035,
        backgroundImage: `radial-gradient(circle, ${burgundy} 1px, transparent 1px)`, backgroundSize: '32px 32px',
      }} />

      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40, paddingTop: 24, paddingBottom: 32 }}
          className="lg:!flex-row lg:!items-center lg:!gap-16 lg:!pt-12 lg:!pb-16">

          {/* Left Side Content */}
          <div style={{ flex: '1 1 0', textAlign: 'center' }} className="lg:!text-left">
            {/* Associated with Tata 1mg Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 18px', background: '#ffffff', border: `1.5px solid ${primaryGold}`,
              borderRadius: 50, marginBottom: 28, boxShadow: '0 4px 12px rgba(126, 30, 43, 0.08)'
            }}>
              <HiOutlineSparkles size={14} color={primaryGold} />
              <span style={{ fontSize: 11, fontWeight: 800, color: burgundy, letterSpacing: 1.5, textTransform: 'uppercase' }}>
                Associated with Tata 1mg Labs
              </span>
            </div>

            <h1 style={{ fontFamily: jk, fontWeight: 800, fontSize: 'clamp(34px, 5.5vw, 64px)', color: '#0f172a', lineHeight: 1.08, marginBottom: 22 }}>
              Your Health,{' '}
              <span style={{ color: burgundy }}>
                Our Priority
              </span>
            </h1>

            <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: '#475569', maxWidth: 520, marginBottom: 32, lineHeight: 1.8 }}
              className="lg:!mx-0 mx-auto">
              NABL Accredited & CAP Certified diagnostic lab in Jeypore, Odisha.
              Trusted by <strong style={{ color: burgundy, fontWeight: 700 }}>10,000+</strong> families for highly accurate & affordable health checkups.
            </p>

            {/* Note Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'flex-start', gap: 8, padding: '12px 16px',
              background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 14, marginBottom: 28,
              fontSize: 13, fontWeight: 700, color: '#92400e', boxShadow: '0 2px 8px rgba(245, 158, 11, 0.05)',
              textAlign: 'left', lineHeight: 1.4, maxWidth: '100%'
            }}>
              <FiPhone size={14} style={{ marginTop: 2, flexShrink: 0 }} />
              <span>Book via Call or WhatsApp — No online booking needed</span>
            </div>

            {/* Premium CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginBottom: 36 }}
              className="lg:!justify-start">
              <a href={`tel:${contactInfo.phone}`} style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '16px 32px', background: burgundy, color: '#fff',
                fontWeight: 700, fontSize: 15, borderRadius: 50, textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(126, 30, 43, 0.25)', transition: 'all 0.25s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(126, 30, 43, 0.35)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(126, 30, 43, 0.25)'; }}
              >
                <FiPhone size={18} /> Call Now
              </a>
              <a href={`https://wa.me/${contactInfo.whatsapp}?text=Hi%2C%20I%20want%20to%20book%20a%20health%20checkup`}
                target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  padding: '16px 32px', background: primaryGold, color: '#fff',
                  fontWeight: 700, fontSize: 15, borderRadius: 50, textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(166, 139, 82, 0.25)', transition: 'all 0.25s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = '#8F7543'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(166, 139, 82, 0.35)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = primaryGold; e.currentTarget.style.boxShadow = '0 8px 24px rgba(166, 139, 82, 0.25)'; }}
              >
                <IoLogoWhatsapp size={18} /> WhatsApp Now
              </a>
            </div>

            {/* Trust Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}
              className="lg:!justify-start">
              {[
                { icon: <FiShield size={14} />, label: 'NABL Accredited' },
                { icon: <FiActivity size={14} />, label: 'Hygienic Collection' },
                { icon: <FiClock size={14} />, label: 'Fast Reports' },
                { icon: <FiHome size={14} />, label: 'Home Collection' },
              ].map(b => (
                <div key={b.label} style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '8px 16px', background: '#ffffff',
                  borderRadius: 50, border: '1px solid #e2e8f0',
                  fontSize: 12, fontWeight: 600, color: '#475569',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                }}>
                  <span style={{ color: primaryGold }}>{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Ultra-Premium Card (Perfectly matches uploaded reference design) */}
          <div style={{ width: '100%', maxWidth: 420, flexShrink: 0 }}>
            <div style={{
              position: 'relative', background: '#ffffff', borderRadius: 28,
              padding: '32px', border: '1.5px solid #eaeae8',
              boxShadow: '0 20px 48px rgba(126, 30, 43, 0.07), 0 4px 12px rgba(0, 0, 0, 0.03)',
            }}>
              {/* Reference Style Floating Badge */}
              <div style={{
                position: 'absolute', top: -16, left: 32,
                background: `linear-gradient(135deg, ${burgundy}, ${primaryGold})`, color: '#ffffff',
                fontSize: 11, fontWeight: 800, padding: '8px 20px',
                borderRadius: 50, boxShadow: '0 4px 16px rgba(126,30,43,0.3)',
                display: 'flex', alignItems: 'center', gap: 6,
                letterSpacing: 1,
                animation: 'heroFloat 4.5s ease-in-out infinite',
              }}>
                FLAT 50% OFF
              </div>

              <div style={{ paddingTop: 10 }}>
                {/* Micro heading */}
                <span style={{ fontSize: 10, fontWeight: 800, color: primaryGold, letterSpacing: 2, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                  ESSENTIAL HEALTH CHECK
                </span>

                {/* Main Package Name */}
                <h2 style={{ fontFamily: jk, fontWeight: 800, fontSize: '28px', color: '#0f172a', letterSpacing: -0.5, lineHeight: 1.2, margin: 0 }}>
                  {featuredPackage.name}
                </h2>

                {/* Subtitle */}
                <p style={{ fontSize: 13, color: '#64748b', marginTop: 4, fontWeight: 500 }}>
                  ({featuredPackage.subtitle})
                </p>

                {/* Price block exactly matching reference layout */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 24, marginBottom: 24 }}>
                  <span style={{
                    display: 'inline-flex', padding: '6px 12px',
                    background: '#FAF6F0', color: primaryGold, fontSize: 12, fontWeight: 800, borderRadius: 8,
                  }}>{featuredPackage.testCount} Tests</span>

                  <span style={{ fontFamily: jk, fontWeight: 900, fontSize: '38px', color: '#0f172a', lineHeight: 1, letterSpacing: -1 }}>
                    ₹{featuredPackage.price}
                  </span>

                  <span style={{ fontSize: 13, color: '#94a3b8', fontWeight: 600, paddingLeft: 2 }}>only</span>
                </div>

                {/* Included Tests Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 28 }}>
                  {featuredPackage.tests.map(t => (
                    <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#475569', fontWeight: 500 }}>
                      <FiCheckCircle size={15} color={primaryGold} style={{ flexShrink: 0 }} />
                      {t}
                    </div>
                  ))}
                </div>

                {/* Main Action Button */}
                <a href={`https://wa.me/${contactInfo.whatsapp}?text=Hi%2C%20I%20want%20to%20book%20Aayushya%20Health%20Screen%20(₹399)`}
                  target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    width: '100%', background: burgundy, color: '#ffffff',
                    fontWeight: 700, padding: '16px', borderRadius: 16,
                    textDecoration: 'none', boxShadow: '0 6px 20px rgba(126,30,43,0.25)',
                    fontSize: 14, transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = darkWine; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = burgundy; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <IoLogoWhatsapp size={18} /> Book via WhatsApp for ₹{featuredPackage.price}
                </a>

                {/* Subtext call option */}
                <p style={{ textAlign: 'center', fontSize: 12, color: '#64748b', marginTop: 14, fontWeight: 500 }}>
                  Or call <a href={`tel:${contactInfo.phone}`} style={{ color: burgundy, fontWeight: 700, textDecoration: 'none' }}>{contactInfo.phoneDisplay}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  );
}
