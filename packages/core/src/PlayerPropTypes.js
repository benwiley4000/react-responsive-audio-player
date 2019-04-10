import PropTypes from 'prop-types';

import { repeatStrategyOptions } from './constants';
import { logWarning } from './utils/console';

function requiredOnlyUnlessHasProp(propType, altPropName) {
  let warnedAboutDefiningBoth = false;
  function validate(props, propName, componentName, ...rest) {
    if (propName in props) {
      if (!warnedAboutDefiningBoth && altPropName in props) {
        logWarning(
          `Do not define both the '${propName}' and '${altPropName}' props.`
        );
        warnedAboutDefiningBoth = true;
      }
      return propType.isRequired(props, propName, componentName, ...rest);
    }
    if (!(altPropName in props)) {
      return new Error(
        `If the '${altPropName}' prop is not defined, '${propName}' must be.`
      );
    }
  }
  return validate;
}

export const controlKeyword = PropTypes.oneOf([
  'playpause',
  'backskip',
  'forwardskip',
  'volume',
  'mute',
  'repeat',
  'shuffle',
  'progress',
  'progressdisplay',
  'fullscreen',
  'spacer'
]);

export const control = PropTypes.oneOfType([PropTypes.func, controlKeyword]);

export const crossOriginAttribute = PropTypes.oneOf([
  'anonymous',
  'use-credentials'
]);

export const repeatStrategy = PropTypes.oneOf(repeatStrategyOptions);

export const mediaSource = PropTypes.shape({
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
});

export const mediaSessionAction = PropTypes.oneOf([
  'play',
  'pause',
  'previoustrack',
  'nexttrack',
  'seekbackward',
  'seekforward'
]);

export const mediaSessionArtwork = PropTypes.shape({
  src: PropTypes.string.isRequired,
  sizes: PropTypes.string,
  type: PropTypes.string
});

export const track = PropTypes.shape({
  url: requiredOnlyUnlessHasProp(PropTypes.string, 'sources'),
  sources: requiredOnlyUnlessHasProp(
    PropTypes.arrayOf(mediaSource.isRequired),
    'url'
  ),
  title: PropTypes.string.isRequired,
  artist: PropTypes.string,
  album: PropTypes.string,
  artwork: PropTypes.arrayOf(mediaSessionArtwork.isRequired),
  duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  startingTime: PropTypes.number,
  isUnboundedStream: PropTypes.bool,
  meta: PropTypes.object
});

export const seekMode = PropTypes.oneOf(['paused', 'immediate', 'onrelease']);
