Here's a reference of the special types referenced in these docs:

#### `control`

Can be either a keyword string which corresponds to an available media control
component, or a custom render prop function.

If the `control` is a keyword string, the possible values are:

- `'playpause'` (play/pause toggle button)
- `'backskip'` (previous track skip button)
- `'forwardskip'` (next track skip button)
- `'volume'` (a control for adjusting volume and toggling mute)
- `'mute'` (a control for just toggling mute, no volume bar)
- `'repeat'` (a control which cycles between no-repeat, repeat-playlist, repeat-track)
- `'shuffle'` (a control which toggles a shuffle mode)
- `'progress'` (a drag-to-seek media progress bar)
- `'progressdisplay'` (a read-only [non-draggable] progress bar)
- `'fullscreen'` (a button which toggles fullscreen view for the player UI)
- `'spacer'` (a transparent space-filling element whose default width is
  `10px`, although the style of the `.cassette__spacer` class can be
  overridden

The custom render prop function
receives the current [`playerContext`](#playercontext) as the first argument
and the current [`fullscreenContext`](#fullscreencontext) as the second argument
when passed into the [`MediaPlayer`](#mediaplayer) or
[`MediaPlayerControls`](#mediaplayercontrols) components.

```jsx static
(playerContext, fullscreenContext) => {
  return <MyControl paused={playerContext.paused} />;
};
```

#### `crossOriginAttribute`

One of the media element's possible [`crossOrigin`](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) values - `'anonymous'`, `'use-credentials'` or simply unset

#### `mediaSessionAction`

One of the [UI actions supported by the Media Session API](https://developer.mozilla.org/en-US/docs/Web/API/MediaSession/setActionHandler#Syntax) - `play`, `pause`, `seekbackward`, `seekforward`, `previoustrack` or `nexttrack`

#### `repeatStrategy`

One of three "repeat strategies" which specify different behavior when the
player reaches the end of a track:

- `'track'` (the just-completed track is played again)
- `'playlist'` (the playlist is replayed from the beginning when the end of the playlist is reached... doesn't mean anything when shuffle mode is active)
- `'none'` (when the playlist completes, playback stops... doesn't mean anything when shuffle mode is active)

#### `seekMode`

One of three "seek modes" which specify different semantics when the player is
actively seeking to a new time in the current media, for example by dragging
the handle of a progress bar:

- `'paused'` (the media audio playback is halted during dragging, but seeking happens immediately during dragging in order to preview the video frame)
- `'immediate'` (media is updated as soon as possible while the user drags to adjust the `currentTime`)
- `'onrelease'` (no seeking or pausing occurs while drag is in progress; `currentTime` adjusted on release)

#### `track`

Each track object can contain the following properties:

- `url` (_required_ unless `sources` is specified): A string containing the address of the media file to play
- `sources` (_required_ unless `url` is specified): An array of objects, if you want to specify multiple files of different types for the same track. Each object requires the properties:
  - `src` (_required_): A string containing the address of a file that can be played for this track
  - `type` (_required_): A string which is the [media file's MIME type](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats)
- `title`: The title of the track - corresponds to the [`MediaMetadata.title` property](https://wicg.github.io/mediasession/#examples)
- `artist`: The track's artist - corresponds to the [`MediaMetadata.artist` property](https://wicg.github.io/mediasession/#examples)
- `album`: The album the track belongs to - corresponds to the [`MediaMetadata.album` property](https://wicg.github.io/mediasession/#examples)
- `artwork`: The artwork for the track - corresponds to the [`MediaMetadata.artwork` property](https://wicg.github.io/mediasession/#examples)
  _NOTE_: Network speed may affect how quickly album artwork shows up in system MediaSession notifications. You can try [these strategies for implementing caching](https://developers.google.com/web/updates/2017/02/media-session#make_it_play_nice_offline).
- `meta`: An object containing any other track-specific information you want to store

**NOTE**: Re-rendering the `PlayerContextProvider` with a mutated `playlist` prop or a mutated `track` member will likely not work as expected. Please make a copy of the playlist instead. For more information, [see here](#dont-mutate-playlists).
