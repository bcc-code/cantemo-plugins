
# TODO:
- ✅ Create buttons with javascript 
- ✅ Get user role from cantemo
- ✅ Get item id from cantemo
- ✅ Create a startManualRule function which takes a process_id 
- ✅ Create buttons based on config file.

- Feedback: Show that the process has started somehow
  - Show progress (api call to get status? call it every few seconds?)

- ✅ Clean up names (no myplugin)


- ## CONFIGFILES
    - ✅ add example config file

    - ### Make it so the config file only gets instaled when tere is no other config file present
        - ✅ make a vaiable that defines the path to the config file that you want to use
            - CONFIG_FILE="/opt/cantemo/portal/portal_media/js/bccm-customizations-config.js"
        - ✅ check if the config file that is defined in the variable exists
        - if there is instal it
        - if not then instal the example file
        - make it so that the bccm-customizations.js file imports the right config (if ther is one specified then use it if not use the default)




- CHALANGE
    - generate different buttons depending on item type (maby through metadat, different itemtypes have different metadata)



## The args object

The args object on `IPluginBlock.return_str`.

```json
[ // This is a tuple
    [
        "pluginblock",
        "MediaViewItemTechMetadataTop"
    ],
    { // This is a dict
        "item": "<<non-serializable: VSItem>>",
        "user": "<<non-serializable: SimpleLazyObject>>",
        "request": "<<non-serializable: Request>>",
        "item_id": "VX-2",
        "is_online": true,
        "is_locked": false,
        "link_class": "",
        "entitlements": [
            "fcpx"
        ],
        "enable_download": true
    }
]
```

User groups: {{user_groups}}
