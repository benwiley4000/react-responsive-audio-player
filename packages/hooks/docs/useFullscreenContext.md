```jsx
import { FullscreenContextProvider } from '@cassette/core';
import { useFullscreenContext } from '@cassette/hooks';

function FullscreenContent() {
  const {
    fullscreen,
    requestFullscreen,
    requestExitFullscreen
  } = useFullscreenContext();

  return (
    <button onClick={fullscreen ? requestExitFullscreen : requestFullscreen}>
      {fullscreen ? 'Click to exit fullscreen' : 'Click to enter fullscreen'}
    </button>
  );
}

<FullscreenContextProvider>
  <FullscreenContent />
</FullscreenContextProvider>
```
