import { __ } from "@wordpress/i18n";
import { CheckboxControl, Flex, FlexItem, PanelBody, PanelRow, TextareaControl, TextControl, ToggleControl } from "@wordpress/components";
import { IconLibrary, InlineMediaUpload, Label } from '../../../../../bpl-tools-main/Components';
import { updateData } from '../../../utils/functions';
import { useEffect } from 'react';

const SectionItemsPanel = ({ attributes, setAttributes, index, activeIndex }) => {


    const { sections, activeSectionIndex } = attributes;
    const { label, title, description, buttons } = sections[index];




    return (
        <>




            {/* title setings  */}
            {
                sections[index]?.title?.map((item, idx) => {
                    return <>
                        <>
                            <PanelRow>
                                <Label className=" ">Title</Label>
                                <ToggleControl
                                    className='mt0'
                                    value={item?.highlight}
                                    label={item?.highlight ? "Highlighted" : "Regular"}
                                    checked={item?.highlight}
                                    onChange={(v) => setAttributes({
                                        sections: updateData(sections, v, index, 'title', idx, 'highlight')
                                    })}
                                />
                            </PanelRow>
                            <TextControl className='' value={item?.text} />
                        </>

                    </>
                })
            }



            {/* description setting  */}

            <TextareaControl
                className='mt20'
                label="Description"
                value={sections[index]?.description}
                onChange={(v) => setAttributes({
                    sections: updateData(sections, v, index, 'description')
                })}


            />

        </>
    );
};

export default SectionItemsPanel;

