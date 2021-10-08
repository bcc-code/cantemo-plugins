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
                        button_color: color.green,
                        metadata: metadata.film
                    },
                    {
                        label: `test1`,
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_color: color.yellow,
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
                        button_color: color.blue,
                        metadata: metadata.milga
                    }
                ]
            },
            {
                name: group.special_all,
                buttons: [
                    {
                        label: `Send to BrunstadTV`,
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_color: color.orange,
                        metadata: metadata.molga
                    },
                    {
                        label: `molestie leo`,
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_color: color.red,
                        metadata: metadata.test
                    },
                    {
                        label: `imperdiet eget`,
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_color: color.turquoise,
                        metadata: metadata.film
                    },
                    {
                        label: `neque laoreet`,
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_color: color.pink,
                        metadata: metadata.melga
                    },
                    {
                        label: `Vivamus`,
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_color: color.blue,
                        metadata: metadata.milga
                    },
                    {
                        label: `maximus eu`,
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_color: color.lila,
                        metadata: metadata.molga
                    },
                    {
                        label: `tellus sed`,
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_color: color.cyan,
                        metadata: metadata.test
                    },
                    {
                        label: `porta tellus`,
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_color: color.flamingo,
                        metadata: metadata.film
                    }
                ]
            }
        ]
    }
}