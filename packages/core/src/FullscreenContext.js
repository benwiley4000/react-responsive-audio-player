import createSingleGlobalContext from './utils/createSingleGlobalContext';
import { logWarning } from './utils/console';

export default createSingleGlobalContext({
  displayName: 'FullscreenContext',
  defaultValue: {
    fullscreen: false,
    requestFullscreen() {
      logWarning(
        'Fullscreen request ignored since there is no ' +
          'FullscreenContextProvider ancestor.'
      );
    },
    requestExitFullscreen() {
      logWarning(
        'Exit fullscreen request ignored since there is no ' +
          'FullscreenContextProvider ancestor.'
      );
    }
  },
  keysWillUpdate: ['fullscreen']
});
