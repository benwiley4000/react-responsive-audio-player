import { PlayerContextProvider } from '@cassette/core';
import PlayerContext from '@cassette/core/src/PlayerContext';

import contextProviderEmitter from './contextProviderEmitter';

export default contextProviderEmitter(
  'playerContext',
  PlayerContextProvider,
  PlayerContext.Consumer
);
