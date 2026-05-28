import { FiShield, FiHome, FiClock, FiDollarSign } from 'react-icons/fi';
const burgundy = '#7E1E2B';
const gold = '#A68B52';

const jk = "'Plus Jakarta Sans', sans-serif";

const features = [
  { icon: <FiShield size={26} />, bg: '#F5ECE1', color: gold, title: 'NABL & CAP Accredited', desc: 'Highest quality standards. Every test result you can trust, certified by international bodies.' },
  { icon: <FiHome size={26} />, bg: '#fdf2f4', color: burgundy, title: 'Home Sample Collection', desc: 'Our phlebotomists visit your doorstep. No travel, no waiting — tested from your home comfort.' },
  { icon: <FiClock size={26} />, bg: '#FAF6F0', color: gold, title: 'Reports in 24 Hours', desc: 'Digital reports on WhatsApp & email within 24 hours. Fast, accurate, and easy to read.' },
  { icon: <FiDollarSign size={26} />, bg: '#fdf2f4', color: burgundy, title: 'Most Affordable', desc: 'Flat 50% off on all packages. Premium Tata 1mg lab quality at prices that don\'t break the bank.' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" style={{ position: 'relative', padding: 'clamp(30px,4vw,50px) 0 clamp(60px,8vw,100px) 0', background: '#ffffff', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: -100, left: -100, width: 400, height: 400, background: 'rgba(166,139,82,0.06)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', position: 'relative' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px,5vw,64px)' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '8px 18px', background: '#ffffff', border: `1.5px solid ${gold}`,
            borderRadius: 50, fontSize: 11, fontWeight: 800, color: burgundy,
            letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16,
            boxShadow: '0 2px 8px rgba(126, 30, 43, 0.05)',
          }}>Why Choose Us</div>
          <h2 style={{ fontFamily: jk, fontWeight: 800, fontSize: 'clamp(28px,4.5vw,46px)', color: '#0f172a', marginBottom: 14, letterSpacing: -0.5 }}>
            Trusted by <span style={{ color: burgundy }}>Thousands</span>
          </h2>
          <p style={{ fontSize: 'clamp(14px,1.5vw,17px)', color: '#475569', maxWidth: 520, margin: '0 auto', fontWeight: 500, lineHeight: 1.7 }}>
            Your neighbourhood's most reliable diagnostic lab, backed by Tata 1mg Labs.
          </p>
        </div>

        {/* Features List */}
        <div style={{ display: 'grid', gap: 'clamp(18px,2vw,26px)' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(f => (
            <div key={f.title} style={{
              background: '#ffffff', borderRadius: 24, padding: '32px 28px',
              border: '1.5px solid #eaeae8', boxShadow: '0 10px 30px rgba(126, 30, 43, 0.03)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(126, 30, 43, 0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(126, 30, 43, 0.03)'; }}
            >
              <div style={{
                width: 54, height: 54, borderRadius: 16, background: f.bg, color: f.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
                boxShadow: '0 4px 10px rgba(0,0,0,0.01)',
              }}>{f.icon}</div>
              <h3 style={{ fontFamily: jk, fontWeight: 800, fontSize: 17, color: '#0f172a', marginBottom: 10 }}>{f.title}</h3>
              <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.7, fontWeight: 500 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
