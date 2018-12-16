import React from 'react';
import BackSkipButton from '../BackSkipButton';
import renderer from 'react-test-renderer';

test('Control renders correctly', () => {
  const tree = renderer
    .create(<BackSkipButton onBackSkip={() => null} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
