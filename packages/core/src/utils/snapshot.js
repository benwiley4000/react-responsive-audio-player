import isPlaylistValid from './isPlaylistValid';
import getTrackSources from './getTrackSources';
import findTrackIndexByUrl from './findTrackIndexByUrl';

export function getStateSnapshot(state) {
  const {
    paused,
    currentTime,
    activeTrackIndex,
    volume,
    muted,
    loop,
    cycle,
    shuffle,
    playbackRate,
    __playlist__
  } = state;
  return {
    __unstable__: {
      paused,
      currentTime,
      activeTrackIndex,
      volume,
      muted,
      loop,
      cycle,
      shuffle,
      playbackRate,
      activeTrackSrc: isPlaylistValid(__playlist__)
        ? getTrackSources(__playlist__, activeTrackIndex)[0].src
        : null
    }
  };
}

export function restoreStateFromSnapshot(snapshot, props) {
  const {
    paused,
    currentTime,
    activeTrackIndex,
    volume,
    muted,
    loop,
    cycle,
    shuffle,
    playbackRate,
    activeTrackSrc
  } = snapshot.__unstable__;
  const restoredStateValues = {};
  if (isPlaylistValid(props.playlist) && typeof paused === 'boolean') {
    // using awaitingPlay instead of paused triggers an animation
    restoredStateValues.awaitingPlay = !paused;
  }
  if (typeof volume === 'number' && volume >= 0 && volume <= 1) {
    restoredStateValues.volume = volume;
  }
  if (typeof muted === 'boolean') {
    restoredStateValues.muted = muted;
  }
  if (typeof loop === 'boolean') {
    restoredStateValues.loop = loop;
  }
  if (typeof cycle === 'boolean') {
    restoredStateValues.cycle = cycle;
  }
  if (typeof shuffle === 'boolean') {
    restoredStateValues.shuffle = shuffle;
  }
  if (typeof playbackRate === 'number') {
    restoredStateValues.playbackRate = playbackRate;
  }
  let useCurrentTime = false;
  if (
    typeof activeTrackSrc === 'string' &&
    typeof activeTrackIndex === 'number' &&
    activeTrackIndex >= 0
  ) {
    // let's try staying on the same track index
    const currentSrc =
      props.playlist[activeTrackIndex] &&
      getTrackSources(props.playlist, activeTrackIndex)[0].src;
    if (currentSrc && activeTrackSrc === currentSrc) {
      restoredStateValues.activeTrackIndex = activeTrackIndex;
      useCurrentTime = true;
    } else {
      /* if the track we were playing before is in the new playlist,
       * update the activeTrackIndex.
       */
      const newTrackIndex = findTrackIndexByUrl(props.playlist, activeTrackSrc);
      if (newTrackIndex !== -1) {
        restoredStateValues.activeTrackIndex = newTrackIndex;
        useCurrentTime = true;
      }
    }
  }
  if (useCurrentTime && typeof currentTime === 'number' && currentTime >= 0) {
    restoredStateValues.currentTime = currentTime;
  }
  return restoredStateValues;
}
