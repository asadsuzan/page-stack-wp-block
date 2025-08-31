import { __ } from "@wordpress/i18n";
import {
  CheckboxControl,
  Flex,
  FlexItem,
  PanelBody,
  PanelRow,
  TextareaControl,
  TextControl,
  ToggleControl,
} from "@wordpress/components";
import {
  IconLibrary,
  InlineMediaUpload,
  Label,
} from "../../../../../bpl-tools-main/Components";
import { updateData } from "../../../utils/functions";
import { useEffect } from "react";

const SectionItemsPanel = ({
  attributes,
  setAttributes,
  index,
  activeIndex,
}) => {
  const { sections, activeSectionIndex } = attributes;
  const { label, title, description, buttons, id } = sections[index];

  const defaultPageIds = ['hero', 'features', 'contact', 'team', 'analytics']
  const defaultColorPalates = [
    {
      color: "linear-gradient(to bottom right, #312e81, #581c87, #9d174d)",
      mask: "linear-gradient(to right, rgba(37, 99, 235, 0.2), rgba(147, 51, 234, 0.2))"
    },
    {
      color: "#000",
      mask: "linear-gradient(to bottom right, #111, #000, #222)"
    },
    {
      color: "linear-gradient(to bottom right, #111827, #000, #1e3a8a)",
      mask: "linear-gradient(to right, rgba(37, 99, 235, 0.1), rgba(147, 51, 234, 0.1))"
    },
    {
      color: "linear-gradient(to bottom right, #5b21b6, #6b21a8, #312e81)",
      mask: "inear-gradient(to right, rgba(124, 58, 237, 0.1), rgba(79, 70, 229, 0.1))"
    },
    {
      color: "linear-gradient(to bottom right, #0f172a, #111827, #000000)",
      mask: "inear-gradient(to right, rgba(22, 163, 74, .10), rgba(37, 99, 235, .10))"
    },




  ];

  return (
    <>




      <>

        {!defaultPageIds.includes(id) && (
          <>
            <Label>Theme</Label>
            <div className='ps_color_palates'>
              {defaultColorPalates.map((gradient, idx) => {
                return (
                  <div
                    className='circle'
                    key={idx}
                    style={{
                      background: gradient?.color
                    }}
                    onClick={() =>
                      setAttributes({ sections: updateData(sections, gradient, index, "bg") })
                    }
                  ></div>
                );
              })}
            </div>
          </>
        )}
      </>

      {/* label settings  */}
      <TextControl
        className='mt20'
        label="Label"
        value={label}
        onChange={(v) =>
          setAttributes({ sections: updateData(sections, v, index, "label") })
        }
      />
      {/* title setings  */}
      {sections[index]?.title?.map((item, idx) => {
        return (
          <>
            <>
              <PanelRow>
                <Label className=" ">Title</Label>
                <ToggleControl
                  className="mt0"
                  value={item?.highlight}
                  label={item?.highlight ? "Highlighted" : "Regular"}
                  checked={item?.highlight}
                  onChange={(v) =>
                    setAttributes({
                      sections: updateData(
                        sections,
                        v,
                        index,
                        "title",
                        idx,
                        "highlight"
                      ),
                    })
                  }
                />
              </PanelRow>
              <TextControl
                className=""
                value={item?.text}
                onChange={(v) =>
                  setAttributes({
                    sections: updateData(
                      sections,
                      v,
                      index,
                      "title",
                      idx,
                      "text"
                    ),
                  })
                }
              />
            </>
          </>
        );
      })}

      {/* description setting  */}

      <TextareaControl
        className="mt20"
        label="Description"
        value={sections[index]?.description}
        onChange={(v) =>
          setAttributes({
            sections: updateData(sections, v, index, "description"),
          })
        }
      />
    </>
  );
};

export default SectionItemsPanel;
