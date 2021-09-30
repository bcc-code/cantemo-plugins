
TODO:
- DONE Create buttons with javascript 
- DONE Get user role from cantemo
- DONE Get item id from cantemo
- DONE Create a startManualRule function which takes a process_id 
- DONE Create buttons based on config file.

- Feedback: Show that the process has started somehow
  - Show progress (api call to get status? call it every few seconds?)

- DONE Clean up names (no myplugin)

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
