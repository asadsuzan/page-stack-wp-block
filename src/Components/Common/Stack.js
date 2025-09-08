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
    if (!setAttributes || !innerBlocks) return;
    let updatedSections = [...(attributes.sections || [])];
    const innerLength = innerBlocks.length;
    const sectionsLength = updatedSections.length;
    let hasChanges = false;

    if (innerLength > sectionsLength) {
      // Add new sections
      const defaultSection = sectionsLength > 0 ? { ...updatedSections[0] } : {
        id: 'new-section',
        label: 'New Section',
        order: 1,
        icon: 'fa-solid fa-star',
        title: [{ text: 'New Section', highlight: false }],
        description: 'Description for new section',
        buttons: [],
        visuals: []
      };
      for (let i = sectionsLength; i < innerLength; i++) {
        const newSec = { ...defaultSection };
        newSec.id = innerBlocks[i].attributes.title || `section-${i}`;
        newSec.label = innerBlocks[i].attributes.title || `Section ${i + 1}`;
        newSec.order = i + 1;
        newSec.icon = innerBlocks[i].attributes.icon?.class || 'fa-solid fa-star';
        updatedSections.push(newSec);
      }
      hasChanges = true;
    } else if (innerLength < sectionsLength) {
      // Remove extra sections
      updatedSections = updatedSections.slice(0, innerLength);
      hasChanges = true;
    }

    // Update existing
    innerBlocks.forEach((block, index) => {
      if (updatedSections[index]) {
        const newId = block.attributes.title || updatedSections[index].id;
        const newLabel = block.attributes.title || updatedSections[index].label;
        const newIcon = block.attributes.icon?.class || updatedSections[index].icon;
        if (newId !== updatedSections[index].id || newLabel !== updatedSections[index].label || newIcon !== updatedSections[index].icon) {
          updatedSections[index].id = newId;
          updatedSections[index].label = newLabel;
          updatedSections[index].icon = newIcon;
          hasChanges = true;
        }
      }
    });

    if (hasChanges) {
      setAttributes({ sections: updatedSections });
    }
  }, [innerBlocks, attributes.sections]);

  // Template for InnerBlocks based on sections
  const template = sections ? sections.map(section => ['psb/section', { title: section.label, icon: { class: section.icon } }]) : [];


  const [currentSection, setCurrentSection] = useState(0);
  const scrollRef = useRef(null);

  // Sync currentSection with activeSectionIndex
  useEffect(() => {
    setCurrentSection(attributes.activeSectionIndex || 0);
  }, [attributes.activeSectionIndex]);

  const scrollToSection = (index) => {
    if (scrollRef.current) {
      const sectionWidth = scrollRef.current.offsetWidth;

      scrollRef.current.scrollTo({
        left: index * sectionWidth,
        behavior: 'smooth'
      });
      if (setAttributes) {
        setAttributes({ activeSectionIndex: index });
        setCurrentSection(index);
      }
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const sectionWidth = scrollRef.current.offsetWidth;
      const newCurrentSection = Math.round(scrollLeft / sectionWidth);
      setCurrentSection(newCurrentSection);
      if (setAttributes) {
        setAttributes({ activeSectionIndex: newCurrentSection });
      }
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
