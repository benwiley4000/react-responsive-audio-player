import { createElement } from 'react';

import PlayPauseButton from '../controls/PlayPauseButton';
import BackSkipButton from '../controls/BackSkipButton';
import ForwardSkipButton from '../controls/ForwardSkipButton';
import VolumeControl from '../controls/VolumeControl';
import MuteButton from '../controls/MuteButton';
import RepeatButton from '../controls/RepeatButton';
import ShuffleButton from '../controls/ShuffleButton';
import CaptionsSelector from '../controls/CaptionsSelector';
import MediaProgress from '../controls/MediaProgress';
import MediaProgressDisplay from '../controls/MediaProgressDisplay';
import FullscreenButton from '../controls/FullscreenButton';
import Spacer from '../controls/Spacer';

const controlComponents = {
  playpause: PlayPauseButton,
  backskip: BackSkipButton,
  forwardskip: ForwardSkipButton,
  volume: VolumeControl,
  mute: MuteButton,
  repeat: RepeatButton,
  shuffle: ShuffleButton,
  captions: CaptionsSelector,
  progress: MediaProgress,
  progressdisplay: MediaProgressDisplay,
  fullscreen: FullscreenButton,
  spacer: Spacer
};

function getRenderPropForControlKey(controlKey) {
  const component = controlComponents[controlKey];
  if (!component) {
    return null;
  }
  switch (controlKey) {
    case 'progress':
    case 'progressdisplay':
      return (playerContext, fullscreenContext, { getDisplayText }) => {
        return createElement(component, { getDisplayText });
      };
    default:
      return () => createElement(component);
  }
}

const cache = {};
function getControlRenderProp(control) {
  if (typeof control === 'function') {
    return control;
  }
  if (typeof control === 'string') {
    if (cache[control]) {
      return cache[control];
    }
    const fn = getRenderPropForControlKey(control);
    cache[control] = fn;
    return fn;
  }
  return null;
}

export default getControlRenderProp;
