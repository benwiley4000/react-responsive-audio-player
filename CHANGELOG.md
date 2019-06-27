# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [v2.0.0-beta.3] - 2019-06-27
v2 is a huge update! And yes, there are breaking changes. If you're just trying to upgrade from v1, you can check the **Changed** and **Removed** sections.

These notes are on changes since the previous stable release ([v1.5.0](#v150---2018-09-30)). For changes that have occurred between alpha/beta releases, check the [release notes](https://github.com/benwiley4000/cassette/releases).

All updates are mentioned on a broad level, but it wouldn't make sense to explain all new and changed APIs in minute detail here, so be sure to [read the docs](https://benwiley4000.github.io/cassette/styleguide).

### Changed
- The project has been renamed from react-responsive-audio-player to Cassette ([#284](https://github.com/benwiley4000/cassette/issues/284), [#291](https://github.com/benwiley4000/cassette/issues/291)), and is now distributed in several packages ([#292](https://github.com/benwiley4000/cassette/issues/292)), so upgrading to version 2 will mean installing a new package or packages from npm. A simple upgrade will typically require only the `@cassette/player` package.
    - Previously the package had a default export (`AudioPlayer`). `AudioPlayer` has been renamed to `MediaPlayer`  and is a named export from `@cassette/player`. So anything that previously looked like `import AudioPlayer from 'react-responsive-audio-player'` will become `import { MediaPlayer } from '@cassette/player'`.
    - `MediaPlayer` is the combination of two components: `MediaPlayerControls` from the `@cassette/player` package and `PlayerContextProvider` ([#214](https://github.com/benwiley4000/cassette/issues/214)) from the `@cassette/core` package. `MediaPlayer` doesn't accept any unique props of its own, but rather all the props accepted by `MediaPlayerControls` and `PlayerContextProvider`. Discussion of prop changes or additions since v1 in this changelog section pertain to one of those two components.
- The `audioElementRef` prop to `PlayerContextProvider`/`MediaPlayer` has been renamed `mediaElementRef` ([#284](https://github.com/benwiley4000/cassette/issues/284))
- A few minor style tweaks and improvements have been made for the player UI ([#69](https://github.com/benwiley4000/cassette/issues/69), [#94](https://github.com/benwiley4000/cassette/issues/94)), but things look overall the same when you upgrade. However HTML and CSS have been totally refactored and classes renamed for v2 so any CSS extensions you wrote for v1 will need to be recreated using the new stylesheets for v2. ([#42](https://github.com/benwiley4000/cassette/issues/42), [#81](https://github.com/benwiley4000/cassette/issues/81))
- New/improved timestamp formatting in the default UI implementation from `@cassette/player` ([#397](https://github.com/benwiley4000/cassette/issues/397))
- Timestamp display always rounds down ([#429](https://github.com/benwiley4000/cassette/issues/429)).
- When an end user begins seeking with a progress bar or similar, the default behavior (which can be configured) is now to update the `currentTime` immediately instead of waiting until the user releases the mouse. ([#204](https://github.com/benwiley4000/cassette/issues/204))
- Initiating a forward skip during playback of the last track in a playlist, when the `cycle` prop is `false`, no longer works - the action will be ignored and playback will continue. ([#68](https://github.com/benwiley4000/cassette/issues/68))
- Track duration is now reset to 0 when a new track is selected, then changes once metadata loads. To avoid this funny intermediate state, you should set the `duration` property on your tracks! ([#372](https://github.com/benwiley4000/cassette/issues/372))
- We no longer pause media when the `stalled` event fires ([#166](https://github.com/benwiley4000/cassette/issues/166))
- If a user tries to manually set the media `src` to something that isn't in the playlist, it will now be reset automatically to the previous state ([#178](https://github.com/benwiley4000/cassette/issues/178))
- Although things will still function without it, the `isUnboundedStream` property should be set on track objects that are indeed unbounded streams (e.g. radio) since one of our fixes means retrying media fetches that yield `Infinity` duration. Setting `isUnboundedStream` to `true` skips the refetch. ([#373](https://github.com/benwiley4000/cassette/issues/373))
- Now requires a peer dependency of React v16.3 or higher ([#138](https://github.com/benwiley4000/cassette/issues/138))

### Removed
- The `onMediaEvent` prop is removed, since most of its use cases can be solved better now by using the `PlayerContextProvider` ([#226](https://github.com/benwiley4000/cassette/issues/226))
    - `mediaElementRef` (previously called `audioElementRef` ([#284](https://github.com/benwiley4000/cassette/issues/284))) still exists as an escape hatch
- The `cycle` prop was removed. Use `defaultRepeatStrategy` instead, and any subsequent updates should be set via `playerContext` (since we would expect this setting to be changed as a result of an end user action) ([#79](https://github.com/benwiley4000/cassette/issues/79))
- Features deprecated in v1.x.x have now been totally removed:
    - The `style` prop to `AudioPlayer` (now `MediaPlayer`) is no longer accepted. Use styles on a container element, or CSS, instead.
    - Mutating and re-using playlist arrays no longer works as expected. Playlists should be shallow copied if they need to be modified. See [this docs entry](https://benwiley4000.github.io/cassette/styleguide/#dont-mutate-playlists) for more information. ([#268](https://github.com/benwiley4000/cassette/issues/268))
    - The `displayText` property on a playlist track is removed in favor of the `artist` and `title` properties (also used by Media Session API) ([#148](https://github.com/benwiley4000/cassette/issues/148)).
        - If this isn't enough, you can pass the `getDisplayText` prop to `MediaPlayer`/`MediaPlayerControls`.
    - The `hideBackSkip`, `hideForwardSkip` and `disableSeek` props from `AudioPlayer` in v1.x.x are not available on `MediaPlayer`/`MediaPlayerControls`. Use the `controls` prop instead, which is more flexible.

### Added
- Video ([#206](https://github.com/benwiley4000/cassette/issues/206), [#316](https://github.com/benwiley4000/cassette/issues/316)) and fullscreen ([#221](https://github.com/benwiley4000/cassette/issues/221)) support!
    - New `showVideo` prop for `MediaPlayer`/`MediaPlayerControls` can be set true to activate a video display ([#221](https://github.com/benwiley4000/cassette/issues/221))
    - Can pass custom video display implementation to `MediaPlayer`/`MediaPlayerControls` ([#253](https://github.com/benwiley4000/cassette/issues/253))
    - Video display will show track album artwork for audio ([#241](https://github.com/benwiley4000/cassette/issues/241))
- React Context-based API exposes media state and callbacks and allows totally custom player UI implementation ([#138](https://github.com/benwiley4000/cassette/issues/138), [#208](https://github.com/benwiley4000/cassette/issues/208))
    - Besides what comes in the `@cassette/core` package, there is a `@cassette/hooks` package for those who prefer to work with React hooks ([#361](https://github.com/benwiley4000/cassette/issues/361))
- `PlayerContextGroup` can wrap multiple `PlayerContextProvider`/`MediaPlayer` instances to share configuration and prevent simultaneous audio playback ([#219](https://github.com/benwiley4000/cassette/issues/219))
- Several new control types for `@cassette/player`: volume ([#72](https://github.com/benwiley4000/cassette/issues/72)), mute ([#257](https://github.com/benwiley4000/cassette/issues/257)), repeat ([#79](https://github.com/benwiley4000/cassette/issues/79)), shuffle ([#87](https://github.com/benwiley4000/cassette/issues/87)), read-only progress ([#60](https://github.com/benwiley4000/cassette/issues/60)), fullscreen ([#221](https://github.com/benwiley4000/cassette/issues/221))
- Helper primitives for building custom UI (`ProgressBar`, `ProgressBarDisplay`, `MaybeMarquee` ([#245](https://github.com/benwiley4000/cassette/issues/245)), `VideoDisplay`) available from `@cassette/components` package ([#292](https://github.com/benwiley4000/cassette/issues/292))
- Keyboard navigation support for UI controls ([#124](https://github.com/benwiley4000/cassette/issues/124), [#396](https://github.com/benwiley4000/cassette/issues/396))
- New `controls` prop functionality for `MediaPlayerControls`/`MediaPlayer` - previously in v1 `controls` supported a few control types as keywords, but in v2 several more built-in control keywords are supported, and custom controls can be implemented by passing in a function as a member of the `controls` array ([#42](https://github.com/benwiley4000/cassette/issues/42))
- New props for `PlayerContextProvider`, which can also be passed to `MediaPlayer`:
    - `initialStateSnapshot` and `onStateSnapshot` can be used to persist media player state and restore at load time later ([#226](https://github.com/benwiley4000/cassette/issues/226))
    - `loadFirstTrackOnPlaylistComplete` can be set `false` to prevent a playlist from resetting on the first track when the playlist finishes ([#42](https://github.com/benwiley4000/cassette/issues/42))
    - `defaultVolume`, `defaultMuted`, `defaultPlaybackRate`, `startingTrackIndex` ([#61](https://github.com/benwiley4000/cassette/issues/61))
    - `defaultRepeatStrategy` ([#79](https://github.com/benwiley4000/cassette/issues/79))
    - `maintainPlaybackRate` - can be set `true` in order to override the default browser behavior which resets the playback rate on every new track ([#129](https://github.com/benwiley4000/cassette/issues/129))
    - `seekMode` - for specifying whether to pause, seek immediately, or continue playback and seek after release, when seeking with a progress bar ([#204](https://github.com/benwiley4000/cassette/issues/204))
    - `onActiveTrackUpdate` callback prop ([#76](https://github.com/benwiley4000/cassette/issues/76), [#406](https://github.com/benwiley4000/cassette/issues/406))
    - `onTrackPlaybackFailure` callback prop ([#356](https://github.com/benwiley4000/cassette/issues/356))
    - `onTimeUpdate` callback prop ([#369](https://github.com/benwiley4000/cassette/issues/369))
- Support for specifying multiple source audio files (e.g. ogg, mp3) for the same track ([#178](https://github.com/benwiley4000/cassette/issues/178))
- `duration` property supported on playlist track objects so the player can display nicely before media has finished loading ([#372](https://github.com/benwiley4000/cassette/issues/372))
- `@cassette/player` exports components for individual player controls now ([#42](https://github.com/benwiley4000/cassette/issues/42), [#231](https://github.com/benwiley4000/cassette/issues/231), [#341](https://github.com/benwiley4000/cassette/issues/341))
- SCSS and CSS stylesheets for individual control components are now shipped for `@cassette/player`, in case you want to include only a subset of CSS you know you'll use. ([#42](https://github.com/benwiley4000/cassette/issues/42)) ([#73](https://github.com/benwiley4000/cassette/issues/73), [#231](https://github.com/benwiley4000/cassette/issues/231))
- A `trackIndex` can now be passed to a play/pause button in order to tie that button to a particular track in the playlist ([#338](https://github.com/benwiley4000/cassette/issues/338))
- A `durationOverride` can be set on a media progress bar if you're running a live stream or similar and have stream duration info that isn't available to the media element ([#379](https://github.com/benwiley4000/cassette/issues/379))
- The media `title` attribute is now set, and configurable, for system notifcation support on iOS ([#344](https://github.com/benwiley4000/cassette/issues/344))
- You can set a `startingTime` property on a track object if you need to restore `currentTime` from some previously recorded state (advanced use case) ([#369](https://github.com/benwiley4000/cassette/issues/369))
- You can now bring your own `HTMLMediaElement` implementation ([#349](https://github.com/benwiley4000/cassette/issues/349))
- You can now force the player to reload if something goes wrong with the network. ([#426](https://github.com/benwiley4000/cassette/pull/426))

### Fixed
- Prevent fullscreen player from opening automatically on iOS ([#307](https://github.com/benwiley4000/cassette/issues/307))
- Fix issue with `undefined` `crossOrigin` prop in Microsoft Edge ([#368](https://github.com/benwiley4000/cassette/issues/368))
- Proper time/progress display for unbounded streams e.g. radio ([#377](https://github.com/benwiley4000/cassette/issues/377))
- Address weird infinity duration bug on iOS ([#373](https://github.com/benwiley4000/cassette/issues/373))
    - This fix means you should set the `isUnboundedStream` property on a playlist track if it is indeed an unbounded stream

## [v1.5.0] - 2018-09-30
### Deprecated
- The `style` prop to `AudioPlayer` is now deprecated. Use styles on a container element, or CSS, instead.

### Fixed
- Fixes a bug where selection on the document would remain disabled if the `AudioPlayer` were to unmount during a seek.

## [v1.4.2] - 2018-09-30
### Deprecated
- Deprecates the practice of mutating playlists passed to the `AudioPlayer` component. Playlists should be shallow copied if they need to be modified. Mutated playlists will no longer trigger re-renders in v2.0.0.

## v1.4.1 - 2018-09-30
This version is the same as v1.4.0 and was published by mistake - it will be removed from npm.

## [v1.4.0] - 2018-09-03
### Added
- New support for the `crossOrigin` prop, which enables cross-origin audio sources to be manipulated by the Web Audio API.

## [v1.3.2] - 2018-08-17
### Security
- Resolved security vulnerabilities in dependency graph. Please upgrade!

## [v1.3.1] - 2018-03-25
### Changed
- Only emit warning about autoplay being disabled if the error was a `NotAllowedError`.

### Fixed
- No more abort errors fired when rapidly skipping through tracks or pausing before play has a chance to happen.

## [v1.3.0] - 2018-02-24
### Added
- New integration with the Media Session API which allows track metadata and playback controls to be displayed in system notifications (Chrome for Android, and other supporting platforms) ([#148](https://github.com/benwiley4000/cassette/issues/148))
    - See [#146](https://github.com/benwiley4000/cassette/issues/146) for a detailed list of new prop options
- The `<audio>` element now lives in the DOM (for Media Session API support) ([#148](https://github.com/benwiley4000/cassette/issues/148))
- New `getDisplayText` prop defines display text as function of track object ([#148](https://github.com/benwiley4000/cassette/issues/148))

### Changed
- Previously, the audio always paused before changing to a new track. There was no real benefit to this, and it caused weird behavior in the Media Session API integration (pause button would very briefly render as a play button) so that behavior was removed. Audio now only pauses on track change if the playlist is completed, and non-cycling. ([#153](https://github.com/benwiley4000/cassette/issues/153))

### Deprecated
- The `displayText` property on a playlist track is deprecated in favor of the `artist` and `title` properties (also used by Media Session API) ([#148](https://github.com/benwiley4000/cassette/issues/148)). Will be removed in v2.0.0.
    - If this isn't enough, you can define the `getDisplayText` prop

### Fixed
- Pause state no longer gets out-of-sync at the end of a non-cycling playlist ([#154](https://github.com/benwiley4000/cassette/issues/154))

## [v1.2.1] - 2018-02-14
### Fixed
- Fixed [#144](https://github.com/benwiley4000/cassette/issues/144), where the forward skip button acted like the back skip button.

## [v1.2.0] - 2018-02-03
### Added
- There's a new `controls` array prop, which allows customized selection and ordering of control components.

### Changed
- There was some refactoring of audio controls code (including HTML strucure) to make the `controls` prop implementation possible. While this shouldn't affect you in most cases, your player might look slightly different if you had specified custom margins for the `.audio_controls` CSS class. Apply that custom margin to the `.spacer` class instead (as `width`).

### Deprecated
- The `hideBackSkip`, `hideForwardSkip` and `disableSeek` props are deprecated (replaced by `controls`). Will be removed in v2.0.0.

### Fixed
- Definitively solved issues with time seeking after updates to layout, by just removing the `ResizeObserver` and querying for the box dimensions on every render (turns out this isn't that slow!).

## [v1.1.5] - 2018-01-01
### Added
- Official support for React 16.

## [v1.1.4] - 2017-05-20
### Fixed
- It's no longer possible to select out-of-bounds times by dragging on the progress bar. ([#46](https://github.com/benwiley4000/cassette/issues/46))
- You'll no longer experience seeking bugs if the progress bar resizes, but not the window (we're now tracking the resizing of the element itself). ([#49](https://github.com/benwiley4000/cassette/issues/49))

## [v1.1.3] - 2017-05-14
### Fixed
- Fixes a bug causing drag-to-seek to stop working while the drag takes place outside the bounds of the progress bar. ([#33](https://github.com/benwiley4000/cassette/issues/33))

## [v1.1.2] - 2016-11-28
### Fixed
- Fixing the undefined `audio` references in `componentWillUnmount()` which threw an error upon unmounting the component. ([#26](https://github.com/benwiley4000/cassette/issues/26))
- Cleanup for timeouts in `componentWillUnmount`; these callbacks could be fired after the component had already been unmounted, resulting in a React error. ([#27](https://github.com/benwiley4000/cassette/issues/27))

## [v1.1.1] - 2016-11-28
### Fixes
- The internal `paused` state now syncs with changes made directly to the audio element via `audioElementRef`
- We now unbind internal audio element listeners on component unmount

## [v1.1.0] - 2016-11-20
### Added
- `hideForwardSkip` prop: just like `hideBackSkip` but for the forward skip button. **false** by default.
- `disableSeek` prop: a boolean value that if true prevents seeking. **false** by default.
- `cycle` prop: a boolean value that if true continues playing from the beginning after the playlist has completed. **true** by default. (This was always implicitly true, but now you can turn it off).
- `onMediaEvent` prop: An object whose keys are [media event types](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events) and whose values are callback functions. **undefined** by default.
- `audioElementRef` prop: A callback function called after the component mounts and before it unmounts. Similar to [React ref callback prop](https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute) but its only parameter is the internally-referenced HTML audio element, not the component itself. **undefined** by default. _NOTE:_ This ref should not be used for audio element event listeners; use `onMediaEvent`.
- For usage details re: `onMediaEvent` and `audioElementRef` check out [example.html](https://github.com/benwiley4000/react-responsive-audio-player/commit/a8b35ffe5959880dd9a316115e9e77a171f47215#diff-62ad28cc71ae9a54a611bc2d551533f6).

## [v1.0.0] - 2016-10-28
### Added
- `classnames` is now bundled by webpack, so it's unnecessary for users to install it themselves.
- React `style` prop now supported, passed to outer div in component render method. ([#11](https://github.com/benwiley4000/cassette/issues/11))
- React 15 peer dependency supported along with 0.14. ([#4](https://github.com/benwiley4000/cassette/issues/4))

### Changed
- Change to how `playlist` prop changes are handled. A falsy (`null`) prop can now be accepted and will cause the player to display a message asking the user to load a playlist. Whenever the prop updates, instead of automatically stopping and resetting playback, the player will attempt to continue playing the current track if it exists in the new playlist. The next track in playback will be whatever comes after that track in the new playlist. ([#10](https://github.com/benwiley4000/cassette/issues/10))

### Removed
- The `placeAtTop` prop is removed
- The default fixed position styles have been removed and can be specified either via CSS or via React inline styles, if desired. This makes the component more modular/portable by default. ([#11](https://github.com/benwiley4000/cassette/issues/11))

## [v0.3.0] - 2016-03-19
### Added
- There is now a `gapLengthInSeconds` option which can be specified via a prop. If not provided, there will be no gap. This is only applicable to automatic progression; manually skipping will not trigger a delay.

### Changed
- `document` and `window` listeners are removed and the audio element is dereferenced when the component is unmounted from the DOM.

## [v0.2.0] - 2016-03-16
### Added
- All features - track skipping, time seeking, autoplay, and the rest of the options specified in the README, working.
- Package can be required as a module, or included in a script tag (thereby creating the class `window.AudioPlayer`).

## v0.1.0 - 2016-03-16
### Added
- Initial prerelease.

[Unreleased]: https://github.com/benwiley4000/cassette/compare/v2.0.0-beta.1...HEAD
[v2.0.0-beta.3]: https://github.com/benwiley4000/cassette/compare/v1.5.0...v2.0.0-beta.3
[v1.5.0]: https://github.com/benwiley4000/cassette/compare/v1.4.2...v1.5.0
[v1.4.2]: https://github.com/benwiley4000/cassette/compare/v1.4.0...v1.4.2
[v1.4.0]: https://github.com/benwiley4000/cassette/compare/v1.3.2...v1.4.0
[v1.3.2]: https://github.com/benwiley4000/cassette/compare/v1.3.1...v1.3.2
[v1.3.1]: https://github.com/benwiley4000/cassette/compare/v1.3.0...v1.3.1
[v1.3.0]: https://github.com/benwiley4000/cassette/compare/v1.2.1...v1.3.0
[v1.2.1]: https://github.com/benwiley4000/cassette/compare/v1.2.0...v1.2.1
[v1.2.0]: https://github.com/benwiley4000/cassette/compare/v1.1.5...v1.2.0
[v1.1.5]: https://github.com/benwiley4000/cassette/compare/v1.1.4...v1.1.5
[v1.1.4]: https://github.com/benwiley4000/cassette/compare/v1.1.3...v1.1.4
[v1.1.3]: https://github.com/benwiley4000/cassette/compare/v1.1.2...v1.1.3
[v1.1.2]: https://github.com/benwiley4000/cassette/compare/v1.1.1...v1.1.2
[v1.1.1]: https://github.com/benwiley4000/cassette/compare/v1.1.0...v1.1.1
[v1.1.0]: https://github.com/benwiley4000/cassette/compare/v1.0.0...v1.1.0
[v1.0.0]: https://github.com/benwiley4000/cassette/compare/v0.3.0...v1.0.0
[v0.3.0]: https://github.com/benwiley4000/cassette/compare/v0.2.0...v0.3.0
[v0.2.0]: https://github.com/benwiley4000/cassette/compare/v0.1.0...v0.2.0
