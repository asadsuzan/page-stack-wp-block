import { __ } from "@wordpress/i18n";
import { CheckboxControl, Flex, FlexItem, PanelRow, TextareaControl, TextControl, ToggleControl } from "@wordpress/components";
import { IconLibrary, InlineMediaUpload, Label } from '../../../../../bpl-tools-main/Components';
import { updateData } from '../../../utils/functions';
import { useEffect } from 'react';

const SectionItemsPanel = ({ attributes, setAttributes, index, activeIndex }) => {


    const { sections, activeSectionIndex } = attributes;
    const { label, title, description, buttons } = sections[index];




    return (
        <>


            hello world form wp content







        </>
    );
};

export default SectionItemsPanel;

