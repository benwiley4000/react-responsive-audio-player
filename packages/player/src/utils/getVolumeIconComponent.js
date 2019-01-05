import VolumeOffIcon from 'svg-react-loader?name=RepeatIcon!material-design-icons/av/svg/design/ic_volume_off_48px.svg?';
import VolumeMuteIcon from 'svg-react-loader?name=RepeatIcon!material-design-icons/av/svg/design/ic_volume_mute_48px.svg?';
import VolumeDownIcon from 'svg-react-loader?name=RepeatIcon!material-design-icons/av/svg/design/ic_volume_down_48px.svg?';
import VolumeUpIcon from 'svg-react-loader?name=RepeatIcon!material-design-icons/av/svg/design/ic_volume_up_48px.svg?';

function getVolumeIconComponent(volume, muted) {
  if (muted) {
    return VolumeOffIcon;
  }
  if (volume === 0) {
    return VolumeMuteIcon;
  }
  if (volume <= 1 / 2) {
    return VolumeDownIcon;
  }
  return VolumeUpIcon;
}

export default getVolumeIconComponent;
