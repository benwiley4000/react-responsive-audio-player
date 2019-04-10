We don't expose any special props for manipulating the Web Audio API with React.

However, you _can_ use the `mediaElementRef` prop and [`createMediaElementSource`](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaElementSource) to process your media before it gets sent to the speaker.

For example, you could use this code to add a low pass to high pass filter transition during the first 10 seconds your media player is mounted:

```jsx static
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
