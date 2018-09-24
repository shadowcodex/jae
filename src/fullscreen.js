var fullscreenTrigger = function(element) {
    var isFullScreen = false;
    if(document.fullscreenElement) {
        isFullScreen = true;
    } else if (document.webkitFullscreenElement) {
        isFullScreen = true;
    } else if (document.mozFullScreenElement) {
        isFullScreen = true;
    } else if (document.msFullscreenElement) {
        isFullScreen = true;
    }

    console.log(isFullScreen);

    if(isFullScreen) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
    } else {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { /* Firefox */
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { /* IE/Edge */
            element.msRequestFullscreen();
        }
    }         
}