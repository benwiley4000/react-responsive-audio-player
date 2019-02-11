Should have an ancestor [`FullscreenContextProvider`](#fullscreencontextprovider):

```jsx
import { FullscreenContextProvider } from '@cassette/core';
import { FullscreenButton } from '@cassette/player';

<FullscreenContextProvider>
  <div
    style={{
      background: '#333',
      borderRadius: 3,
      color: '#fff',
      display: 'flex',
      alignItems: 'center'
    }}
  >
    <div style={{ flexGrow: 1, paddingLeft: '1rem' }}>
      Here is some content that is fullscreenable
    </div>
    <FullscreenButton />
  </div>
</FullscreenContextProvider>;
```

Has no effect if not wrapped by context:

```jsx
import { FullscreenButton } from '@cassette/player';
<div
  style={{
    background: '#333',
    borderRadius: 3,
    color: '#fff',
    display: 'flex',
    alignItems: 'center'
  }}
>
  <div style={{ flexGrow: 1, paddingLeft: '1rem' }}>
    Here is some content that is NOT fullscreenable
  </div>
  <FullscreenButton />
</div>;
```
