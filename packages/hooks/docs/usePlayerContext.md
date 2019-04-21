```jsx
import { usePlayerContext } from '@cassette/hooks';

function PlayerContextUser() {
  const { currentTime, paused, onTogglePause } = usePlayerContext([
    'currentTime',
    'paused',
    'onTogglePause'
  ]);

  return (
    <React.Fragment>
      <div>
        The track is {paused ? 'paused' : 'playing'}. The time is {currentTime}.
      </div>
      <button onClick={onTogglePause}>Toggle pause!</button>
    </React.Fragment>
  );
}

<PlayerContextUser />
```

The array of used context items is required. Only listed items can be used.

```js static
const { paused, onTogglePause } = usePlayerContext(['paused']);
onTogglePause(); // will throw error
```
