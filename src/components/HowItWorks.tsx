import { useState, useEffect } from 'react';
import { FiCalendar, FiDroplet, FiFileText } from 'react-icons/fi';
import { HiOutlineBeaker } from 'react-icons/hi2';
import { motion } from 'framer-motion';

const burgundy = '#7E1E2B';
const primaryGold = '#A68B52';
const jk = "'Plus Jakarta Sans', sans-serif";

const steps = [
  { num: '01', title: 'Book via Call / WhatsApp', desc: 'Choose your health package. Call us or send a WhatsApp message — we\'ll confirm your slot instantly.', icon: <FiCalendar size={28} /> },
  { num: '02', title: 'Sample Collection', desc: 'Visit our lab or opt for doorstep pickup. Trained phlebotomists ensure hygienic, painless sampling.', icon: <FiDroplet size={28} /> },
  { num: '03', title: 'Get Digital Reports', desc: 'Receive detailed reports on WhatsApp & email within 24 hours. Consult with our doctors if needed.', icon: <FiFileText size={28} /> },
];

export default function HowItWorks() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation delays
  const getStepDelay = (index: number) => {
    if (isMobile) return index * 0.25;
    if (index === 0) return 0.1;
    if (index === 1) return 1.1;
    return 2.1;
  };

  const getLineDelay = (index: number) => {
    if (index === 0) return 0.55;
    return 1.55;
  };

  return (
    <section style={{ position: 'relative', padding: 'clamp(80px,10vw,120px) 0', background: '#2E0F14', overflow: 'hidden' }}>
      {/* Light glow blob */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, background: 'rgba(166,139,82,0.06)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', position: 'relative' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px,6vw,72px)' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '8px 18px', background: 'rgba(166,139,82,0.08)', border: '1px solid rgba(166,139,82,0.2)',
            borderRadius: 50, fontSize: 11, fontWeight: 800, color: primaryGold,
            letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16,
          }}><HiOutlineBeaker size={14} /> Simple Process</div>
          <h2 style={{ fontFamily: jk, fontWeight: 800, fontSize: 'clamp(28px,4.5vw,46px)', color: '#ffffff', marginBottom: 14, letterSpacing: -0.5 }}>
            How It <span style={{ color: primaryGold }}>Works</span>
          </h2>
          <p style={{ fontSize: 'clamp(14px,1.5vw,17px)', color: '#e4d2bf', maxWidth: 500, margin: '0 auto', fontWeight: 500 }}>
            No app downloads. No online forms. Just call or WhatsApp us to get started.
          </p>
        </div>

        {/* Steps Grid */}
        <div style={{ display: 'grid', gap: 'clamp(32px,4vw,48px)' }}
          className="grid-cols-1 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.num} style={{ position: 'relative', textAlign: 'center' }}>
              {/* Dash Line Animation - only on desktop */}
              {i < steps.length - 1 && (
                <motion.div
                  className="hidden md:block"
                  style={{
                    position: 'absolute',
                    top: 46,
                    left: 'calc(50% + 54px)',
                    borderTop: '2px dashed rgba(166,139,82,0.35)',
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: 'calc(100% - 60px)' }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    delay: getLineDelay(i),
                    ease: "easeInOut"
                  }}
                />
              )}

              {/* Step Card Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 24 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  type: "spring",
                  stiffness: 110,
                  damping: 14,
                  delay: getStepDelay(i),
                }}
              >
                {/* Icon Container with pop effect on hover */}
                <motion.div
                  style={{
                    position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: 92, height: 92, borderRadius: 24,
                    background: 'rgba(166,139,82,0.06)', border: '1.5px solid rgba(166,139,82,0.15)',
                    color: primaryGold, marginBottom: 24,
                  }}
                  whileHover={{
                    scale: 1.08,
                    borderColor: primaryGold,
                    boxShadow: '0 8px 24px rgba(166, 139, 82, 0.15)',
                    backgroundColor: 'rgba(166,139,82,0.1)'
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                >
                  {s.icon}
                  <span style={{
                    position: 'absolute', top: -6, right: -6,
                    width: 28, height: 28, background: burgundy,
                    borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 800, color: '#ffffff',
                    boxShadow: '0 4px 12px rgba(126,30,43,0.3)',
                  }}>{s.num}</span>
                </motion.div>

                {/* Title and Description */}
                <h3 style={{ fontFamily: jk, fontWeight: 800, fontSize: 18, color: '#ffffff', marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: '#e4d2bf', lineHeight: 1.75, maxWidth: 290, margin: '0 auto', fontWeight: 500 }}>{s.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
