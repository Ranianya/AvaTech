import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Timeline from './components/Timeline.jsx';
import Thefournations from './components/Thefournations.jsx';
import './components/Thefournations.css';
import EventPage from './components/EventPage.jsx'
import LanguageSkills from './components/LanguageSkills.jsx'
import FAQSection from './components/FAQSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import TeaserSection from './components/TeaserSection.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" font-serif  bg-[#F1E2B9]">
         <div className="relative ">
            <Navbar />
            <Hero />
          </div>
         <Thefournations/>
         <EventPage/>
         <TeaserSection/>
         <LanguageSkills/>
         <Timeline/>
         <FAQSection/>
         <ContactSection/>

       {/* <Nations /> */}
</div>
);
}

export default App
