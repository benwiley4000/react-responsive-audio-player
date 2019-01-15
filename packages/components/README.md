# @cassette/components

**`@cassette/components`** contains some convenient React component building blocks which can be used in media player user interfaces created with [`@cassette/core`](/packages/core).

### Installation

```console
npm install @cassette/components @cassette/core
```

#### Components included:

- `MaybeMarquee` - used to make content scroll in marquee fashion, only when the container area is too small for all the content to be displayed at once
- `ProgressBar` - a vertical or horizontal progress bar element which can be manipulated by mouse or touch
- `ProgressBarDisplay` - a non-interactive version of `ProgressBar`
- `MediaProgressBar` - a `ProgressBar` connected to the media playback of the surrounding `playerContext`
- `MediaProgressBarDisplay` - a non-interactive version of `MediaProgressBar`
- `VideoDisplay` - a display canvas for the video content from the surrounding `playerContext`

### Find full documentation [here](https://benwiley4000.github.io/cassette/styleguide/#cassettecomponents)!
