import {
  InnerBlocks,
  InspectorControls,
  useBlockProps,
} from "@wordpress/block-editor";
import { TextControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { id, label, title, badge, description } = attributes;
  //   console.log(attributes);

  return (
    <>
      <InspectorControls>
        <TextControl
          label="title"
          value={title}
          onChange={(value) => setAttributes({ title: value })}
        />
        <TextControl
          label="label"
          value={label}
          onChange={(value) => setAttributes({ label: value })}
        />
        <TextControl
          label="badge"
          value={badge}
          onChange={(value) => setAttributes({ badge: value })}
        />
        <TextControl
          label="description"
          value={description}
          onChange={(value) => setAttributes({ description: value })}
        />
      </InspectorControls>
      <section {...useBlockProps({ draggable: false })}>
        <div className="psb-section-overlay"></div>
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
