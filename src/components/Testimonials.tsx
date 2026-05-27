import { RiStarFill } from 'react-icons/ri';
import { FiMessageCircle } from 'react-icons/fi';

const burgundy = '#7E1E2B';
const gold = '#A68B52';

const jk = "'Plus Jakarta Sans', sans-serif";

const reviews = [
  { name: 'Priya Mohanty', loc: 'Jeypore', text: 'Very professional lab. Reports came within 12 hours on WhatsApp. Home collection was very convenient for my elderly parents.', avatar: 'PM' },
  { name: 'Rajesh Kumar Sahu', loc: 'Koraput', text: 'Best diagnostic centre in Jeypore. Affordable prices with Tata 1mg quality. Booked Aayushya 4 for the whole family!', avatar: 'RS' },
  { name: 'Dr. Anita Patel', loc: 'Jeypore', text: 'As a physician, I trust Raghunath Diagnostics. Their CAP accreditation and consistent accuracy make them my preferred lab.', avatar: 'AP' },
];

export default function Testimonials() {
  return (
    <section style={{ position: 'relative', padding: 'clamp(80px,10vw,120px) 0', background: '#FAF6F0', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, background: 'rgba(166,139,82,0.06)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', position: 'relative' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px,5vw,64px)' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '8px 18px', background: '#ffffff', border: `1.5px solid ${gold}`,
            borderRadius: 50, fontSize: 11, fontWeight: 800, color: burgundy,
            letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16,
            boxShadow: '0 2px 8px rgba(126, 30, 43, 0.05)',
          }}><FiMessageCircle size={14} /> Testimonials</div>
          <h2 style={{ fontFamily: jk, fontWeight: 800, fontSize: 'clamp(28px,4.5vw,46px)', color: '#0f172a', letterSpacing: -0.5 }}>
            What Our <span style={{ color: burgundy }}>Patients Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div style={{ display: 'grid', gap: 'clamp(18px,2vw,26px)' }} className="grid-cols-1 md:grid-cols-3">
          {reviews.map(r => (
            <div key={r.name} style={{
              background: '#ffffff', borderRadius: 28, padding: '32px',
              border: '1.5px solid #eaeae8', boxShadow: '0 10px 30px rgba(126, 30, 43, 0.03)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(126, 30, 43, 0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(126, 30, 43, 0.03)'; }}
            >
              {/* Star Ratings */}
              <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                {Array.from({ length: 5 }).map((_, j) => <RiStarFill key={j} size={18} color="#f59e0b" />)}
              </div>
              <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.8, marginBottom: 24, fontWeight: 500 }}>"{r.text}"</p>

              {/* User Bio */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%', background: `linear-gradient(135deg, ${burgundy}, ${gold})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#ffffff', fontWeight: 800, fontSize: 13,
                  boxShadow: '0 4px 10px rgba(126, 30, 43, 0.15)',
                }}>{r.avatar}</div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 14, color: '#0f172a', margin: 0 }}>{r.name}</p>
                  <p style={{ fontSize: 12, color: '#94a3b8', margin: 0, fontWeight: 500 }}>{r.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
