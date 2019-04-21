/* globals React, cassetteCore, cassettePlayer */

// eslint-disable-next-line no-unused-vars
function ExampleMediaPlayer() {
  return React.createElement(
    cassetteCore.FullscreenContextProvider,
    {},
    // function(fullscreenContext) {
    function() {
      return React.createElement(cassettePlayer.MediaPlayerControls, {
        // showVideo: fullscreenContext.fullscreen,
        showVideo: true,
        controls: [
          'spacer',
          'backskip',
          'playpause',
          'forwardskip',
          'volume',
          'shuffle',
          'repeat',
          'spacer',
          'progress',
          'fullscreen'
        ]
      });
    }
  );
}
