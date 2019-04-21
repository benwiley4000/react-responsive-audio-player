import { PlayerContextGroup } from '@cassette/core';
import GroupContext from '@cassette/core/src/GroupContext';

import contextProviderEmitter from './contextProviderEmitter';

export default contextProviderEmitter(
  'playerContextGroup',
  PlayerContextGroup,
  GroupContext.Consumer
);
