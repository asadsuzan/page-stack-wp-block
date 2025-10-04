import { useEffect, useRef, useState, useCallback } from "react";
import { useSelect, useDispatch } from "@wordpress/data";
import Navigation from "./pages/Navigation";
import Indicators from "./pages/Indicators";
import { IconButton, PanelBody, TextControl } from "@wordpress/components";

import {
  InnerBlocks,
  Inserter,
  InspectorControls,
} from "@wordpress/block-editor";
import { createBlock } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { updateData } from "../../utils/functions";

const Stack = ({ attributes, setAttributes, children, clientId, content }) => {
  const { sections, activeSectionIndex } = attributes;
  const [currentSection, setCurrentSection] = useState(activeSectionIndex || 0);
  // const [initialBlocksCreated, setInitialBlocksCreated] = useState(false);
  const [prevInnerBlocksClientIds, setPrevInnerBlocksClientIds] = useState([]);
  const scrollRef = useRef(null);
  const { replaceInnerBlocks } = useDispatch("core/block-editor");
  const { updateBlockAttributes } = useDispatch("core/block-editor");

  // Get inner blocks
  const innerBlocks = useSelect(
    (select) => {
      if (clientId) {
        return select("core/block-editor").getBlocks(clientId);
      }
      return [];
    },
    [clientId]
  );

  // Track changes in inner blocks (add, remove, reorder)
  useEffect(() => {
    if (!setAttributes) return;

    // Get current block client IDs
    const currentClientIds = innerBlocks.map((block) => block.clientId);
    const clientIdsChanged =
      JSON.stringify(currentClientIds) !==
      JSON.stringify(prevInnerBlocksClientIds);

    // Only update if blocks have changed
    if (!clientIdsChanged) return;

    // Update tracked client IDs
    setPrevInnerBlocksClientIds(currentClientIds);

    // If all blocks were deleted, clear sections
    if (innerBlocks.length === 0) {
      setAttributes({
        sections: [],
        activeSectionIndex: 0,
      });
      setCurrentSection(0);
      return;
    }

    // Create new sections array from current blocks
    const newSections = innerBlocks.map((block, index) => {
      return {
        id: index + 1,
        label: block.attributes.label || `section-${index + 1}`,
        title: block.attributes.title || `Section ${index + 1}`,
        badge: block.attributes.badge || index + 1,
        description: block.attributes.description || "",
      };
    });

    // Update sections attribute
    setAttributes({
      sections: newSections,
      activeSectionIndex: Math.min(currentSection, newSections.length - 1),
    });

    // Adjust current section if needed
    if (currentSection >= newSections.length) {
      setCurrentSection(Math.max(0, newSections.length - 1));
    }
  }, [innerBlocks, setAttributes, currentSection]);

  // Sync currentSection with activeSectionIndex
  useEffect(() => {
    setCurrentSection(activeSectionIndex || 0);
  }, [activeSectionIndex]);

  const scrollToSection = useCallback(
    (index) => {
      if (scrollRef.current) {
        const sectionWidth = scrollRef.current.offsetWidth;
        scrollRef.current.scrollTo({
          left: index * sectionWidth,
          behavior: "smooth",
        });
        if (setAttributes) {
          setAttributes({ activeSectionIndex: index });
        }
      }
    },
    [setAttributes]
  );

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

  const handleWheel = useCallback(
    (e) => {
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
    },
    [currentSection, sections, scrollToSection]
  );

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  // Create template based on sections
  const template = (sections || []).map((section, i) => [
    "psb/section",
    {
      title: section.title || `Section ${i + 1}`,
      label: section.label || `section-${i + 1}`,
      badge: section.badge || i + 1,
      description: section.description || "",
    },
  ]);

  return (
    <>
      {setAttributes && (
        <InspectorControls>
          <PanelBody
            className="bPlPanelBody"
            title={__("General", "b-blocks")}
            initialOpen={true}
          >
            {attributes.sections.map((section, i) => (
              <div key={section.id}>
                <TextControl
                  label={section.label}
                  value={section.label}
                  onChange={(value) => {
                    // update parent attribute
                    setAttributes({
                      sections: updateData(sections, value, i, "label"),
                    });

                    // update child block attribute so it persists
                    if (innerBlocks[i]) {
                      updateBlockAttributes(innerBlocks[i].clientId, {
                        label: value,
                      });
                    }
                  }}
                />
              </div>
            ))}
          </PanelBody>
        </InspectorControls>
      )}

      <div className="bBlocksPageStack">
        <Navigation
          sections={sections || []}
          currentSection={currentSection}
          onScrollToSection={scrollToSection}
          logoText={attributes.logoText || "STACK"}
        />

        <Indicators
          sections={sections || []}
          currentSection={currentSection}
          handleClick={scrollToSection}
        />

        <div
          className="scroll-container"
          ref={scrollRef}
          onWheel={handleWheel}
          {...(content ? { dangerouslySetInnerHTML: { __html: content } } : {})}
        >
          {!content &&
            (setAttributes ? (
              <InnerBlocks
                allowedBlocks={["psb/section"]}
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
    </>
  );
};

export default Stack;
