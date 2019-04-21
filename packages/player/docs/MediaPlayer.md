`MediaPlayer` takes all the non-`children` props (including prop requirements) of [`MediaPlayer`](#mediaplayer), [`PlayerContextProvider`](#playercontextprovider) and [`FullscreenContextProvider`](#fullscreencontextprovider).

```jsx
// helper code for docs; feel free to ignore!
import { VideoDisplay } from '@cassette/components';
window.enhanceVideoDisplayForDocs(VideoDisplay);

import { MediaPlayer } from '@cassette/player';

const playlist = [
  {
    url:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    title: 'Elephants Dream',
    artist: 'Orange Open Movie Project'
  }
];
<MediaPlayer
  playlist={playlist}
  controls={['spacer', 'playpause', 'mute', 'spacer', 'progress']}
  defaultRepeatStrategy="none"
  showVideo
/>;
```
