// import defaultconfig from '/sitemedia/js/test-config.js';
import config from '/sitemedia/js/bccm-example-config.js';

console.log(`bccm-customizations.js executing`) 

// var FilterdUserGroups = defaultconfig.ruleButtonPlugin.userGroups.filter(filterUserGroups);

var FilterdUserGroups = config.ruleButtonPlugin.userGroups.filter(filterUserGroups);


// function httpGet(theUrl)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
//     xmlHttp.send( null );
//     return xmlHttp.responseText;
// }
// setTimeout(console.log("sending GET request"), 10000);
// setTimeout(httpGet('/API/v2/items/' + manualRulePluginContext.item_id + '/metadata/'), 10000);
// setTimeout(console.log(xmlHttp.responseText), 11000);



const http = new XMLHttpRequest()

http.open("GET", '/API/v2/items/' + manualRulePluginContext.item_id + '/metadata/')
http.send()

http.onload = () => var group_name = http.responseText.group_name
//console.log(http.responseText)

console.log("group name:")
console.log(group_name)



//generates Button and adds EventListener

function addManualRuleButton() {
    for (var i = 0; i < FilterdUserGroups.length; i++) {
        for (var x = 0; x < FilterdUserGroups[i].buttons.length; x++) {
            let buttonConfig = FilterdUserGroups[i].buttons[x];
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
                }
                else {
                    console.log('Completed!', response);
                    PopupAnimateIN("1 item queued for processing!", false)
                }
            });
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

setTimeout(addManualRuleButton, 3000);
