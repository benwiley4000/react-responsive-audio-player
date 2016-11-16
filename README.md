#react-responsive-audio-player

![react-responsive-audio-player in action](demo.gif)

### [see a live demo here](https://benwiley4000.github.io/react-responsive-audio-player/)

A simple, clean, and responsive visual wrapper for the HTML audio tag, built with React. Give it a playlist and go.

[![NPM](https://nodei.co/npm/react-responsive-audio-player.png)](https://npmjs.org/package/react-responsive-audio-player)

**If you're not using npm and you need production-ready scripts to include in your project, check out [the releases](https://github.com/benwiley4000/react-responsive-audio-player/releases).**

##Usage
HTML:
```html
<!DOCTYPE html>
<html>
  <head><link rel="stylesheet" href="audioplayer.css"></head>
  <body>
    <div id="audio_player_container"></div>
    <script src="dist/main.js"></script>
  </body>
</html>
```
JavaScript (with JSX):
```javascript
// dist/main.js
var React = require('react');
var ReactDOM = require('react-dom');
var AudioPlayer = require('react-responsive-audio-player');

var playlist =
  [{ url: 'audio/track1.mp3',
     displayText: 'Track 1 by Some Artist' },
   { url: 'audio/track2.mp3',
     displayText: 'Some Other Artist - Track 2' }];
ReactDOM.render(
  <AudioPlayer playlist={playlist} hideBackSkip={true} />,
  document.getElementById('audio_player_container')
);
```
JavaScript (without JSX):
```javascript
// dist/main.js
...
ReactDOM.render(
  React.createElement(AudioPlayer, {
    playlist: playlist,
    hideBackSkip: true
  }),
  document.getElementById('audio_player_container')
);
```

##Getting started
###Quick start
The fastest way to get off the ground with this module is to paste the following code into an HTML file and open it in a web browser:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>React Responsive Audio Player</title>
    <style> html, body { margin: 0; background: lightseagreen; } </style>
    <!-- audioplayer.css v1.0.0 -->
    <link rel="stylesheet" href="https://cdn.rawgit.com/benwiley4000/react-responsive-audio-player/56ff1cf16243fbb402e0892e2329fe6304894c39/audioplayer.css">
  </head>
  <body>
    <div id="audio_player_container"></div>

    <!-- react/react-dom served over CDN -->
    <script src="https://unpkg.com/react@15/dist/react.js"></script>
    <script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
    <!-- audioplayer.js v1.0.0 -->
    <script src="https://cdn.rawgit.com/benwiley4000/react-responsive-audio-player/56ff1cf16243fbb402e0892e2329fe6304894c39/audioplayer.js"></script>
    <script>
      var playlist =
        [{ url: 'song1.mp3', displayText: 'Track 1 - a track to remember' },
         { url: 'song2.ogg', displayText: 'Oggs Oggs Oggs' }];
      ReactDOM.render(
        React.createElement(AudioPlayer, {
          playlist: playlist,
          autoplay: true,
          autoplayDelayInSeconds: 2.1,
          style: { position: 'fixed', bottom: 0 }
        }),
        document.getElementById('audio_player_container')
      );
    </script>
  </body>
</html>
```
Of course you'll need to include paths to actual audio files, or the player will display and not work.

###Package installation
If you use [npm](https://www.npmjs.com/) and a front-end package bundling system like [Browserify](http://browserify.org/) or [webpack](https://webpack.github.io/), it's recommended that you install the package and its dependencies in your project:
```
npm install --save react-responsive-audio-player react react-dom
```
While `react-dom` isn't technically a peer dependency, you'll need it if you plan to place the audio player in the DOM, which you probably will.

When you first include the component in your project it might not look how you're expecting. Be sure to check the **Styling** section below.

###Pre-built releases
If you prefer not to use a package bundler, you can find built releases to download [here](https://github.com/benwiley4000/react-responsive-audio-player/releases).

##Options
Options can be passed to the AudioPlayer element as props. Currently supported props are:

* `playlist`: an array containing urls and display text for each of the tracks you wish to play (see above example for format). **undefined** by default.

* `autoplay`: a boolean value (`true`/`false`) that if true will cause the player to begin automatically once mounted. **false** by default.

* `autoplayDelayInSeconds`: a number value that represents the number of seconds to wait until beginning autoplay. Will be ignored if `autoplay` is false. **0** by default. *NOTE:* Delay is managed by `setTimeout` and is therefore inexact. If you need to time an autoplay exactly, find a different module that uses the [WebAudio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) for playback (or fork this one!).

* `gapLengthInSeconds`: a number value that represents the number of seconds to wait at the end of a track before beginning the next one in the playlist. Not applicable for manually-initiated skip. **0** by default. *NOTE:* Like `autoplayDelayInSeconds`, this delay is inexact.

* `hideBackSkip`: a boolean value that if true disables the back skip button by hiding it from view. **false** by default.

* `stayOnBackSkipThreshold`: a number value that represents the number of seconds of progress after which pressing the back button will simply restart the current track. **5** by default.

* `style`: a React style object which is applied to the outermost div in the component. **undefined** by default.

* `onTrackStart`: A function callback that is invoked when a track begins playing. An argument will be provided to the callback representing the track that has been started. **undefined** by default.

* `onTrackEnd`: A function callback that is invoked when a track completely finishes playing. An argument will be provided to the callback representing the track that has completely finished playing. **undefined** by default.

None of these options are required, though the player will be functionally disabled if no `playlist` prop is provided.

##Styling
**IMPORTANT NOTES**
* In order to use the default stylings you'll need to grab the compiled `audioplayer.css` sheet from the module's `dist/` directory. Again, if you're not using npm, you can get the sheet [here](https://github.com/benwiley4000/react-responsive-audio-player/releases).
* If you want your audio player to take the full screen width, do the following:
  * Include the following code in your own CSS:
  ```css
  html,
  body {
    margin: 0;
  }
  ```
  * Give your audio player fixed position styling, e.g.
  ```html
  <AudioPlayer style={{ position: 'fixed', bottom: 0 }} />
  ```

Why aren't these styles included by default? See [this discussion](https://github.com/benwiley4000/react-responsive-audio-player/issues/6).

*The default look:*

![Audio Player Screenshot](audio_player_example_01.png)

The default stylings for the audio player can be found [here](https://github.com/benwiley4000/react-responsive-audio-player/blob/master/src/index.scss). It's easy to override them with CSS.

To change the `font-family` for the whole component using CSS, use:
```css
.audio_player {
  font-family: Helvetica, sans-serif;
}
```
To make the audio player's background color `firebrick`, use:
```css
.audio_player {
  background-color: #b22222;
}
.audio_player .play_pause_button .triangle_1,
.audio_player .play_pause_button .triangle_2 {
  border-right-color: #b22222;
}
```
Alternatively, for styles which only affect the outer element, use [React inline styles](https://facebook.github.io/react/docs/dom-elements.html#style).

#Development

For building and testing instructions, see [CONTRIBUTING.md](CONTRIBUTING.md).
