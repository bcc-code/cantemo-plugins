
TODO:
- Create buttons with javascript
- Get user role from cantemo
- Get item id from cantemo
- Create a startManualRule function which takes a process_id (`addEventListener(() => startManualRule(buttonConfig.process_id))`)
- Create buttons based on config file.
- Feedback: Show that the process has started somehow
  - Show progress (api call to get status? call it every few seconds?)


## The args object

The args object on `IPluginBlock.return_str`.

```json
[
    [
        "pluginblock",
        "MediaViewItemTechMetadataTop"
    ],
    {
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