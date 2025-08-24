import { __ } from "@wordpress/i18n";
import { PanelBody, SelectControl, ToggleControl } from "@wordpress/components";
import { purposeTypeOptions } from "../../../../utils/options";
import { updateData } from "../../../../utils/functions";

const General = ({ attributes, setAttributes }) => {
  const { purposeType } = attributes;

  return (
    <PanelBody
      className="bPlPanelBody"
      title={__("Purpose", "b-blocks")}
      initialOpen={false}
    >
      <SelectControl
        label={__("Purpose", "b-blocks")}
        labelPosition="left"
        value={purposeType}
        options={purposeTypeOptions}
        onChange={(v) =>
          setAttributes({ purposeType: updateData(purposeType, v) })
        }
      />
      <ToggleControl
        label="Open links in new tab"
        checked={attributes.openInNewTab}
        onChange={(value) => setAttributes({ openInNewTab: value })}
      />
    </PanelBody>
  );
};

export default General;
