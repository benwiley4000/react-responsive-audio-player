# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0-beta.0] - 2019-04-10
- Details coming soon

<!--
## [] - 2019-04-10
Changelog forthcoming!

Script and CSS files included below... that's a lot of files! (Maybe we need a better way to organize them..)
## [] - 2019-04-10
Very minor final breaking change before beta. The PlayerPropTypes export no longer has types exposed for `aspectRatio` or `progressDirection` which I highly doubt anyway was using anyway, bust just in case...
## [] - 2019-04-09
## Fixes

* In v2.0.0-alpha.29 we introduced a bug where attempting to adjust the volume would just move the volume to one extreme. This would also have affected any other use of the `ProgressBar` component where the progress bar moved or resized on the page. This was all due to a mistake in a performance refactor for the progress bar, where we stopped correctly monitoring changes to the progress bar's bounding box. Since the volume bar first renders hidden, it had a 0x0 bounding box, and never updated.


## [] - 2019-04-08
One of the last pre-beta releases!

## Breaking changes

`PlayerContextProvider` takes a few event callbacks.. `onActiveTrackUpdate`, `onTimeUpdate` and `onTrackPlaybackFailure`. In order to preempt future problems where we want to add more function arguments and the call signatures get unwieldy, we're going to convert these all to single-argument hashes while we're still allowed to make breaking changes.

### *Before*
* `onActiveTrackUpdate(track, trackIndex)`
* `onTimeUpdate(currentTime, track, trackIndex)`
* `onTrackPlaybackFailure(track, trackIndex, event)`

### *Now*
* `onActiveTrackUpdate({ track, trackIndex })`
* `onTimeUpdate({ currentTime, track, trackIndex })`
* `onTrackPlaybackFailure({ track, trackIndex, event })`

## New features

One motivation for the change above was wanting to minimize confusion while supporting `previousTrack` and `previousTrackIndex` arguments for `onActiveTrackUpdate`. So now you can have:

#### `onActiveTrackUpdate({ track, trackIndex, previousTrack, previousTrackIndex })`

## [] - 2019-02-27
## Features
* The `MediaPlayer` controls are now completely navigable/controllable by keyboard, the first of several accessibility features tracked in issue [#261](https://github.com/benwiley4000/cassette/issues/261). ([#396](https://github.com/benwiley4000/cassette/issues/396))

## Improvements
* Better formatting for timestamps (particularly timestamps over 1 hour) ([#397](https://github.com/benwiley4000/cassette/issues/397))
* More flexible media status bar layout that never wraps the timestamp ([#398](https://github.com/benwiley4000/cassette/issues/398))

## Fixes
* Respect track `duration` property during initial load (was only respected when tracks are changing before) ([#392](https://github.com/benwiley4000/cassette/issues/392))
* Don't jump back to `currentTime: 0` while loading a track at a timestamp other than 0 ([#392](https://github.com/benwiley4000/cassette/issues/392))
## [] - 2019-02-20
## Breaking changes
* The filenames for the @cassette/hooks package were being output as `cassette-core` before - it's now `cassette-hooks` as intended. If you were using the package with the wrong filename already, that will be a breaking change for you. ([#389](https://github.com/benwiley4000/cassette/issues/389))
* The `ProgressBar` prop `onAdjustComplete` now receives the progress value at the time adjusting completes, which might break something if you were passing the `onSeekComplete` context value directly (that function expects a timestamp, not a 0-1 progress value) ([#386](https://github.com/benwiley4000/cassette/issues/386))

## Fixes
* Some significant seek performance improvements for the `ProgressBar` and all components which consume it (`MediaProgress`, `MediaProgressBar`, `VolumeControl`). Previously we performed layout computations up front and updated all consumers of the `progress` state on the page at once via Context. This made clicking and dragging on the progress bar show noticeable lag. Now we pre-cache the needed style computation and re-render the active progress bar before anything else on the page, better ensuring a responsive interaction. ([#386](https://github.com/benwiley4000/cassette/issues/386))
* Before we would collect an excess buildup of `requestAnimationFrame` callbacks while Cassette was running in a background tab - particularly the Cassette docs page. This could cause the page to be totally unresponsive when re-focusing the tab. That issue should now be gone. ([#387](https://github.com/benwiley4000/cassette/issues/387))
## [] - 2019-02-18
Fixes the React prop type spec for the playlist track's `duration` property (your code will work the same if you stick with v2.0.0-alpha.27 but you will get less helpful console messages). ([#382](https://github.com/benwiley4000/cassette/issues/382))
## [] - 2019-02-18
This release contains a bunch of stuff, almost all related to time and duration.

There are breaking changes, although the majority of users will likely be unaffected.

## Breaking changes
* The `startingTime` prop, which was new for the v2 alpha, has been removed and replaced by the optional `startingTime` property on the playlist track object ([#369](https://github.com/benwiley4000/cassette/issues/369))
* The new `isUnboundedStream` track property should be set to `true` for any track that is an unbounded live stream. Otherwise loading the source will take twice as long as before (nothing will break, though). Typical time-bound sources are unaffected. ([#373](https://github.com/benwiley4000/cassette/issues/373))
* If you were reading the internals of the Cassette state snapshot in your program, your program will break. If you were using the snapshot in a normal way, nothing will break. If this does break your program and you don't know what to do, please [open an issue](https://github.com/benwiley4000/cassette/issues/new) so we can find a good solution for your use case! :slightly_smiling_face: 

## Changes that almost definitely won't break anything
* `currentTime` state set on media element after `loadeddata` event instead of `loadedmetadata` event, and `trackLoading` now remains `true` until the `canplay` event has fired ([#370](https://github.com/benwiley4000/cassette/issues/370))
* The context `duration` property is now always a number even if a live stream is playing ([#377](https://github.com/benwiley4000/cassette/issues/377))
* `currentTime` from snapshot no longer respected for live streams ([#378](https://github.com/benwiley4000/cassette/issues/378))

## Features
* New `duration` playlist track property (which can be specified as a number in milliseconds, or a `mm:ss`/`hh:mm:ss` formatted string) is used as a stand-in until the track's metadata has loaded. Specifying this will make track loads feel snappier. ([#372](https://github.com/benwiley4000/cassette/issues/372))
* The `startingTime` playlist track property can be used to restore previous timestamps of tracks that were skipped before being finished. It is the developer's responsibility to store and retrieve the timestamp as well as update it in the playlist at runtime if needed, as the track will begin at its defined `startingTime` each time it is played. For most applications this is not needed. ([#369](https://github.com/benwiley4000/cassette/issues/369))
* The `onTimeUpdate` prop to `PlayerContextProvider` can be used to save track timestamps to be used for the `startingTime` property ([#369](https://github.com/benwiley4000/cassette/issues/369))
* New `durationOverride` prop is optional for `MediaProgress`, `MediaProgressDisplay`, `MediaProgressBar` and `MediaProgressBarDisplay`. Not needed for most cases but may be desirable for a live stream in order to display the maximum seekable range even while the playing/buffering section is offset in the past. ([#379](https://github.com/benwiley4000/cassette/issues/379))

## Fixes
* Prevent `crossOrigin` issues in Microsoft Edge ([#368](https://github.com/benwiley4000/cassette/issues/368))
* `currentTime` gets set correctly on iOS ([#370](https://github.com/benwiley4000/cassette/issues/370))
* Prevent bad display and seeking issues for unbounded live streams by using the maximum visited timestamp as the duration ([#377](https://github.com/benwiley4000/cassette/issues/377))
* No more unresponsive hangs when restoring a non-zero `currentTime` from snapshot for a live stream source - the time will be reset to 0 (and new snapshots won't save the currentTime for live stream sources) ([#378](https://github.com/benwiley4000/cassette/issues/378))
* Prevent `Infinity` track duration for non-live stream sources on iOS ([#373](https://github.com/benwiley4000/cassette/issues/373))
## [] - 2019-02-11
v2.0.0-alpha.25 of `@cassette/hooks` was unpublished and replaced with v2.0.0-alpha.26 - the build configuration was screwed up the first time it was published.
## [] - 2019-02-11
## New features
* React Hooks (if that's your thing).. new `useFullscreenContext` and `usePlayerContext` exports from the `@cassette/hooks` package.

## Deprecated usage
* `PlayerContextConsumer`'s usage does not break, but you will now receive a warning if you do not pass the new `filterList` prop listing which items from the `playerContext` are being consumed.
## [] - 2019-02-11
The breaking changes are minor and most likely non-disruptive, although it's possible you will be affected if you were doing something weird with the `paused` state.

## Breaking changes
* The `paused` state in `playerContext` will now be `true` between the time a track load begins and the time the track starts playing. Previously it was `false` during this time
* The `awaitingResumeOnSeekComplete` context state has been removed and replaced by `awaitingPlayResume`, which is true either if seeking is in progress or if the track play is pending a track load. The `PlayPauseButton` uses this internally so the visual behavior has not changed (except in Firefox, where there was a bug before). ([#360](https://github.com/benwiley4000/cassette/issues/360))

## Features
* New `getDisplayText` prop for `MediaProgress` and `MediaProgressDisplay` ([#358](https://github.com/benwiley4000/cassette/issues/358))
* New `mediaCannotPlay` state in `playerContext` is `true` if a load error occurred for the current track. `onTrackPlaybackFailure` callback prop to `PlayerContextProvider` allows listening for track load errors. ([#356](https://github.com/benwiley4000/cassette/issues/356))
* New subscription optimization for `playerContext` ([#350](https://github.com/benwiley4000/cassette/issues/350))

## Fixes
* The media status bar for `MediaPlayer` now reflects the `getDisplayText` prop instead of the default implementation. ([#358](https://github.com/benwiley4000/cassette/issues/358))
## [] - 2019-01-30
This version allows specifying a custom media element implementation via the `createMediaElement` function prop (https://github.com/benwiley4000/cassette/pull/349).
## [] - 2019-01-23
New prop on `PlayerContextProvider` - `getMediaTitleAttributeForTrack`. This function prop allows you to set a custom `title` attribute on the media element which is used in the system media controls on iOS. If you don't specify, the value will be `artist - trackname`.
## [] - 2019-01-15
Two new exports from `@cassette/components`: `MediaProgressBar` and its non-interactive counterpart `MediaProgressBarDisplay`.
## [] - 2019-01-14
New feature: `trackIndex` prop to `PlayPauseButton` from `@cassette/player` makes the button belong to a specific track instead of the playlist in general.
## [] - 2019-01-05
Some more miscellaneous bug fixes (to be detailed in the upcoming changelog)
## [] - 2018-12-11
Fixes issue where a snapshot reload will error out if saved `activeTrackIndex` is greater than the length of the new playlist.
## [] - 2018-12-10
This is the first (and hopefully only) alpha release with major breaking changes. But the good news is that unless you were doing something fancy with a `VideoDisplay` instance, you probably won't be affected.

The other good news is that video performance is now much better!

## Breaking changes ([#316](https://github.com/benwiley4000/cassette/issues/316))
* You used to be able to render a bunch of simultaneous `VideoDisplay` instances under the same `PlayerContextProvider`. You can still render a bunch of `VideoDisplay` instances, but now only one of them can display video at a time.
    - This is because we used to be drawing the video onto a bunch of canvas elements to display, and now we're just passing around the video element itself, and it can only be in one place at a time. The motivating reason is performance on less powerful devices, and the fact displaying multiple simultaneous views of the same media is an extremely niche use case.
* Control of resolution, still images, frame processing, etc has been removed from `VideoDisplay` as this isn't relevant when using the video tag. Hopefully no one was relying on this - seems doubtful.

## Features
* `onActiveTrackUpdate` prop to `PlayerContextProvider` / `MediaPlayer` ([#317](https://github.com/benwiley4000/cassette/issues/317))
* `onSetVolumeComplete` can now take a volume argument. (7ec89f6)

## Fixes
* Fixed some progress bar related issues ([#312](https://github.com/benwiley4000/cassette/issues/312)).
* Upgraded Styleguidist to patch a security vulnerability in webpack dev server (not a runtime issue) (4acb284)
## [] - 2018-11-19

## [] - 2018-10-05

## [] - 2018-10-04
Don't try installing this one.. it won't work! 😄 

-->

## [v1.5.0] - 2018-09-30
### Deprecated
- The `style` prop to `AudioPlayer` is now deprecated. Use styles on a container element, or CSS, instead.

### Fixed
- Fixes a bug where selection on the document would remain disabled if the `AudioPlayer` were to unmount during a seek.

## [v1.4.2] - 2018-09-30
### Deprecated
- Deprecates the practice of mutating playlists passed to the `AudioPlayer` component. Playlists should be shallow copied if they need to be modified. Mutated playlists will no longer trigger re-renders in v2.0.0.

## [v1.4.1] - 2018-09-30
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

[Unreleased]: https://github.com/benwiley4000/cassette/compare/v2.0.0-beta.0...HEAD
[v2.0.0-beta.0]: https://github.com/benwiley4000/cassette/compare/v1.5.0...v2.0.0-beta.0
[v1.5.0]: https://github.com/benwiley4000/cassette/compare/v1.4.2...v1.5.0
[v1.4.2]: https://github.com/benwiley4000/cassette/compare/v1.4.1...v1.4.2
[v1.4.1]: https://github.com/benwiley4000/cassette/compare/v1.4.0...v1.4.1
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
