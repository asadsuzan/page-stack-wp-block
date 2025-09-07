import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import metadata from './block.json';
import Edit from './Edit';



registerBlockType(metadata, {
    icon: "admin-page",
    edit: Edit,
    save: () => <section {...useBlockProps.save()}>
        <InnerBlocks.Content />
    </section>
});