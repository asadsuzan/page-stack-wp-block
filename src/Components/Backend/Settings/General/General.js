import { __ } from "@wordpress/i18n";
import { PanelBody, SelectControl, ToggleControl } from "@wordpress/components";

import { generateId, updateData } from "../../../../utils/functions";
import { ItemsPanel } from "../../../../../../bpl-tools-main/Components";
import SectionItemsPanel from "../../itemsPanel/sectionsItemPanel";
import { useState } from "react";

const General = ({ attributes, setAttributes }) => {
  const { sections, activeSectionIndex } = attributes || {};

  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex, "general");

  return (
    <>
      {/* pages  */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Page", "b-blocks")}
        initialOpen={true}
      >
        <ItemsPanel
          {...{ attributes, setAttributes, activeIndex }}
          arrKey="sections"
          activeIndex={activeSectionIndex}
          newItem={{
            id: `New Page ${generateId(sections)}`,
            label: `New Page ${generateId(sections)}`,
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
          design="single"
          itemLabel={sections[activeSectionIndex]?.label}
          onChange={(v) => console.log(v, "from general")}
        />
      </PanelBody>
    </>
  );
};

export default General;
