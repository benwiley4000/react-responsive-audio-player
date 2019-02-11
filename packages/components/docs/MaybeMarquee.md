```jsx
import { MaybeMarquee } from '@cassette/components';

<MaybeMarquee
  content="Some text that isn't too long."
  style={{ width: 220, border: '1px solid black' }}
/>
```
```jsx
<MaybeMarquee
  content="Some text that is a bit longer and will scroll."
  style={{ width: 220, border: '1px solid black' }}
/>
```
```jsx
<MaybeMarquee
  content="This text is going to scroll by slooowly."
  pixelsPerSecond={10}
  style={{ width: 220, border: '1px solid black' }}
/>
```
```jsx
<MaybeMarquee
  content="This text is scrolling by backwards."
  scrollDirection="right"
  style={{ width: 220, border: '1px solid black' }}
/>
```
