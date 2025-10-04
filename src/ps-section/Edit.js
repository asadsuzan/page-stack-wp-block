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
      <section
        {...useBlockProps({
          style: {
            height: "100vh",
            minWidth: "100vw",
            scrollSnapAlign: "start",
            overflow: "hidden",
          },
          draggable: false,
        })}
      >
        {/* <InnerBlocks
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
                content: `Welcome to the amazing world of our WordPress plugin, ${title}! This plugin is designed to enhance your website's functionality and provide a seamless user experience. With its intuitive interface and powerful features, you can easily manage your content and customize your site to your liking. 
${title} offers a variety of tools to help you optimize your site for search engines, improve your site's performance, and engage your audience. Whether you're a beginner or an experienced developer, you'll find ${title} easy to use and highly effective.
Experience the difference with ${title} and take your website to the next level. Try it out today and see the results for yourself!`,
                style: {
                  typography: { fontSize: "15px" },
                },
              },
            ],
          ]}
          templateLock={false}
        /> */}

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
