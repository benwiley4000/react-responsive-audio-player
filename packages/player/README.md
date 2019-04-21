# @cassette/player

**`@cassette/player`** provides a responsive, zero-config-needed React media player component, implemented with [`@cassette/core`](/packages/core). Its control components can also be consumed directly.

### Installation

```console
npm install @cassette/player
```

#### Player components included:

- `MediaPlayer` - A media player component which plays a provided playlist of media
- `MediaPlayerControls` - The UI component of `MediaPlayer`, which requires an ancestor `PlayerContextProvider` (and optional ancestor `FullscreenContextProvider`) in order to work

#### Control components included:

- `BackSkipButton` - a button which, when clicked, either skips to the previous track in the playlist or to the beginning of the current playing track, depending upon the currently elapsed time
- `ForwardSkipButton` - a button which, when clicked, skips to the next track in the playlist
- `FullscreenButton` - a button which, when clicked, tells the surrounding `FullscreenContextProvider` (if present) to toggle fullscreen mode
- `MediaProgress` - an interactive media progress bar which can be adjusted by dragging, along with a text overlay of the current track metadata and the elapsed time
- `MediaProgressDisplay` - a non-interactive version of `MediaProgress`
- `MuteButton` - a button which, when clicked, toggles whether the media's audio is muted
- `PlayPauseButton` - a button which, when clicked, toggles whether the media is paused
- `RepeatButton` - a button which, when clicked, cycles to the next `repeatStrategy` (`none`, `playlist` or `track`)
- `ShuffleButton` - a button which, when clicked, toggles whether the playlist is being played in specified order or in shuffle order
- `Spacer` - provides a buffer between control components
- `VolumeControl` - a `MuteButton` which, when hovered (with a mouse) or initially tapped (on touch screens), displays a bar for adjusting media volume

### Find full documentation [here](https://benwiley4000.github.io/cassette/styleguide/#cassetteplayer)!
