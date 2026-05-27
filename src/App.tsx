import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PackageCards from './components/PackageCards';
import ComparisonTable from './components/ComparisonTable';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <main>
        <Hero />
        <PackageCards />
        <ComparisonTable />
        <WhyChooseUs />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
      {/* Bottom padding for mobile floating CTA */}
      <div className="lg:hidden" style={{ height: 80 }} />
    </div>
  );
}
