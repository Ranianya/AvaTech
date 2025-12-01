import React from 'react';
import { assets } from '../assets/assets';
// You would need to replace these placeholder strings with the actual image imports
// The images used in the original design appear to be:
// 1. Appa with Aang, Sokka, and Katara (Phase 1)
// 2. Aang and Bumi escaping the Fire Sages (Phase 2)
// 3. Iroh and Zuko sitting under a tree (Phase 3)
const phase1Image = 'phase1-dear-bender.jpg'; // Placeholder
const phase2Image = 'phase2-be-ready.jpg'; // Placeholder
const phase3Image = 'phase3-to-win.jpg'; // Placeholder
const backgroundPattern = 'timeline-background.jpg'; // Placeholder for the misty mountain background

const PhaseCard = ({ title, imageSrc, items }) => (
  <div className="flex-1 min-w-[300px] p-4 mx-2">
    <div className="bg-white/80 border border-gray-300 shadow-xl rounded-lg overflow-hidden h-full">
      <h2 className="text-3xl font-serif text-center py-4 bg-gray-100 tracking-wider">
        {title}
      </h2>
      <div className="p-4">
        {/* Image Section */}
        <div className="mb-4">
          <img
            src={imageSrc}
            alt={`${title} illustration`}
            className="w-full h-auto object-cover border-2 border-gray-400"
          />
        </div>

        {/* Text/Content Section - This is a rough estimation of the font styles */}
        <div className="font-sans text-xl text-gray-800 tracking-wide">
          {/* Only include the "Dear Bender", "BE READY", "TO WIN" text if it's meant to be below the image,
              otherwise, it's the image's content. We'll assume it's part of the visual content. */}
          {title === 'PHASE 1' && <p className="font-bold text-2xl mb-3 text-center">DEAR BENDER,</p>}
          {title === 'PHASE 2' && <p className="font-bold text-2xl mb-3 text-center">BE READY</p>}
          {title === 'PHASE 3' && <p className="font-bold text-2xl mb-3 text-center">TO WIN</p>}

          <ul className="list-none space-y-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#765629] mr-2 text-4xl leading-none">
                  &bull;
                </span>
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Timeline = () => {
  // Data structure for the phases
  const phases = [
    {
      title: 'PHASE 1',
      imageSrc: assets.firstim,
      items: [
        'OPENNING CEREMONY',
        'WORKSHOPS',
        'FIRST CHALLENGE (WATER TRIBE)',
      ],
    },
    {
      title: 'PHASE 2',
      imageSrc: assets.secondim,
      items: [
        'CHALLENGES 2,3,4 ( FIRE, EARTH, AIR )',
        'SABOTAGING TESTS',
        'OBTENTION OF CODES 2,3 AND 4',
      ],
    },
    {
      title: 'PHASE 3',
      imageSrc: assets.thirdim,
      items: [
        'FINALE CATCH THE FLAG',
        'CLOSING CEREMONY',
        'NETWORKING',
      ],
    },
  ];

  return (
    <div
      className="min-h-screen p-10 font-serif"
      style={{
        // Mimicking the background image and texture with a fallback color
        backgroundImage: `url(${assets.back_time})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#f9f5e8', // Light parchment/tan color
      }}
    >
      <header className="text-center mb-10">
        <h1 className="text-6xl font-extrabold text-gray-900 tracking-widest">
          EVENT TIMELINE
        </h1>
       
      </header>

      <main className="flex flex-wrap justify-center items-stretch -mx-2">
        {phases.map((phase, index) => (
          <PhaseCard key={index} {...phase} />
        ))}
      </main>
    </div>
  );
};

export default Timeline;