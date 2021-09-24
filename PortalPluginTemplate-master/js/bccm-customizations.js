/* 
const pluginDiv = document.getElementById('theklasdksanjdkljasnd');
var usergroup = pluginDiv.getAttribute(`data-user-group`)

var oneOfManyButtons = document.createElement(`button`);
oneOfManyButtons.classList = `some classes`

 */

import config from '/sitemedia/js/bccm-customizations-config.js';
//import config from '/bccm-customizations-config.js';

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

function addManualRuleButton2() {
    let ManualRuleBtn = document.createElement("button");
    ManualRuleBtn.innerHTML = "ButtonName";
    ManualRuleBtn.type = "button";
    ManualRuleBtn.setAttribute("class", ButtonColour[generateRandomNumber(0, 4)]);
    document.getElementById("div_maual_rule_button").appendChild(ManualRuleBtn);  
}

let ButtonColour = ["button-pink", "button-yellow", "button-blue", "button-lila", "button-turquoise"]

const generateRandomNumber = (min, max) =>  {
    return Math.floor(Math.random() * (max - min) + min);
};

console.log(config.ruleButtonPlugin.userGroups[0].buttons[0].buttonColour)


let FilterdUserGroups = config.ruleButtonPlugin.userGroups.filter(filterUserGroups);

function filterUserGroups(userGroup) {
    console.log("userGroup is ", userGroup)
    console.log("manualRulePluginContext.user_groups is ", manualRulePluginContext.user_groups)
    // return true if we want to keep this userGroup, which comes from the config.
    // return false if we dont want to keep this userGroup
    for (i = 0;  i < manualRulePluginContext.user_groups.length; i++) {
        return userGroup == manualRulePluginContext.user_groups[i]
    }
}

console.log(FilterdUserGroups);
console.log('userGroup', userGroup);
console.log('user_groups', manualRulePluginContext.user_groups);

setTimeout(ruleButtonPlugin, 3000)
setTimeout(addManualRuleButton2, 3000)
