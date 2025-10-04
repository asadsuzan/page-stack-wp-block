import { __ } from "@wordpress/i18n";
import { PanelBody, TextControl } from "@wordpress/components";

import { generateId, updateData } from "../../../../utils/functions";
import { ItemsPanel } from "../../../../../../bpl-tools/Components";
import SectionItemsPanel from "../../itemsPanel/sectionsItemPanel";

const General = ({ attributes, setAttributes }) => {
  const { sections, activeSectionIndex } = attributes || {};

  return (
    <>
      {/* pages  */}
      {/* <PanelBody
        className="bPlPanelBody"
        title={__("Page", "b-blocks")}
        initialOpen={true}
      >
        <ItemsPanel
          {...{ attributes, setAttributes }}
          arrKey="sections"
          activeIndex={activeSectionIndex}
          newItem={{
            id: `New Page ${generateId(sections)}`,
            label: `untitled`,
            bg: {
              color: "linear-gradient(to bottom right, #312e81, #581c87, #9d174d)",
              mask: "linear-gradient(to right, rgba(37, 99, 235, 0.2), rgba(147, 51, 234, 0.2))"
            },
            order: generateId(sections),
            title: [
              {
                text: "",
                highlight: false,
              },
              {
                text: "",
                highlight: true,
              },
            ],
            description: "",
            buttons: [
              {
                text: "",
                url: "#",
                isShow: true,
                icon: "",
              },
            ],
            visuals: [],
          }}
          ItemSettings={SectionItemsPanel}
          design="sortable"
          title="label"
          itemLabel="page"

        />
      </PanelBody> */}
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
              onChange={(value) =>
                setAttributes({
                  sections: updateData(sections, value, i, "label"),
                })
              }
            />
          </div>
        ))}
      </PanelBody>
    </>
  );
};

export default General;
