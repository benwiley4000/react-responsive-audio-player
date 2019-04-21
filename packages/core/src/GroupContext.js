import createSingleGlobalContext from './utils/createSingleGlobalContext';

export default createSingleGlobalContext({
  displayName: 'GroupContext',
  keysWillUpdate: ['groupProps']
});
