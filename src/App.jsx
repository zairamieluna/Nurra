// ============================================
// NURRA — App.jsx
// Main page assembler
// ============================================

import './styles/globals.css';
import Hero           from './sections/Hero';
import Problem        from './sections/Problem';
import Benefits       from './sections/Benefits';
import HowItWorks     from './sections/HowItWorks';
import Packages       from './sections/Packages';
import CustomizeCare  from './sections/CustomizeCare';
import First10        from './sections/First10';
import FAQ            from './sections/FAQ';
import WaitlistSection from './sections/WaitlistSection';

function App() {
  return (
    <div className="nurra-page">
      <Hero />
      <Problem />
      <Benefits />
      <HowItWorks />
      <Packages />
      <CustomizeCare />
      <First10 />
      <FAQ />
      <WaitlistSection />
    </div>
  );
}

export default App;
