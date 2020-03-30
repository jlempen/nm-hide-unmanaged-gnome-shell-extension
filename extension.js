let original_DeviceAdded;

let NM;
try {
    NM = imports.gi.NM;
} catch(e) {
    NM = imports.gi.NetworkManager;
}

const Network = imports.ui.status.network;

function enable() {
    original_DeviceAdded = Network.NMApplet.prototype._deviceAdded;

    let decorated_DeviceAdded = function (client, device, skipSyncDeviceNames) {
        if (device.state === NM.DeviceState.UNMANAGED) {
            return;
        }

        original_DeviceAdded.call(this, client, device, skipSyncDeviceNames);
    };

	Network.NMApplet.prototype._deviceAdded = decorated_DeviceAdded;
}

function disable() {
    if (original_DeviceAdded) {
        Network.NMApplet.prototype._deviceAdded = original_DeviceAdded;
    }
}
