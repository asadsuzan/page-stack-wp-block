import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

export default function Edit({ attributs }) {
    return (
        <>

            <InspectorControls>
                <TextControl label="title" value={attributs?.titile} />

            </InspectorControls>
            <section
                {...useBlockProps({
                    style: {
                        height: "100vh",
                        minWidth: "100vw",
                        scrollSnapAlign: "start",
                        overflow: "hidden"
                    },
                    draggable: false
                })}
            >
                <InnerBlocks

                    templateLock={false}
                />
            </section>

        </>
    );
}
