 
import { green, yellow, blue, orange, red, pink, cyan, flamingo } from '/sitemedia/js/bccm-customizations.js'

export default {
    ruleButtonPlugin: {
        userGroups: [
            {
                name: `Admin`,
                buttons: [
                    {
                        label: `Send to BMM`,
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: green
                    },
                    {
                        label: `test1`,
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: yellow
                    }
                ]
            },
            {
                name: `other-group`,
                buttons: [
                    {
                        label: `Send to BrunstadTV`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: blue                   
                    }
                ]
            },
            {
                name: `_special_all`,
                buttons: [
                    {
                        label: `Send to BrunstadTV`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: orange
                    },
                    {
                        label: `molestie leo`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: red
                    },
                    {
                        label: `imperdiet eget`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: turquoise
                    },
                    {
                        label: `neque laoreet`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: pink
                    },
                    {
                        label: `Vivamus`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: blue
                    },
                    {
                        label: `maximus eu`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: lila
                    },
                    {
                        label: `tellus sed`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: cyan
                    },
                    {
                        label: `porta tellus`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        button_colour: flamingo
                    },
                    
                ]
            }
        ]
    }
}