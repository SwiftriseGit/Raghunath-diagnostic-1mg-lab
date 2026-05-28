import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PackageCards from './components/PackageCards';
import ComparisonTable from './components/ComparisonTable';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

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
      <ScrollToTop />
    </div>
  );
}
