import colour from '/sitemedia/js/bccm-colours.js';
import group from '/sitemedia/js/bccm-groups.js';
import metadata from '/sitemedia/js/bccm-metadata.js';

export default {
    ruleButtonPlugin: {
        userGroups: [
            {
                name: group.admin,
                buttons: [
                    {
                        label: `Send to BMM`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: colour.green,
                        metadata: ""
                    },
                    {
                        label: `test1`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: colour.yellow,
                        metadata: metadata.melga
                    }
                ]
            },
            {
                name: `other-group`,
                buttons: [
                    {
                        label: `Send to BrunstadTV`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: colour.blue,
                        metadata: metadata.milga
                    }
                ]
            },
            {
                name: group.special_all,
                buttons: [
                    {
                        label: `Send to BrunstadTV`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: colour.orange,
                        metadata: metadata.molga
                    },
                    {
                        label: `molestie leo`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: colour.red,
                        metadata: metadata.test
                    },
                    {
                        label: `imperdiet eget`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: colour.turquoise,
                        metadata: metadata.film
                    },
                    {
                        label: `neque laoreet`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: colour.pink,
                        metadata: metadata.melga
                    },
                    {
                        label: `Vivamus`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: colour.blue,
                        metadata: metadata.milga
                    },
                    {
                        label: `maximus eu`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: colour.lila,
                        metadata: metadata.molga
                    },
                    {
                        label: `tellus sed`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: colour.cyan,
                        metadata: metadata.test
                    },
                    {
                        label: `porta tellus`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: colour.flamingo,
                        metadata: metadata.film
                    }
                ]
            }
        ]
    }
}