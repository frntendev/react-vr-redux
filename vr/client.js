// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import {VRInstance} from 'react-vr-web';
let isRotate = true;
function init(bundle, parent, options) {
    const vr = new VRInstance(bundle, 'HomingVR', parent, {
        // Add custom options here
        cursorEnabled: true,
        cursorAutoHide: false,
        allowCarmelDeeplink: true,
        ...options,
    });
    vr.render = function () {
        // Any custom behavior you want to perform on each frame goes here
        setTimeout(function () {
            if (isRotate)
                vr.scene.rotation.y += 0.001
        }, 50)
    };
    // Begin the animation loop
    vr.start();
    window.playerCamera = vr.player._camera;
    window.vr = vr;
    window.ondblclick = onRendererDoubleClick;
    window.onmousewheel = onRendererMouseWheel;
    window.onmousedown = onRendererClick;
    window.onclick = onRendererClick;
    vr.rootView.context.worker.addEventListener('message', onVRMessage);
    return vr;
}
function onVRMessage(e) {
    switch (e.data.type) {
        case 'sceneChanged':
            if (window.playerCamera.zoom != 1) {
                window.playerCamera.zoom = 1;
                window.playerCamera.updateProjectionMatrix();
            }
            break;
        case 'sceneLoadStart':
            document.getElementById('loader').style.display = 'block';
            break;
        case 'sceneLoadEnd':
            document.getElementById('loader').style.display = 'none';
            break;
        default:
            return;
    }
}
function onRendererDoubleClick() {
    // var x  = 2 * (event.x / window.innerWidth) - 1;
    // var y = 1 - 2 * ( event.y / window.innerHeight );
    // var coordinates = get3DPoint(window.playerCamera, x, y);
    // vr.rootView.context.worker.postMessage({ type: "newCoordinates", coordinates: coordinates });
    window.playerCamera.zoom = 1;
    window.playerCamera.updateProjectionMatrix();
}
function infinitRotateCamera() {
    setInterval(() => {
        return window.playerCamera.zoom += 1;
    }, 1000)
}
function onRendererMouseWheel() {
    if (event.deltaY > 0) {
        if (window.playerCamera.zoom > 0.2) {
            window.playerCamera.zoom -= 0.05;
            window.playerCamera.updateProjectionMatrix();
        }
    }
    else {
        if (window.playerCamera.zoom < 10) {
            window.playerCamera.zoom += 0.05;
            window.playerCamera.updateProjectionMatrix();
        }
    }
}
function onRendererClick() {
    isRotate = false;
    setTimeout(function () {
        isRotate = true;
    }, 2000)
}
window.ReactVR = {init};
