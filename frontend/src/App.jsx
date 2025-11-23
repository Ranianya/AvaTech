import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen w-full font-serif bg-[#f7f7f7]">
        <Navbar />
         <Hero />
       {/* <Nations /> */}
</div>
);
}

export default App
