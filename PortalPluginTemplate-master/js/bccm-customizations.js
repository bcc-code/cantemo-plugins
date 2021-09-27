import config from '/sitemedia/js/bccm-customizations-config.js';
//import config from '/bccm-customizations-config.js';

console.log(`bccm-customizations.js executing`) 

//creates button and add´s EventListener

function addManualRuleButton() {
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
                    popup("0 items queued for processing, 1 item(s) already being processed", true)
                    // show failure popup with details
                }
                else {
                    console.log('Completed!', response);
                    popup("1 item queued for processing!", false)
                }
            });
        } 
    }
}

//filters out the user groups from the config file

let FilterdUserGroups = config.ruleButtonPlugin.userGroups.filter(filterUserGroups);

function filterUserGroups(userGroup) {
    for (var i = 0;  i < manualRulePluginContext.user_groups.length; i++) {
        if (userGroup.name == manualRulePluginContext.user_groups[i] ) {
            return true
        }
    } 
}

//popup function

function PopupAnimateOut() {
    var popup = document.getElementById("myPopup");
    popup.classList.remove("show");
    popup.classList.add("remove");
}

function popup(msg, isError) {
    if (isError) {
        // only do this for errors
    }
    var popup = document.getElementById("myPopup");
    popup.classList.add("show");
    popup.classList.remove("remove");
    setTimeout(PopupAnimateOut, 4000);
    popup.innerHTML = msg;
}

setTimeout(addManualRuleButton, 3000)
