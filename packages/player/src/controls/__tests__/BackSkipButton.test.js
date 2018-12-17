import React from 'react';
import renderer from 'react-test-renderer';

import PlayerContext from '@cassette/core/src/PlayerContext';

import BackSkipButton from '../BackSkipButton';

const mockPlayerContext = {
  onBackSkip: () => null
};

test('Back skip button renders correctly', () => {
  const tree = renderer
    .create(
      <PlayerContext.Provider value={mockPlayerContext}>
        <BackSkipButton />
      </PlayerContext.Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
