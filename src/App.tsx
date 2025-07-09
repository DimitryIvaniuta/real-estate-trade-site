import React from 'react';
import { Navbar }      from './components/Navbar';
import { Hero }        from './components/Hero';
import { Investment }  from './components/Investment';
import { Properties }  from './components/Properties';
import { Gallery }     from './components/Gallery';
import { Location }    from './components/Location';
import { Company }     from './components/Company';
import { Contact }     from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Investment />
        <Properties />
        <Gallery />
        <Location />
        <Company />
        <Contact />
      </main>
    </>
  );
}

export default App;
