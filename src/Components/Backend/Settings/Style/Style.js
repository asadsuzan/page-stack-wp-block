import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import {
  Background,
  ColorControl,
  Typography,
} from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../bpl-tools/utils/functions";

const Style = ({ attributes, setAttributes }) => {
  const { styles } = attributes || {};
  const { pgTitle, pgDescription } = styles;

  return (
    <>
      {/* title  */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Title", "b-blocks")}
        initialOpen={false}
      >
        <Typography
          label="Title Typo"
          value={pgTitle?.typo}
          onChange={(v) =>
            setAttributes({ styles: updateData(styles, v, "pgTitle", "typo") })
          }
        />
        <ColorControl
          label="Title Color"
          value={pgTitle?.color}
          defaultColor={pgTitle?.color}
          onChange={(v) =>
            setAttributes({ styles: updateData(styles, v, "pgTitle", "color") })
          }
        />
        <Background
          label="Title Highlight Background"
          value={pgTitle?.highlight?.bg}
          isImage={false}
          defaults={pgTitle?.highlight?.bg}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "pgTitle", "highlight", "bg"),
            })
          }
        />
      </PanelBody>

      {/* description */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Description", "b-blocks")}
        initialOpen={false}
      >
        <Typography
          label="Description Typo"
          value={pgDescription?.typo}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "pgDescription", "typo"),
            })
          }
        />
        <ColorControl
          label="Description Color"
          value={pgDescription?.color}
          defaultColor={pgDescription?.color}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "pgDescription", "color"),
            })
          }
        />
      </PanelBody>
    </>
  );
};

export default Style;
