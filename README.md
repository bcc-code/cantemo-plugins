# Cantemo iframe plugin

This Cantemo plugin embeds an external tool as an `<iframe>` in the media item
view. It hooks into `MediaViewItemTechMetadataTop` and renders the iframe with
the current item's ID appended as a query parameter, e.g.:

```
https://tools.bcc.media/cantemo/?id=VX-2
```

## Changing the target URL

Edit the `src` of the iframe in
[`templates/iframe_plugin.html`](templates/iframe_plugin.html).
`{{ item_id }}` is the Cantemo item id (e.g. `VX-2`) supplied by the plugin
context.

## Install

Run `install.sh` as root on the Cantemo host. It copies the plugin into
`/opt/cantemo/portal/portal/plugins/`, runs `syncdata`, and restarts portal.

## The args object

The `args` object on `IPluginBlock.return_string` (hook
`MediaViewItemTechMetadataTop`):

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
