import color from '/sitemedia/js/bccm-colors.js';
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
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: colour.green,
                        metadata: ""
                    },
                    {
                        label: `test1`,
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        buttonColor: color.yellow,
                        metadata: metadata.melga
                    }
                ]
            },
            {
                name: group.admin,
                buttons: [
                    {
                        label: `Send to BrunstadTV`,
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        buttonColor: color.blue,
                        metadata: metadata.milga
                    }
                ]
            },
            {
                name: group.specialAll,
                buttons: [
                    {
                        label: `Send to BrunstadTV`,
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        buttonColor: color.orange,
                        metadata: metadata.molga
                    },
                    {
                        label: `molestie leo`,
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        buttonColor: color.red,
                        metadata: metadata.test
                    },
                    {
                        label: `imperdiet eget`,
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        buttonColor: color.turquoise,
                        metadata: metadata.film
                    },
                    {
                        label: `neque laoreet`,
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        buttonColor: color.pink,
                        metadata: metadata.melga
                    },
                    {
                        label: `Vivamus`,
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        buttonColor: color.blue,
                        metadata: metadata.milga
                    },
                    {
                        label: `maximus eu`,
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        buttonColor: color.lila,
                        metadata: metadata.molga
                    },
                    {
                        label: `tellus sed`,
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        buttonColor: color.cyan,
                        metadata: metadata.test
                    },
                    {
                        label: `porta tellus`,
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        buttonColor: color.flamingo,
                        metadata: metadata.film
                    }
                ]
            }
        ]
    }
}