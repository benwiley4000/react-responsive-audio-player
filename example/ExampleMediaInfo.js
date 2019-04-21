/* globals React, cassetteCore, ExampleMuteMessage */

// eslint-disable-next-line no-unused-vars
function ExampleMediaInfo() {
  return React.createElement(cassetteCore.PlayerContextConsumer, {}, function(
    playerContext
  ) {
    const currentTrack = playerContext.playlist[playerContext.activeTrackIndex];
    const currentTrackTitle = currentTrack && currentTrack.title;
    const currentTrackUrl =
      currentTrack.meta && currentTrack.meta.archiveDotOrgUrl;
    return React.createElement(
      React.Fragment,
      {},
      React.createElement(
        'p',
        { className: 'source' },
        React.createElement(
          'a',
          { className: 'link', target: '_blank', href: currentTrackUrl },
          React.createElement(
            'span',
            { className: 'track_title' },
            currentTrackTitle
          ),
          ' on archive.org'
        )
      ),
      React.createElement(ExampleMuteMessage, { muted: playerContext.muted })
    );
  });
}
