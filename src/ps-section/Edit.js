import {
  InnerBlocks,
  InspectorControls,
  useBlockProps,
} from "@wordpress/block-editor";

import {
  Background,

} from "../../../bpl-tools/Components";
import { PanelBody } from '@wordpress/components';
import { updateData } from '../utils/functions';
import { getBackgroundCSS } from '../../../bpl-tools/utils/getCSS';
import Style from './style';

export default function Edit({ attributes, setAttributes, clientId }) {
  const { label, title, description, bg } = attributes;

  console.log("bg: ", bg);
  return (
    <>
      <InspectorControls>

        <PanelBody
          initialOpen=
          {true}
          label="section"
        >

          <Background
            label="Title Highlight Background"
            value={bg}
            isImage={false}
            defaults={bg}
            onChange={(v) =>
              setAttributes({
                bg: updateData(bg, v),
              })
            }

          />



        </PanelBody>


      </InspectorControls>

      <Style attributes={attributes} id={`block-${clientId}`} />
      <section {...useBlockProps({ draggable: false })}>
        <div className="psb-section-overlay" ></div>
        <InnerBlocks
          template={[
            [
              "core/heading",
              {
                level: 3,
                content: title,
                style: {
                  typography: { fontSize: "28px" },
                },
              },
            ],
            [
              "core/heading",
              {
                level: 5,
                content: label,
                style: {
                  typography: { fontSize: "28px" },
                },
              },
            ],
            [
              "core/paragraph",
              {
                content: description,
                style: {
                  typography: { fontSize: "15px" },
                },
              },
            ],
          ]}
          templateLock={false}
        />
      </section>
    </>
  );
}
