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


// function ruleButtonPlugin() {
//     console.log(`RuleButtonPlugin initializing`)

//     for (let group of manualRulePluginContext.user_groups) {
//         console.log(group)
//     }

//      const button = document.getElementById('post-btn');
//      button.addEventListener('click', async _ => {
//          try {
//              const response = await fetch('http://10.12.128.19/rulesengine3/start_process/?selected_objects=VX-6&', {
//                  method: 'POST',
//                  headers: {'Accept': 'application/json, text/javascript, */*; q=0.01'},
//                  body: new URLSearchParams({
//                      'csrfmiddlewaretoken': $("[name=csrfmiddlewaretoken]")[0].value,
//                      'process_id': 'process_f50625b5-0c30-4364-b26e-4ec0f01db436',
//                  })
//              });
//              console.log('Completed!', response);
//          } catch(err) {
//              console.error(`Error: ${err}`);
//          }
//      });
//  }


function addManualRuleButton2() {
    for (var i = 0; i < FilterdUserGroups.length; i++) {
        for (var x = 0; x < FilterdUserGroups[i].buttons.length; x++) {
            let buttonConfig = FilterdUserGroups[i].buttons[x];
            let ManualRuleBtn = document.createElement("button");
            ManualRuleBtn.innerHTML = buttonConfig.label;
            ManualRuleBtn.type = "button";
            ManualRuleBtn.setAttribute("class", buttonConfig.buttonColour);
            document.getElementById("div_maual_rule_button").appendChild(ManualRuleBtn); 
            
            ManualRuleBtn.addEventListener('click', async _ => {
                const response = await fetch('http://10.12.128.19/rulesengine3/start_process/?selected_objects=' + manualRulePluginContext.item_id, {
                    method: 'POST',
                    headers: {'Accept': 'application/json, text/javascript, */*; q=0.01'},
                    body: new URLSearchParams({
                        'csrfmiddlewaretoken': $("[name=csrfmiddlewaretoken]")[0].value,
                        'process_id': buttonConfig.processId,
                    })
                });
                if (!response.ok) {
                    console.error('Didnt succeed!', response);
                    // show failure popup with details
                }
                else {
                    console.log('Completed!', response);
                    // show success popup with details
                }
            });
        } 
    }
}

console.log(config.ruleButtonPlugin.userGroups[0].buttons[0].buttonColour)

//filters out the user groups from the config file

let FilterdUserGroups = config.ruleButtonPlugin.userGroups.filter(filterUserGroups);

function filterUserGroups(userGroup) {
    for (var i = 0;  i < manualRulePluginContext.user_groups.length; i++) {
        if (userGroup.name == manualRulePluginContext.user_groups[i] ) {
            return true
        }
    } 
}

console.log(FilterdUserGroups);





// setTimeout(ruleButtonPlugin, 3000)
setTimeout(addManualRuleButton2, 3000)
