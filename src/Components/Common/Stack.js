import { useEffect, useRef, useState } from 'react';
import Indicators from './pages/Indicators';
import Navigation from './pages/Navigation';

const Stack = ({ attributes }) => {


  const [currentSection, setCurrentSection] = useState(0);
  const scrollRef = useRef(null);

  const sections = [
    { id: 'hero', title: 'Hero' },

    { id: 'features', title: 'Features' },

    { id: 'contact', title: 'Contact' },

    { id: 'team', title: 'Team' },

    { id: 'analytics', title: 'Analytics' },
    { id: 'newpage', title: 'New Page' },

  ];

  const scrollToSection = (index) => {
    if (scrollRef.current) {
      const sectionWidth = scrollRef.current.offsetWidth;

      scrollRef.current.scrollTo({
        left: index * sectionWidth,
        behavior: 'smooth'
      });
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

        <section>1</section>
        <section>2</section>
        <section>3</section>
        <section>4</section>
        <section>5</section>
        <section>6</section>
      </div>
    </div>
  );
};

export default Stack;