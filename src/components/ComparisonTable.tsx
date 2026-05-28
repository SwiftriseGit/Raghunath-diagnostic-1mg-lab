import { useState, Fragment } from 'react';
import { comparisonData, packages } from '../data/packages';
import { FiCheckCircle, FiXCircle, FiChevronDown } from 'react-icons/fi';
import { HiOutlineTableCells } from 'react-icons/hi2';

const burgundy = '#7E1E2B';
const primaryGold = '#A68B52';
const softBeigeBg = '#FAF6F0';
const jk = "'Plus Jakarta Sans', sans-serif";

export default function ComparisonTable() {
  const [expanded, setExpanded] = useState(false);

  const cats: { name: string; tests: typeof comparisonData }[] = [];
  comparisonData.forEach(item => {
    const ex = cats.find(c => c.name === item.category);
    if (ex) ex.tests.push(item); else cats.push({ name: item.category, tests: [item] });
  });
  const display = expanded ? cats : cats.slice(0, 5);

  return (
    <section id="compare" style={{ position: 'relative', padding: 'clamp(60px,8vw,90px) 0 clamp(30px,4vw,50px) 0', background: 'linear-gradient(180deg, #FAF6F0 0%, #ffffff 100%)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '8px 18px', background: '#ffffff', border: `1.5px solid ${primaryGold}`,
            borderRadius: 50, fontSize: 11, fontWeight: 800, color: burgundy,
            letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16,
            boxShadow: '0 2px 8px rgba(126, 30, 43, 0.05)',
          }}><HiOutlineTableCells size={14} /> Package Comparison</div>
          <h2 style={{ fontFamily: jk, fontWeight: 800, fontSize: 'clamp(28px,4.5vw,46px)', color: '#0f172a', marginBottom: 14, letterSpacing: -0.5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <img src="/images/1mglab.png" alt="Tata 1mg Labs Logo" className="h-[40px] md:h-[50px] lg:h-[60px] w-auto object-contain mx-auto" />
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <img src="/images/50-removebg-preview.png" alt="Flat 50% Off Ribbon" className="h-[45px] md:h-[65px] lg:h-[85px] w-auto object-contain" />
          </div>
        </div>

        {/* Table Container */}
        <div style={{ background: '#ffffff', borderRadius: 28, boxShadow: '0 16px 40px rgba(126, 30, 43, 0.05)', border: '1.5px solid #eaeae8', overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <table style={{ width: '100%', minWidth: 780, borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead>
                <tr>
                  <th className="sticky-first-col" style={{ textAlign: 'left', padding: '16px 20px', fontSize: 13, fontWeight: 700, color: '#ffffff', background: burgundy, position: 'sticky', left: 0, zIndex: 5 }}>
                    Test Name
                  </th>
                  {packages.map(p => (
                    <th key={p.id} className="table-pkg-header" style={{ textAlign: 'center', padding: '16px 12px', background: burgundy, minWidth: 95 }}>
                      <div className="table-pkg-name" style={{ color: '#ffffff', fontSize: 13, fontWeight: 800 }}>{p.name}</div>
                      <div className="table-pkg-count" style={{ color: '#f3e8d2', fontSize: 11, fontWeight: 600, marginTop: 2 }}>{p.testCount} Tests</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {display.map(cat => (
                  <Fragment key={cat.name}>
                    <tr>
                      <td colSpan={7} style={{
                        padding: '12px 20px', background: softBeigeBg, color: burgundy,
                        fontSize: 11, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase',
                        borderBottom: `1.5px solid #eae2d5`,
                      }}>{cat.name}</td>
                    </tr>
                    {cat.tests.map((t, i) => (
                      <tr key={t.test}>
                        <td className="sticky-first-col" style={{
                          padding: '12px 20px', fontSize: 13, fontWeight: 600, color: '#334155',
                          borderBottom: '1px solid #f1f5f9', background: i % 2 ? '#f8fafc' : '#ffffff',
                          position: 'sticky', left: 0, zIndex: 2,
                        }}>{t.test}</td>
                        {t.packages.map((inc, j) => (
                          <td key={j} style={{
                            textAlign: 'center', padding: '12px 10px',
                            borderBottom: '1px solid #f1f5f9', background: i % 2 ? '#f8fafc' : '#ffffff',
                          }}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                              {inc
                                ? <FiCheckCircle size={17} color="#15803d" />
                                : <FiXCircle size={17} color="#f87171" />
                              }
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}

                {/* Sticky Price Bottom Row */}
                <tr>
                  <td className="sticky-first-col" style={{ padding: '18px 20px', color: '#ffffff', fontWeight: 800, fontSize: 13, background: burgundy, position: 'sticky', left: 0, zIndex: 2 }}>
                    Price
                  </td>
                  {packages.map(p => (
                    <td key={p.id} className="table-pkg-price" style={{ textAlign: 'center', padding: '18px 12px', background: burgundy }}>
                      <div className="table-pkg-mrp" style={{ position: 'relative', display: 'inline-block', color: '#f3e8d2', fontSize: 12, marginBottom: 3, fontWeight: 600 }}>
                        ₹{p.mrp.toLocaleString()}
                        <span style={{ position: 'absolute', left: -2, right: -2, top: '50%', height: 1.5, background: primaryGold, transform: 'rotate(-8deg)' }} />
                      </div>
                      <div className="table-pkg-offer" style={{ color: '#ffffff', fontWeight: 900, fontSize: 19, fontFamily: jk }}>₹{p.offerPrice.toLocaleString()}</div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Expand Button */}
          {cats.length > 5 && (
            <div style={{ textAlign: 'center', padding: 16, borderTop: '1px solid #f1f5f9' }}>
              <button onClick={() => setExpanded(!expanded)} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '10px 24px', fontSize: 13, fontWeight: 700, color: burgundy,
                background: 'transparent', border: 'none', borderRadius: 10, cursor: 'pointer',
              }}>
                {expanded ? 'Show Less' : `Show All ${cats.length} Categories`}
                <FiChevronDown size={16} style={{ transition: 'transform 0.3s', transform: expanded ? 'rotate(180deg)' : 'none' }} />
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .sticky-first-col {
          min-width: 180px;
          max-width: 180px;
          width: 180px;
        }
        @media (max-width: 640px) {
          .sticky-first-col {
            min-width: 120px !important;
            max-width: 120px !important;
            width: 120px !important;
            font-size: 11px !important;
            padding: 10px 10px !important;
          }
          .table-pkg-header {
            min-width: 80px !important;
            padding: 12px 6px !important;
          }
          .table-pkg-name {
            font-size: 11px !important;
          }
          .table-pkg-count {
            font-size: 9px !important;
          }
          .table-pkg-price {
            padding: 12px 6px !important;
          }
          .table-pkg-mrp {
            font-size: 10px !important;
          }
          .table-pkg-offer {
            font-size: 15px !important;
          }
        }
      `}</style>
    </section>
  );
}
