import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

import { createElement } from '@wordpress/element'
import { PanelBody, RangeControl, Button, Panel, PanelRow } from '@wordpress/components'
import { InspectorControls, BlockControls, AlignmentToolbar, RichText } from '@wordpress/block-editor'

//var el = element.createElement;







registerBlockType('prefix-blocks/testimonials', {
    title: __('Testimonials Block'),
    icon: 'format-quote',
    category: 'common',
    keywords: ['testimonials', 'Gutenberg', 'testimonials Gutenberg'],
    attributes: {
        testimonialContent: {
            type: 'array',
            default: [],
        },
    },
    edit: ({ attributes, setAttributes }) => {


        var testimonialContent = attributes.testimonialContent;

        var heart = 'format-quote';

        console.log(testimonialContent);



        function addTestimonial(newAlignment) {

            console.log(newAlignment);
            console.log(testimonialContent);

            //testimonialContent.push('Hello 2');

            setAttributes({ testimonialContent: testimonialContent.push('Hello 2') });

            console.log(testimonialContent);

            // setAttributes( { alignment: newAlignment } );
        }


        return (
            [


                <div>
                    <BlockControls >
                        <AlignmentToolbar title="Hello 1" value={heart} >

                        </AlignmentToolbar>
                    </BlockControls>


                    <InspectorControls key="content">

                        <PanelBody title="Content" icon={heart} initialOpen={false}>
                            <PanelRow>

                                <Button onClick={addTestimonial} text="Add" variant="secondary"></Button>


                            </PanelRow>



                        </PanelBody>
                    </InspectorControls>
                </div>
                ,



                <div>

                    <ul>

                        {

                            testimonialContent.map((element, i) => {

                                { console.log(element) }


                                <li>{element}</li>

                            })

                        }

                        <li>Hello Dummy</li>

                    </ul>


                    <h1>Hello testimonials Block 2</h1>
                </div>
            ]





        )
    },
    save: ({ attributes }) => {

        var testimonialContent = attributes.testimonialContent;



        return (
            <div>

                <ul>

                    {

                        testimonialContent.map((element, i) => {

                            { console.log(element) }


                            <li>{element}</li>

                        })

                    }
                    <li>Hello Dummy</li>
                </ul>


                <h1>Hello testimonials Block 2</h1>
            </div>
        )
    }
})