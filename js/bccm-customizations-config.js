import * as color from '/sitemedia/js/bccm-colors.js';
import * as group from '/sitemedia/js/bccm-groups.js';


export default {
    ruleButtonPlugin: {
        userGroups: [
            {
                name: group.admin,
                buttons: [
                    {
                        label: `Send to BMM`,
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: color.green
                    },
                    {
                        label: `test1`,
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: color.yellow
                    }
                ]
            },
            {
                name: `other-group`,
                buttons: [
                    {
                        label: `Send to BrunstadTV`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: color.blue                   
                    }
                ]
            },
            {
                name: group._special_all,
                buttons: [
                    {
                        label: `Send to BrunstadTV`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: color.orange
                    },
                    {
                        label: `molestie leo`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: color.red
                    },
                    {
                        label: `imperdiet eget`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: color.turquoise
                    },
                    {
                        label: `neque laoreet`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: color.pink
                    },
                    {
                        label: `Vivamus`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: color.blue
                    },
                    {
                        label: `maximus eu`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: color.lila
                    },
                    {
                        label: `tellus sed`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: color.cyan
                    },
                    {
                        label: `porta tellus`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: color.flamingo
                    },
                    
                ]
            }
        ]
    }
}