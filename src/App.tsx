import React from 'react';
import { Navbar }      from './components/Navbar';
import { Hero }        from './components/Hero';
import { InvestmentSection }  from './components/InvestmentSection';
import { Properties }  from './components/Properties';
import { Gallery }     from './components/Gallery';
import { Location }    from './components/Location';
import { Company }     from './components/Company';
import { Contact }     from './components/Contact';
import About from '@/components/About/About';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <InvestmentSection />
        <Properties />
        <Gallery />
        <Location />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
