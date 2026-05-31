// ============================================
// NURRA — App.jsx
// Main page assembler — add sections here as
// they get converted from HTML → JSX
// ============================================

import './styles/globals.css';
import Hero    from './components/sections/Hero';
import Problem  from './components/sections/Problem';
import Benefits   from './components/sections/Benefits';
import HowItWorks from './components/sections/HowItWorks';
import Packages      from './components/sections/Packages';
import CustomizeCare from './components/sections/CustomizeCare';
import First10 from './components/sections/First10';
import FAQ            from './components/sections/FAQ';
import WaitlistSection from './components/sections/WaitlistSection';

// 🔜 Uncomment each section as it gets converted:
// import Benefits       from './components/sections/Benefits';
// import HowItWorks     from './components/sections/HowItWorks';
// import CustomizeCare  from './components/sections/CustomizeCare';
// import Packages       from './components/sections/Packages';
// import First10        from './components/sections/First10';
// import LimitedOffer   from './components/sections/LimitedOffer';
// import WaitlistSection from './components/sections/WaitlistSection';
// import FAQ            from './components/sections/FAQ';

function App() {
  return (
    <div className="nurra-page">

      {/* ── Hero ─────────────────────────────── */}
      <Hero />

      {/* ── Problem ──────────────────────────── */}
      <Problem />

      {/* ── Benefits ─────────────────────────── */}
      <Benefits />

      {/* ── How It Works ─────────────────────── */}
      <HowItWorks />

      {/* ── Packages ─────────────────────────── */}
      <Packages />

      {/* ── Customize Care ───────────────────── */}
      <CustomizeCare />

      {/* ── First 10 Offer ───────────────────── */}
      <First10 />

      {/* ── FAQ ──────────────────────────────── */}
      <FAQ />

      {/* ── Waitlist ─────────────────────────── */}
      <WaitlistSection />

    </div>
  );
}

export default App;
