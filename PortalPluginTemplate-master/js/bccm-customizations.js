/* 
const pluginDiv = document.getElementById('theklasdksanjdkljasnd');
var usergroup = pluginDiv.getAttribute(`data-user-group`)

var oneOfManyButtons = document.createElement(`button`);
oneOfManyButtons.classList = `some classes`

 */

//import config from '/sitemedia/js/bccm-customizations-config.js';
import config from '/bccm-customizations-config.js';

console.log(`bccm-customizations.js executing`) 
console.log('config', config);
console.log('context', manualRulePluginContext);

function ruleButtonPlugin() {
    console.log(`RuleButtonPlugin initializing`)

    for (let group of manualRulePluginContext.user_groups) {
        console.log(group)
    }

    const button = document.getElementById('post-btn');
    button.addEventListener('click', async _ => {
        try {
            const response = await fetch('http://10.12.128.19/rulesengine3/start_process/?selected_objects=VX-6&', {
                method: 'POST',
                headers: {'Accept': 'application/json, text/javascript, */*; q=0.01'},
                body: new URLSearchParams({
                    'csrfmiddlewaretoken': $("[name=csrfmiddlewaretoken]")[0].value,
                    'process_id': 'process_f50625b5-0c30-4364-b26e-4ec0f01db436',
                })
            });
            console.log('Completed!', response);
        } catch(err) {
            console.error(`Error: ${err}`);
        }
    });
}

function addManualRuleButton() {
    const newManualRuleButton = document.createElement("button");
    const newManualRuleButtonName = document.createTextNode("Lorem Ipsum");
    newManualRuleButtonName.appendChild(newManualRuleButton)
}



setTimeout(ruleButtonPlugin, 2000)