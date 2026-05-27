import { packages, contactInfo } from '../data/packages';
import { FiCheckCircle } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { HiOutlineSparkles, HiOutlineFire } from 'react-icons/hi2';
import { RiStarFill } from 'react-icons/ri';

const burgundy = '#7E1E2B';
const primaryGold = '#A68B52';
const softBeigeBg = '#F5ECE1';
const shadow = '0 10px 30px rgba(126, 30, 43, 0.04), 0 1px 4px rgba(0, 0, 0, 0.02)';
const hoverShadow = '0 20px 40px rgba(126, 30, 43, 0.09), 0 4px 12px rgba(0, 0, 0, 0.03)';
const jk = "'Plus Jakarta Sans', sans-serif";

export default function PackageCards() {
  return (
    <section id="packages" style={{ position: 'relative', padding: 'clamp(40px,5vw,60px) 0', background: '#FAF6F0' }}>
      {/* Dynamic Background elements */}
      <div style={{ position: 'absolute', top: 0, right: -100, width: 400, height: 400, background: 'rgba(166,139,82,0.06)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px,6vw,72px)' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '8px 18px', background: '#ffffff', border: `1.5px solid ${primaryGold}`,
            borderRadius: 50, fontSize: 11, fontWeight: 800, color: burgundy,
            letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16,
            boxShadow: '0 2px 8px rgba(126, 30, 43, 0.05)',
          }}>
            <HiOutlineFire size={14} /> Health Packages
          </div>
          <h2 style={{ fontFamily: jk, fontWeight: 800, fontSize: 'clamp(28px,4.5vw,46px)', color: '#0f172a', marginBottom: 14, letterSpacing: -0.5 }}>
            Choose Your{' '}
            <span style={{ color: burgundy }}>
              Health Plan
            </span>
          </h2>
          <p style={{ fontSize: 'clamp(14px,1.5vw,17px)', color: '#475569', maxWidth: 540, margin: '0 auto', lineHeight: 1.8, fontWeight: 500 }}>
            Comprehensive NABL-accredited checkups. All plans include <span style={{ fontWeight: 700, color: burgundy }}>Flat 50% Off</span>. Easy booking via call or WhatsApp.
          </p>
        </div>

        {/* Responsive Grid with Premium Card Upgrades */}
        <div style={{ display: 'grid', gap: 'clamp(20px,2.5vw,28px)' }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map(pkg => (
            <div key={pkg.id} style={{
              position: 'relative', background: '#ffffff', borderRadius: 28,
              padding: '32px',
              border: pkg.popular ? `2px solid ${burgundy}` : '1.5px solid #eaeae8',
              boxShadow: pkg.popular ? '0 16px 40px rgba(126, 30, 43, 0.08)' : shadow,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = hoverShadow; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = pkg.popular ? '0 16px 40px rgba(126, 30, 43, 0.08)' : shadow; }}
            >
              <div>
                {/* Floating Badge (Pill design matching reference) */}
                {pkg.badge && (
                  <div style={{
                    position: 'absolute', top: -14, right: 24,
                    fontSize: 11, fontWeight: 800, padding: '6px 16px',
                    borderRadius: 50, boxShadow: '0 4px 12px rgba(126, 30, 43, 0.15)',
                    background: pkg.popular ? `linear-gradient(135deg, ${burgundy}, ${primaryGold})` : `linear-gradient(135deg, ${burgundy}, #cb5a5e)`,
                    color: '#ffffff',
                    display: 'flex', alignItems: 'center', gap: 4,
                    letterSpacing: 0.5,
                  }}>
                    {pkg.popular ? <RiStarFill size={12} /> : <HiOutlineSparkles size={12} />}
                    {pkg.badge}
                  </div>
                )}

                {/* Card Title */}
                <h3 style={{ fontFamily: jk, fontWeight: 800, fontSize: 21, color: '#0f172a', marginBottom: 8 }}>{pkg.name}</h3>

                {/* Tests Counter Badge */}
                <span style={{
                  display: 'inline-flex', padding: '5px 12px',
                  background: softBeigeBg, color: primaryGold, fontSize: 11, fontWeight: 800, borderRadius: 8,
                }}>{pkg.testCount} Tests Included</span>

                {/* Price (Matching reference style) */}
                <div style={{ marginTop: 24, marginBottom: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ position: 'relative', fontSize: 15, fontWeight: 600, color: '#94a3b8' }}>
                      ₹{pkg.mrp.toLocaleString()}
                      <span style={{ position: 'absolute', left: -2, right: -2, top: '50%', height: 2, background: burgundy, transform: 'rotate(-8deg)' }} />
                    </span>
                    <span style={{ fontFamily: jk, fontWeight: 900, fontSize: 32, color: '#0f172a', letterSpacing: -0.5 }}>₹{pkg.offerPrice.toLocaleString()}</span>
                  </div>
                  <p style={{ fontSize: 12, color: burgundy, fontWeight: 700, marginTop: 4 }}>
                    Save ₹{(pkg.mrp - pkg.offerPrice).toLocaleString()} (50% off)
                  </p>
                </div>

                {/* Highlights List */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px' }}>
                  {pkg.highlights.slice(0, 6).map(h => (
                    <li key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: '#475569', marginBottom: 10, fontWeight: 500 }}>
                      <FiCheckCircle size={15} color={primaryGold} style={{ flexShrink: 0, marginTop: 2 }} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button — WhatsApp Booking */}
              <a href={`https://wa.me/${contactInfo.whatsapp}?text=Hi%2C%20I%20want%20to%20book%20${encodeURIComponent(pkg.name)}%20(₹${pkg.offerPrice})`}
                target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', gap: 8,
                  fontWeight: 700, padding: '14px', borderRadius: 16, textDecoration: 'none',
                  fontSize: 14, transition: 'all 0.2s',
                  background: burgundy, color: '#ffffff',
                  boxShadow: pkg.popular ? '0 6px 20px rgba(126,30,43,0.2)' : '0 4px 12px rgba(30,41,59,0.1)',
                }}
              >
                <IoLogoWhatsapp size={16} />
                Book for ₹{pkg.offerPrice.toLocaleString()}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
