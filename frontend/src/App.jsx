// App.jsx
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Thefournations from './components/Thefournations.jsx';
import EventPage from './components/EventPage.jsx';
import TeaserSection from './components/TeaserSection.jsx';
import LanguageSkills from './components/LanguageSkills.jsx';
import Timeline from './components/Timeline.jsx';
import FAQSection from './components/FAQSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import './App.css';
import './components/Thefournations.css';

function App() {
  return (
    <div className="font-serif bg-[#F1E2B9]">
      {/* Navigation & Hero Section */}
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
      
      {/* Four Nations Section */}
      <section id='nations' className="scroll-mt-28">
      <Thefournations />
      </section>

      {/* Events Section with ID for navigation */}
      <section id="events" >
        <EventPage />
      </section>

      <section id='teaser'>
      {/* Teaser Section */}
      <TeaserSection />
      </section>


      {/* Language Skills Section */}
      <section id='languages'>  
      <LanguageSkills />
      </section> 

      {/* Timeline Section */}
      <section id='timeline'>
      <Timeline />
      </section>
      
      {/* FAQ Section with ID for navigation */}
      <section id="faq">
        <FAQSection />
      </section>
      
      {/* Contact Section with ID for navigation */}
      <section id="contact">
        <ContactSection />
        
      </section>
    </div>
  );
}

export default App