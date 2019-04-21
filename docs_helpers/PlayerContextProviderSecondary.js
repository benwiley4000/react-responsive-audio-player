import PlayerContext from '@cassette/core/src/PlayerContext';

import contextProviderSubscriber from './contextProviderSubscriber';

export default contextProviderSubscriber(
  'playerContext',
  PlayerContext.Provider
);
