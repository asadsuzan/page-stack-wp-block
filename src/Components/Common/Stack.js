import { useEffect, useRef, useState } from 'react';
import { useSelect } from '@wordpress/data';
import Navigation from './pages/Navigation';
import Indicators from './pages/Indicators';

import { InnerBlocks } from "@wordpress/block-editor";
const Stack = ({ attributes, setAttributes, children, clientId, content }) => {
  const { sections } = attributes || {}

  const innerBlocks = useSelect((select) => {
    if (clientId) {
      return select('core/block-editor').getBlocks(clientId);
    }
    return [];
  }, [clientId]);

  // Sync innerBlocks to attributes.sections
  useEffect(() => {
    if (setAttributes && innerBlocks.length > 0) {
      const updatedSections = innerBlocks.map((block, index) => ({
        id: block.attributes.title || `section-${index}`,
        label: block.attributes.title || `Section ${index + 1}`,
        order: index + 1,
        icon: block.attributes.icon?.class || 'fa-solid fa-star'
      }));
      setAttributes({ sections: updatedSections });
    }
  }, [innerBlocks, setAttributes]);

  // Template for InnerBlocks based on sections
  const template = sections ? sections.map(section => ['psb/section', { title: section.label, icon: { class: section.icon } }]) : [];


  const [currentSection, setCurrentSection] = useState(0);
  const scrollRef = useRef(null);

  const scrollToSection = (index) => {
    if (scrollRef.current) {
      const sectionWidth = scrollRef.current.offsetWidth;

      scrollRef.current.scrollTo({
        left: index * sectionWidth,
        behavior: 'smooth'
      });
      if (setAttributes) {
        setAttributes({ activeSectionIndex: index })
      }
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

      <div className='bBlocksPageStack'>
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
          className='scroll-container'
          ref={scrollRef}
          onWheel={handleWheel}
          {...(content ? { dangerouslySetInnerHTML: { __html: content } } : {})}
        >
          {!content && (setAttributes ? (
            <InnerBlocks
              allowedBlocks={['psb/section']} // শুধু child section add করা যাবে
              template={template}
              templateLock={false}
            />
          ) : (
            children
          ))}
        </div>

      </div>


    </div>

  );
};

export default Stack;