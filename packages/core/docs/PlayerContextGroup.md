```jsx
import { PlayerContextGroup } from '@cassette/core';
import { MediaPlayer } from '@cassette/player';

const playlistA = [
  {
    url:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    title: 'Elephants Dream',
    artist: 'Orange Open Movie Project'
  }
];
const playlistB = [
  {
    url:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    title: 'Big Buck Bunny',
    artist: 'Peach Open Movie Project'
  }
];

// can't play audio from more than one piece of media at a time
<div style={{ display: 'flex' }}>
  <PlayerContextGroup>
    <MediaPlayer
      playlist={playlistA}
      controls={['spacer', 'playpause', 'mute', 'spacer']}
      showVideo
    />
    <span style={{ width: 30 }} />
    <MediaPlayer
      playlist={playlistB}
      controls={['spacer', 'playpause', 'mute', 'spacer']}
      showVideo
    />
  </PlayerContextGroup>
</div>;
```

Although not required, `PlayerContextGroup` can accept any of the props for `PlayerContextProvider`, which will be passed as defaults to any descendant `PlayerContextProvider` instances.

```jsx
import { PlayerContextGroup } from '@cassette/core';
import { MediaPlayer } from '@cassette/player';

const playlistA = [
  {
    url:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    title: 'Elephants Dream',
    artist: 'Orange Open Movie Project'
  }
];
const playlistB = [
  {
    url:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    title: 'Big Buck Bunny',
    artist: 'Peach Open Movie Project'
  }
];

// can't play audio from more than one piece of media at a time,
// *however* note in this case we autoplay both videos muted so they can
// play simultaneously just fine (until you unmute both of them)
<div style={{ display: 'flex' }}>
  <PlayerContextGroup autoplay defaultMuted>
    <MediaPlayer
      playlist={playlistA}
      controls={['spacer', 'playpause', 'mute', 'spacer']}
      showVideo
    />
    <span style={{ width: 30 }} />
    <MediaPlayer
      playlist={playlistB}
      controls={['spacer', 'playpause', 'mute', 'spacer']}
      showVideo
    />
  </PlayerContextGroup>
</div>;
```

Additionally, for advanced use cases, `PlayerContextGroup` instances can be nested inside one another. If a prop is passed to a descendant `PlayerContextGroup`, it will override the default value from the ancestor.
