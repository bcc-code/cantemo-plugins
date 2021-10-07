import config from '/sitemedia/js/bccm-config.js';

console.log(`bccm-customizations.js executing`) 

var FilterdUserGroup = config.ruleButtonPlugin.userGroups.filter(filterUserGroups);

var metadata_obj;

fetch('/API/v2/items/' + manualRulePluginContext.item_id + '/metadata/').then(res => res.json()).then(data => metadata_obj = data);

//generates Button and adds EventListener

function addManualRuleButton() {
    for (var i = 0; i < FilterdUserGroup.length; i++) {
        for (var x = 0; x < FilterdUserGroup[i].buttons.length; x++) {

            if(FilterdUserGroup[i].buttons[x].metadata == metadata_obj.group_name || FilterdUserGroup[i].buttons[x].metadata == ""){

                let buttonConfig = FilterdUserGroup[i].buttons[x];
                let ManualRuleButton = document.createElement("button");
                ManualRuleButton.innerHTML = buttonConfig.label;
                ManualRuleButton.type = "button";
                ManualRuleButton.setAttribute("class", buttonConfig.button_colour);
                document.getElementById("ManualRuleButtonDIV").appendChild(ManualRuleButton); 

                ManualRuleButton.onclick = function() {
                    this.innerHTML = "working..."
                    this.disabled = true;
                    let THIS = this;
                    setTimeout(function(){THIS.disabled = false;THIS.innerHTML = buttonConfig.label;}, 5000);
                }
                ManualRuleButton.addEventListener('click', async _ => {
                    const response = await fetch('/rulesengine3/start_process/?selected_objects=' + manualRulePluginContext.item_id, {
                        method: 'POST',
                        headers: {'Accept': 'application/json, text/javascript, */*; q=0.01'},
                        body: new URLSearchParams({
                            'csrfmiddlewaretoken': $("[name=csrfmiddlewaretoken]")[0].value,
                            'process_id': buttonConfig.process_id,
                        })
                    });
                    if (!response.ok) {
                        console.error('Didnt succeed!', response);
                        PopupAnimateIN("1 item already being processed", true)
                    } else {
                        console.log('Completed!', response);
                        PopupAnimateIN("1 item queued for processing!", false)
                    }
                });
            }
        } 
    }
}

//filters out the user groups from the config file

function filterUserGroups(userGroup) {
    for (var i = 0;  i < manualRulePluginContext.user_groups.length; i++) {
        if (userGroup.name == manualRulePluginContext.user_groups[i] ) {
            return true
        }
    } 
}



//popup function

function PopupAnimateIN(msg, isError) {
    if (isError) {
        var popup = document.getElementById("popup-id");
        popup.classList.add("show");
        popup.classList.remove("remove");
        setTimeout(PopupAnimateOUT, 1500);
        popup.innerHTML = msg;
        popup.style.color = "#e64040"
    } else {
        var popup = document.getElementById("popup-id");
        popup.classList.add("show");
        popup.classList.remove("remove");
        setTimeout(PopupAnimateOUT, 1500);
        popup.innerHTML = msg;
        popup.style.color = "#38cf45"
    }
}

function PopupAnimateOUT() {
    var popup = document.getElementById("popup-id");
    popup.classList.remove("show");
    popup.classList.add("remove");
}

// // Select the node that will be observed for mutations
// const targetNode = document.getElementById('dropzone-wrapper');

// // Options for the observer (which mutations to observe)
// const config2 = { attributes: true, childList: true, subtree: true };

// // Callback function to execute when mutations are observed
// const callback = function(mutationsList, observer) {
//     // Use traditional 'for loops' for IE 11
//     for(const mutation of mutationsList) {
//         if (mutation.type === 'childList') {
//             console.log('A child node has been added or removed.');
//         }
//         else if (mutation.type === 'attributes') {
//             console.log('The ' + mutation.attributeName + ' attribute was modified.');
//         }
//     }
// };

// // Create an observer instance linked to the callback function
// const observer = new MutationObserver(callback);

// // Start observing the target node for configured mutations
// observer.observe(targetNode, config2);

// // Later, you can stop observing
// observer.disconnect();


setTimeout(addManualRuleButton, 3000);