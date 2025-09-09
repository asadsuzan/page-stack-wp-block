import { useEffect, useRef, useState, useCallback } from 'react';
import { useSelect, useDispatch } from '@wordpress/data';
import Navigation from './pages/Navigation';
import Indicators from './pages/Indicators';
import { IconButton } from "@wordpress/components";
import { InnerBlocks, Inserter } from "@wordpress/block-editor";

const Stack = ({ attributes, setAttributes, children, clientId, content }) => {
  const { sections, activeSectionIndex } = attributes;
  const [currentSection, setCurrentSection] = useState(activeSectionIndex || 0);
  const scrollRef = useRef(null);
  const hasInsertedBlocks = useRef(false);
  const { insertBlocks } = useDispatch('core/block-editor');

  // Get inner blocks
  const innerBlocks = useSelect((select) => {
    if (clientId) {
      return select('core/block-editor').getBlocks(clientId);
    }
    return [];
  }, [clientId]);

  // Insert default inner blocks after mount
  useEffect(() => {
    if (!clientId || hasInsertedBlocks.current || !sections || sections.length === 0) return;

    // Use setTimeout to ensure this runs after the initial render
    setTimeout(() => {
      const blocks = wp.data.select('core/block-editor').getBlocks(clientId);

      if (blocks.length === 0 && sections.length > 0) {
        const blocksToInsert = sections.map((section, i) => {
          const titleText = section.title
            ? section.title.map(t => t.text).join(' ')
            : `Section ${i + 1}`;

          return wp.blocks.createBlock('psb/section', {
            title: titleText,
            order: i + 1,
          });
        });

        insertBlocks(blocksToInsert, 0, clientId);
        hasInsertedBlocks.current = true;
      }
    }, 100);
  }, [clientId, insertBlocks, sections]);

  // Sync sections attribute with inner blocks
  useEffect(() => {
    if (!setAttributes || !innerBlocks || innerBlocks.length === 0) return;

    const updatedSections = innerBlocks.map((block, i) => {
      const prevSection = sections && sections[i] ? { ...sections[i] } : {};
      const label = block.attributes.title || prevSection.label || `Section ${i + 1}`;

      return {
        id: prevSection.id || `section-${i}`,
        order: i + 1,
        label: label,
        title: [{ text: label, highlight: false }],
        description: prevSection.description || '',
        buttons: prevSection.buttons || [],
        visuals: prevSection.visuals || [],
        icon: prevSection.icon || 'fa-solid fa-star',
        // Preserve other properties from the original section if they exist
        ...(prevSection.features ? { features: prevSection.features } : {}),
        ...(prevSection.members ? { members: prevSection.members } : {}),
        ...(prevSection.stats ? { stats: prevSection.stats } : {}),
        ...(prevSection.chart ? { chart: prevSection.chart } : {}),
        ...(prevSection.highlights ? { highlights: prevSection.highlights } : {}),
      };
    });
    console.log(sections);
    // Only update if sections have actually changed
    const currentSectionsJson = JSON.stringify(sections || []);
    const updatedSectionsJson = JSON.stringify(updatedSections);

    if (currentSectionsJson !== updatedSectionsJson) {
      setAttributes({
        sections: updatedSections,
        activeSectionIndex: Math.min(currentSection, updatedSections.length - 1)
      });
    }
  }, [innerBlocks, setAttributes, currentSection, sections]);

  // Sync currentSection with activeSectionIndex
  useEffect(() => {
    setCurrentSection(activeSectionIndex || 0);
  }, [activeSectionIndex]);

  const scrollToSection = useCallback((index) => {
    if (scrollRef.current) {
      const sectionWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * sectionWidth,
        behavior: 'smooth'
      });
      if (setAttributes) {
        setAttributes({ activeSectionIndex: index });
      }
      setCurrentSection(index);
    }
  }, [setAttributes]);

  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const sectionWidth = scrollRef.current.offsetWidth;
      const newCurrentSection = Math.round(scrollLeft / sectionWidth);

      if (newCurrentSection !== currentSection) {
        setCurrentSection(newCurrentSection);
        if (setAttributes) {
          setAttributes({ activeSectionIndex: newCurrentSection });
        }
      }
    }
  }, [currentSection, setAttributes]);

  const handleWheel = useCallback((e) => {
    if (scrollRef.current) {
      const delta = e.deltaY;
      const threshold = 50;

      if (Math.abs(delta) > threshold) {
        if (delta > 0 && currentSection < (sections?.length || 1) - 1) {
          scrollToSection(currentSection + 1);
        } else if (delta < 0 && currentSection > 0) {
          scrollToSection(currentSection - 1);
        }
      }
    }
  }, [currentSection, sections, scrollToSection]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  // Create template based on sections
  const template = (sections || []).map((section, i) => [
    'psb/section',
    {
      title: section.title?.map(t => t.text).join(' ') || `Section ${i + 1}`,
      order: i + 1,
    }
  ]);

  return (
    <div className='bBlocksPageStack'>
      <Navigation
        sections={sections || []}
        currentSection={currentSection}
        onScrollToSection={scrollToSection}
        logoText={attributes.logoText || 'STACK'}
      />

      <Indicators
        sections={sections || []}
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
            allowedBlocks={['psb/section']}
            template={template}
            templateLock={false}
            renderAppender={() => (
              <Inserter
                rootClientId={clientId}
                isAppender
                renderToggle={({ onToggle, disabled }) => (
                  <IconButton
                    className="bTempAddTab"
                    onClick={onToggle}
                    disabled={disabled}
                    label={"Add New Section"}
                    icon="plus-alt"
                  >
                    Add New Section
                  </IconButton>
                )}
              />
            )}
          />
        ) : (
          children
        ))}
      </div>
    </div>
  );
};

export default Stack;