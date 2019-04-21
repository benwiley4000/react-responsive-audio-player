This is the recommended way to consume context.

```jsx static
class MyControl extends React.Component {
  render() {
    const { playlist, activeTrackIndex, fullscreen } = this.props;
    // ...
  }
}

export default playerContextFilter(MyControl, [
  'playlist',
  'activeTrackIndex',
  'fullscreen'
]);

// and to call it...

<PlayerContextProvider {...providerProps}>
  {/* automatically consumes the props specified in the source file */}
  <MyControl />
</PlayerContextProvider>;
```
