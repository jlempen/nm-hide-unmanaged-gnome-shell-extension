# nm-hide-unmanaged

This is simple gnome shell extension that hide all unmanaged network devices from gnome status applet (and also example of monkey patching in gnome shell).
This is very usefull when using a lot of virtual solutions like docker or virtual box, that create many network devices.

To install just place this extension in to `/etc/NetworkManager/NetworkManager.conf` folder and relogin. 
Use `gnome-tweak-tool` to activate extension.

This is example of my `/etc/NetworkManager/NetworkManager.conf`:
```
[main]
plugins=keyfile

[keyfile]
unmanaged-devices=interface-name:vmnet*,interface-name:docker*,interface-name:br-*,interface-name:veth*,interface-name:virbr*

```

Don't forget to `reboot` to apply all changes