import GroupContext from '@cassette/core/src/GroupContext';

import contextProviderSubscriber from './contextProviderSubscriber';

export default contextProviderSubscriber(
  'playerContextGroup',
  GroupContext.Provider
);
