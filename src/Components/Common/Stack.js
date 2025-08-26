import { useEffect, useRef, useState } from 'react';
import Indicators from './pages/Indicators';
import Navigation from './pages/Navigation';
import Hero from './pages/Hero';
import Features from './pages/Features';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Analytics from './pages/Analytics';

const Stack = ({ attributes, setAttributes }) => {
  const { sections } = attributes || {}


  const [currentSection, setCurrentSection] = useState(0);
  const scrollRef = useRef(null);





  const scrollToSection = (index) => {
    if (scrollRef.current) {
      const sectionWidth = scrollRef.current.offsetWidth;

      scrollRef.current.scrollTo({
        left: index * sectionWidth,
        behavior: 'smooth'
      });
      setAttributes({ activeSectionIndex: index })
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const sectionWidth = scrollRef.current.offsetWidth;
      const newCurrentSection = Math.round(scrollLeft / sectionWidth);
      setCurrentSection(newCurrentSection);
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (scrollRef.current) {
      const delta = e.deltaY;
      const threshold = 50; // Minimum scroll amount to trigger section change

      if (Math.abs(delta) > threshold) {
        if (delta > 0 && currentSection < sections.length - 1) {
          // Scroll down/right - go to next section
          scrollToSection(currentSection + 1);
        } else if (delta < 0 && currentSection > 0) {
          // Scroll up/left - go to previous section
          scrollToSection(currentSection - 1);
        }
      }
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);


  return (
    <div className="bBlocksPageStack">

      <Navigation
        sections={sections}
        currentSection={currentSection}
        onScrollToSection={scrollToSection}
        logoText={attributes.logoText || 'STACK'}

      />
      <Indicators
        sections={sections}
        currentSection={currentSection}
        handleClick={scrollToSection}

      />
      <div
        ref={scrollRef}
        onWheel={handleWheel}
        className='scroll-container'
      >


        {
          sections.map((section, idx) => {
            switch (section.id) {
              case 'hero':
                return <Hero key={idx} section={section} />;
              case 'features':
                return <Features key={idx} section={section} />;
              case 'contact':
                return <Contact key={idx} section={section} />;
              case 'team':
                return <Team key={idx} section={section} />;
              case 'analytics':
                return <Analytics key={idx} section={section} />;
              default:
                return (
                  <section
                    key={idx}
                    className="flex items-center justify-center min-h-screen bg-black text-white"
                  >
                    <h1>{section?.id}</h1>
                  </section>
                );
            }
          })
        }



      </div>
    </div>
  );
};

export default Stack;