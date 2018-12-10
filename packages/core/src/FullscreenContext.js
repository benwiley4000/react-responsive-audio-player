import createSingleGlobalContext from './utils/createSingleGlobalContext';
import { logWarning } from './utils/console';

export default createSingleGlobalContext('FullscreenContext', {
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
});
