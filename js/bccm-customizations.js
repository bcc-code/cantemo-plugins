import config from '/sitemedia/js/bccm-config.js';

console.log(`bccm-customizations.js executing`) 

var filterdUserGroup = config.ruleButtonPlugin.userGroups.filter(filterUserGroups);

var metadataObj;

fetch('/API/v2/items/' + manualRulePluginContext.item_id + '/metadata/').then(res => res.json()).then(data => metadataObj = data);

//generates Button and adds EventListener

function addManualRuleButton() {
    for (var i = 0; i < filterdUserGroup.length; i++) {
        for (var x = 0; x < filterdUserGroup[i].buttons.length; x++) {

            if(filterdUserGroup[i].buttons[x].metadata == metadataObj.group_name || filterdUserGroup[i].buttons[x].metadata == ""){

                let buttonConfig = filterdUserGroup[i].buttons[x];
                let manualRuleButton = document.createElement("button");
                manualRuleButton.innerHTML = buttonConfig.label;
                manualRuleButton.type = "button";
                manualRuleButton.setAttribute("class", buttonConfig.button_colour);
                document.getElementById("ManualRuleButtonDIV").appendChild(manualRuleButton); 

                manualRuleButton.onclick = function() {
                    this.innerHTML = "working..."
                    this.disabled = true;
                    let THIS = this;
                    setTimeout(function(){THIS.disabled = false;THIS.innerHTML = buttonConfig.label;}, 5000);
                }
                manualRuleButton.addEventListener('click', async _ => {
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
                        popupAnimateIn("1 item already being processed", true)
                    } else {
                        console.log('Completed!', response);
                        popupAnimateIn("1 item queued for processing!", false)
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

function popupAnimateIn(msg, isError) {
    if (isError) {
        var popup = document.getElementById("popup-id");
        popup.classList.add("show");
        popup.classList.remove("hide");
        popup.innerHTML = msg;
        popup.style.color = "#e64040"
        setTimeout(popupAnimateOut, 1500);
    } else {
        var popup = document.getElementById("popup-id");
        popup.classList.add("show");
        popup.classList.remove("hide");
        popup.innerHTML = msg;
        popup.style.color = "#38cf45"
        setTimeout(popupAnimateOut, 1500);
    }
}

function popupAnimateOut() {
    var popup = document.getElementById("popup-id");
    popup.classList.remove("show");
    popup.classList.add("hide");
}

function waitForElm(selector, callback) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
                callback();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

waitForElm('#ManualRuleButtonDIV', function(){
    addManualRuleButton();
});