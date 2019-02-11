# cassette

<img alt="https://www.pexels.com/photo/black-lx90-cassette-tape-1228497/" src="cassette.jpg" title="Photo by Stas Knop from Pexels" />

Cassette is a zero-config-required media player component library for React. The default responsive UI works great in desktop or mobile web browsers. The flexible core handles the logical complexities of common audio and video player paradigms, while allowing you to implement any UI you can come up with.

### This is Cassette v2, which is in alpha.

See version 1 (also known as `react-responsive-audio-player`) [here](https://github.com/benwiley4000/cassette/blob/master/README.md)!

## Cassette is split into four packages
* [`@cassette/core`](/packages/core) provides React Context-based components which expose an API for consuming and updating media player state
* [`@cassette/components`](/packages/components) contains some convenient React component building blocks which can be used in media player user interfaces created with `@cassette/core`
* [`@cassette/player`](/packages/player) provides a responsive, zero-config-needed React media player component, implemented with `@cassette/core`
* [`@cassette/hooks`](/packages/hooks) provides optional [React Hooks](https://reactjs.org/docs/hooks-intro.html) for consuming media player state

### [See a live demo here](https://benwiley4000.github.io/cassette/)

### [See full documentation here](https://benwiley4000.github.io/cassette/styleguide)

#### ⚠️ Note on installation

If you wanted to install, for instance, the `@cassette/core` and `@cassette/player` packages, you would run:

```console
npm install @cassette/core @cassette/player
```

**I do not control, nor do I have any contact with the owner of, the npm package called [`cassette`](https://www.npmjs.com/package/cassette) (without the `@`).** If you `npm install cassette`, you will be using the wrong library! However it turns out this package is used for managing playlist data. So if you really want to confuse the other devs on your team, you can try using `cassette` and `@cassette` together!

**If you're not using npm and you need production-ready scripts to include in your project, check out [the releases](https://github.com/benwiley4000/cassette/releases).**

## Usage
HTML:
```html
<!DOCTYPE html>
<html>
  <head><link rel="stylesheet" href="mediaplayer.css"></head>
  <body>
    <div id="media_player_container"></div>
    <script src="dist/main.js"></script>
  </body>
</html>
```
JavaScript (with JSX):
```javascript
// dist/main.js
var React = require('react');
var ReactDOM = require('react-dom');
var MediaPlayer = require('cassette');

var playlist =
  [{ url: 'media/track1.mp3',
     title: 'Track 1 by Some Artist' },
   { url: 'media/track2.mp3',
     title: 'Some Other Artist - Track 2' }];
ReactDOM.render(
  <MediaPlayer playlist={playlist} />,
  document.getElementById('media_player_container')
);
```
JavaScript (without JSX):
```javascript
// dist/main.js
...
ReactDOM.render(
  React.createElement(MediaPlayer, {
    playlist: playlist
  }),
  document.getElementById('media_player_container')
);
```

## Getting started
### Quick start
The fastest way to get off the ground with this module is to paste the following code into an HTML file and open it in a web browser:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Cassette</title>
    <style> html, body { margin: 0; background: lightseagreen; } </style>
    <link rel="stylesheet" href="https://unpkg.com/cassette@1.5.0/dist/mediaplayer.css">
  </head>
  <body>
    <div id="media_player_container"></div>

    <script src="https://unpkg.com/react@16.3.0-alpha.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.3.0-alpha.0/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/prop-types/prop-types.js"></script>
    <script src="https://unpkg.com/resize-observer-polyfill"></script>
    <script src="https://unpkg.com/cassette@1.5.0/dist/mediaplayer.js"></script>
    <script>
      var playlist =
        [{ url: 'song1.mp3', title: 'Track 1 - a track to remember' },
         { url: 'song2.ogg', title: 'Oggs Oggs Oggs' }];
      ReactDOM.render(
        React.createElement(
          'div',
          { style: { position: 'fixed', bottom: 0, width: '100%' } },
          React.createElement(MediaPlayer, {
            playlist: playlist,
            autoplay: true,
            autoplayDelayInSeconds: 2.1,
            controls: ['playpause', 'forwardskip', 'progressdisplay']
          })
        ),
        document.getElementById('media_player_container')
      );
    </script>
  </body>
</html>
```
Of course you'll need to include paths to actual media files, or the player will display and not work.

### Package installation
If you use [npm](https://www.npmjs.com/) and a front-end package bundling system like [Browserify](http://browserify.org/) or [webpack](https://webpack.github.io/), it's recommended that you install the package and its dependencies in your project:
```
npm install --save cassette react react-dom
```
While `react-dom` isn't technically a peer dependency, you'll need it if you plan to place the media player in the DOM, which you probably will.

When you first include the component in your project it might not look how you're expecting. Be sure to check the **Styling** section below.

### Pre-built releases
If you prefer not to use a package bundler, you can find built releases to download [here](https://github.com/benwiley4000/cassette/releases).

## Options
Options can be passed to the MediaPlayer element as props. Currently supported props are:

* `playlist` (*required*): an array containing data about the tracks which will be played. **undefined** by default. Each track object can contain the following properties:
  - `url` (*required* unless `sources` is specified): A string containing the address of the media file to play
  - `sources` (*required* unless `url` is specified): An array of objects, if you want to specify multiple files of different types for the same track. Each object requires the properties:
    - `src` (*required*): A string containing the address of a file that can be played for this track
    - `type` (*required*): A string which is the [media file's MIME type](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats)
  - `title`: The title of the track - corresponds to the [`MediaMetadata.title` property](https://wicg.github.io/mediasession/#examples)
  - `artist`: The track's artist - corresponds to the [`MediaMetadata.artist` property](https://wicg.github.io/mediasession/#examples)
  - `album`: The album the track belongs to - corresponds to the [`MediaMetadata.album` property](https://wicg.github.io/mediasession/#examples)
  - `artwork`: The artwork for the track - corresponds to the [`MediaMetadata.artwork` property](https://wicg.github.io/mediasession/#examples)
    *NOTE*: Network speed may affect how quickly album artwork shows up in system MediaSession notifications. You can try [these strategies for implementing caching](https://developers.google.com/web/updates/2017/02/media-session#make_it_play_nice_offline).
  - `meta`: An object containing any other track-specific information you want to store

  **NOTE**: Re-rendering the `MediaPlayer` with a mutated `playlist` prop will not work as expected. Please make a copy of the playlist instead. For more information, [see here](https://github.com/benwiley4000/cassette/blob/bcab159f365bd82ad25ee9e0288224e0d174b886/docs/playlist_in_progress.md).

* `controls`: an array of keyword strings which correspond to available media control components. The order of keywords translates to the order of rendered controls. The default array is: `['spacer', 'backskip', 'playpause', 'forwardskip', 'spacer', 'progress']`. The possible keyword values are:
  - `'playpause'` (play/pause toggle button)
  - `'backskip'` (previous track skip button)
  - `'forwardskip'` (next track skip button)
  - `'volume'` (a control for adjusting volume and toggling mute)
  - `'repeat'` (a control which cycles between no-repeat, repeat-playlist, repeat-track)
  - `'shuffle'` (a control which toggles a shuffle mode)
  - `'progress'` (a drag-to-seek media progress bar)
  - `'progressdisplay'` (a read-only [non-draggable] progress bar)
  - `'spacer'` (a transparent space-filling element whose default width is `10px`, although [the style of the `.spacer` class can be overridden](src/styles/_Spacer.scss))

* `autoplay`: a boolean value (`true`/`false`) that if true will cause the player to begin automatically once mounted. **false** by default.

  **NOTE**: Autoplaying media or video is considered highly annoying in most contexts and is [disabled by some browsers](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes). Please use this option judiciously!

* `autoplayDelayInSeconds`: a number value that represents the number of seconds to wait until beginning autoplay. Will be ignored if `autoplay` is false. **0** by default. *NOTE:* Delay is managed by `setTimeout` and is therefore inexact. If you need to time an autoplay exactly, find a different module that uses the [WebMedia API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Media_API) for playback (or fork this one!).

* `gapLengthInSeconds`: a number value that represents the number of seconds to wait at the end of a track before beginning the next one in the playlist. Not applicable for manually-initiated skip. **0** by default. *NOTE:* Like `autoplayDelayInSeconds`, this delay is inexact.

* `cycle`: a boolean value that if true continues playing from the beginning after the playlist has completed. **true** by default.

* `loadFirstTrackOnPlaylistComplete`: a boolean value that if true loads up the first track when the playlist has completed. Ignored if `cycle` is true.

* `seekMode`: a string whose value should be `'paused'`, `'immediate'` or `'onrelease'`.

* `maintainPlaybackRate`: stops playback rate from changing on `src` update. **false** by default.

* `stayOnBackSkipThreshold`: a number value that represents the number of seconds of progress after which pressing the back button will simply restart the current track. **5** by default.

* `supportedMediaSessionActions`: an array of [Media Session API action names](https://wicg.github.io/mediasession/#actions-model). This determines which system media controls should be available on platforms supporting the Media Session API. It is *not* the same as the `controls` array. The default array is: `['play', 'pause', 'previoustrack', 'nexttrack']`. The possible values are:
  - `'play'` (ignored at present since systems should provide a default implementation regardless)
  - `'pause'` (ignored at present, for same reason as `'play'`)
  - `'seekbackward'`
  - `'seekforward'`
  - `'previoustrack'`
  - `'nexttrack'`

* `mediaSessionSeekLengthInSeconds`: a number value representing the number of seconds forward or backward to seek when handling the Media Session API `seekbackward` and `seekforward` actions. **10** by default.

* `getDisplayText`: a function which takes a track object and returns a string used to represent that track in the UI. By default, the track will be displayed as "[artist] - [title]".

* `onMediaEvent`: An object where the keys are [media event types](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events) and the values are callback functions. **undefined** by default.

* `mediaElementRef`: A callback function called after the component mounts and before it unmounts. Similar to [React ref callback prop](https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute) but its only parameter is the internally-referenced HTML media element, not the component itself. **undefined** by default. *NOTE:* This ref should not be used for media element event listeners; use `onMediaEvent`.

* `crossOrigin`: A string value corresponding to the [`crossOrigin`](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) media element attribute for adjusting CORS settings.

None of these options are required, though the player will be functionally disabled if no `playlist` prop is provided.

## Does this work with the Web Audio API?

We don't expose any special props for manipulating the Web Audio API with React.

However, you *can* use the `mediaElementRef` prop and [`createMediaElementSource`](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaElementSource) to process your media before it gets sent to the speaker.

For example, you could use this code to add a low pass to high pass filter transition during the first 10 seconds your media player is mounted:

```jsx
<MediaPlayer
  playlist={playlist}
  mediaElementRef={media => {
    const ctx = new AudioContext();

    let source = ctx.createMediaElementSource(media);

    for (const filterType of ['lowpass', 'highpass']) {
      const filter = ctx.createBiquadFilter();
      filter.type = filterType;
      filter.frequency.value = 100;
      filter.frequency.exponentialRampToValueAtTime(3000, 10);
      source = source.connect(filter);
    }

    source.connect(ctx.destination);
  }},
  crossOrigin="anonymous"
  autoplay
/>
```

You might need to set the `crossOrigin` prop in order for Web Audio API processing to work correctly.

## Styling

In order to use the default stylings you'll need to grab the compiled `mediaplayer.css` sheet from the module's `dist/` directory. Again, if you're not using npm, you can get the sheet [here](https://github.com/benwiley4000/cassette/releases).

It's easy to override the default styles with CSS. Alternatively, for styles which only affect the outer element, you can use [React inline styles](https://facebook.github.io/react/docs/dom-elements.html#style).

For example, if you want your media player to take the full screen width, do the following:
* Include the following code in your own CSS:
  ```css
  html,
  body {
    margin: 0;
  }
  ```
* Give your media player fixed position styling, e.g.
  ```jsx
  <MediaPlayer style={{ position: 'fixed', bottom: 0 }} />
  ```

## Usage with SASS

If you preprocess your styles with Sass, you can have more powerful control via Sass variables. The defaults are located at the top of [**src/index.scss**](src/index.scss):

```scss
$media_player_base_height: 50px !default;
$media_player_base_bg_color: #333 !default;
$media_player_base_text_color: #fff !default;
// ...etc
```
The `!default` flag means you can override these variable definitions before the styles are included.

```scss
// Include var overrides before default styles import
$media_player_base_bg_color: firebrick;

// Using webpack css/sass module import syntax
@import '~cassette/src/index';

// include other overrides afterward
.media_player {
  width: 600px;
}
```

# Development

For building and testing instructions, see [CONTRIBUTING.md](CONTRIBUTING.md).

# Acknowledgements

Thanks to [BrowserStack](http://browserstack.com/) for providing their platform free of charge for this project (and many other open source projects). We're using BrowserStack to test compatibility across multiple browsers and platforms.

<a href="https://www.browserstack.com">
  <img alt="BrowserStack Logo" height="100" src="https://p14.zdusercontent.com/attachment/1015988/DucCZ7r9Wh1qj5RTUQUtIgaDM?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..QyFYSeGwuz3hu2DYiIp-Wg.wG_egoKd46-VIYOLxlSOyc3zxeZQz0rLx0q6vklPvnEYiTRW2UolruFNGe2_h-Ci7kDR8hYqKyCbDJx8apDXyiJwwRiL1qYuBq9pdk8NP4h9znXRgs-5FCvAT-QX9ICsoDUEdHa8Bvj0sc_9ZjMocTn_njqzCkVv7PtKqT-QYf3zJIlsib0JvRgiMGuw__AyId65m1z7Q93LC4pVzlvqBL_4B26I2Mvt4NPqvlTbVUg_tbIWUDqzmhNBfqCWAuIfNYDb_EtIkdR8fWQ-uOFd5qjkB84NOi2ljlo7g5WrFYI.5MCH_b_7gSlMJ4L9twhThA">
</a>

## Icons

The standard control components make use of icons from various sources.

The CSS YouTube-style play/pause button and the skip button were authored in part by [@benwiley4000](https://github.com/benwiley4000), with heavy assistance from [this CodePen](https://codepen.io/OxyDesign/pen/ojpepQ) by [@OxyDesign](https://github.com/OxyDesign).

The SVG repeat, shuffle, fullscreen and volume icons come from Google's [material-design-icons](https://github.com/google/material-design-icons).
