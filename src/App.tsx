import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { QuoteBanner } from './components/QuoteBanner';
import { Contact } from './components/Contact';
import { Instagram } from './components/Instagram';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <HowItWorks />
        <QuoteBanner />
        <Contact />
        <Instagram />
      </main>
      <Footer />
    </>
  );
}

export default App;

