```jsx
import { PlayerContextConsumer } from '@cassette/core';

<PlayerContextConsumer filterList={['currentTime', 'paused', 'onTogglePause']}>
  {({ currentTime, paused, onTogglePause }) => (
    <React.Fragment>
      <div>
        The track is {paused ? 'paused' : 'playing'}. The time is {currentTime}.
      </div>
      <button onClick={onTogglePause}>Toggle pause!</button>
    </React.Fragment>
  )}
</PlayerContextConsumer>;
```
