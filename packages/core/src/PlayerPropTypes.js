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
  'captions',
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
  textTracks: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      // we will default to 'subtitles' to avoid forcing the
      // user to spend time up-front learning the difference
      // between captions and subtitles
      kind: PropTypes.oneOf([
        'subtitles',
        'captions',
        'descriptions',
        'chapters',
        'metadata'
      ])
    }).isRequired
  ),
  startingTime: PropTypes.number,
  isUnboundedStream: PropTypes.bool,
  meta: PropTypes.object
});

export const progressDirection = PropTypes.oneOf([
  'left',
  'right',
  'up',
  'down'
]);

export const seekMode = PropTypes.oneOf(['paused', 'immediate', 'onrelease']);

export function aspectRatio(props, propName) {
  const prop = props[propName];
  if (prop === undefined) {
    return;
  }
  if (
    typeof prop !== 'string' ||
    prop.split(':').length !== 2 ||
    prop.split(':').some(isNaN)
  ) {
    return new Error(
      `The ${propName} prop should be a string of the form 'x:y'. Example: 16:9`
    );
  }
}
