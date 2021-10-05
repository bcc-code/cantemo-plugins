
# TODO:
- ✅ Create buttons with javascript 
- ✅ Get user role from cantemo
- ✅ Get item id from cantemo
- ✅ Create a startManualRule function which takes a process_id 
- ✅ Create buttons based on config file.
- ✅ Clean up names (no myplugin)

<br/>

## METADATA
- ✅ generate different buttons depending on item type (maby through metadat, different itemtypes have different metadata)

<br/>

## BUGS
- when portal window is in mobile view you can´t click the buttons

<br/>

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