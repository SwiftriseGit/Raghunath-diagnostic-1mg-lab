  import { contactInfo } from '../data/packages';
import { FiPhone } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io5';

const burgundy = '#7E1E2B';
const gold = '#A68B52';

export default function FloatingCTA() {
  return (
    <div className="lg:hidden" style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50,
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1.5px solid #eaeae8',
        padding: '12px 16px', paddingBottom: 'max(12px, env(safe-area-inset-bottom))',
      }}>
        <div style={{ display: 'flex', gap: 12 }}>
          {/* Call CTA */}
          <a href={`tel:${contactInfo.phone}`} style={{
            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            padding: '14px', background: `linear-gradient(135deg, ${burgundy}, #631620)`,
            color: '#ffffff', fontWeight: 700, fontSize: 14, borderRadius: 50,
            textDecoration: 'none', boxShadow: '0 4px 16px rgba(126, 30, 43, 0.25)',
          }}>
            <FiPhone size={16} /> Call Now
          </a>
          
          {/* WhatsApp CTA */}
          <a href={`https://wa.me/${contactInfo.whatsapp}?text=Hi%2C%20I%20want%20to%20book%20a%20health%20checkup`}
            target="_blank" rel="noopener noreferrer" style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              padding: '14px', background: gold, color: '#ffffff',
              fontWeight: 700, fontSize: 14, borderRadius: 50, textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(166,139,82,0.25)',
            }}>
            <IoLogoWhatsapp size={16} /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
