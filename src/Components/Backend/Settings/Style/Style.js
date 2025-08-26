
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { Background, ColorControl, Typography } from "../../../../../../bpl-tools-main/Components";
import { updateData } from '../../../../../../bpl-tools-main/utils/functions';

const Style = ({ attributes, setAttributes }) => {
  const { styles } = attributes || {}
  const { pgTitle } = styles
  return (
    <>

      <PanelBody className='bPlPanelBody' title={__('Title', 'b-blocks')} initialOpen={false}>

        <Typography
          label="Title Typo"
          value={pgTitle?.typo}
          onChange={v => setAttributes({ styles: updateData(styles, v, 'pgTitle', 'typo') })}

        />
        <ColorControl
          label="Title Color"
          value={pgTitle?.color}
          defaultColor={pgTitle?.color}
          onChange={v => setAttributes({ styles: updateData(styles, v, 'pgTitle', 'color') })}


        />
        <Background

          label="Title Highlight Background"
          value={pgTitle?.highlight?.bg}
          isImage={false}
          defaults={pgTitle?.highlight?.bg}
          onChange={v => setAttributes({ styles: updateData(styles, v, 'pgTitle', 'highlight', 'bg') })}


        />


      </PanelBody>
    </>
  )
}

export default Style