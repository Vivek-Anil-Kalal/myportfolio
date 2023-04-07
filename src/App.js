import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from './scenes/DotGroup.jsx'
import Landing from './scenes/Landing.jsx'
import MySkills from './scenes/MySkills.jsx'
import Contact from './scenes/Contact'
import Projects from './scenes/Projects.jsx'
import Testimonials from './scenes/Testimonials'

import LineGradient from './components/LineGradient.jsx'
import Footer from "./scenes/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app bg-deep-blue">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto">
        <MySkills />
      </div>
      
      <LineGradient />

      <div className="w-5/6 mx-auto">
        <Projects />
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto">
        <Testimonials />
      </div>
      <LineGradient />

      <div className="w-5/6 mx-auto h-full">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
