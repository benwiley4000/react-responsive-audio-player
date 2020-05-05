import isPlaylistValid from './isPlaylistValid';
import getTrackSources from './getTrackSources';
import findTrackIndexByUrl from './findTrackIndexByUrl';

const veryLongKey =
  '__highly_unstable_snapshot_internals_which_will_break_your_app_if_you_use_them_directly__';
const versionKey = '__cassette_snapshot_version__';

// IMPORTANT: new migrations *must* always be added to the end since
// the tracked snapshot version is based on the migration index.
// If there is a crash-inducing bug in an existing migration, it can be patched
// in-place, but it should never be removed from the migrations array.
const migrations = [
  oldSnapshot => {
    const { __unstable__, ...rest } = oldSnapshot;
    return {
      ...rest,
      [veryLongKey]: __unstable__
    };
  }
];

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
    duration,
    __playlist__
  } = state;
  return {
    [versionKey]: migrations.length,
    [veryLongKey]: {
      paused,
      // currentTime can't be restored for unbounded live streams
      currentTime: duration === Infinity ? 0 : currentTime,
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
  const migratedSnapshot = migrations
    .slice(snapshot[versionKey] || 0)
    .reduce((oldSnapshot, migration) => migration(oldSnapshot), snapshot);
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
  } = migratedSnapshot[veryLongKey];
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
    if (
      currentSrc &&
      props.areTrackSourceUrlsEqual(activeTrackSrc, currentSrc)
    ) {
      restoredStateValues.activeTrackIndex = activeTrackIndex;
      useCurrentTime = true;
    } else {
      /* if the track we were playing before is in the new playlist,
       * update the activeTrackIndex.
       */
      const newTrackIndex = findTrackIndexByUrl(
        props.playlist,
        activeTrackSrc,
        props.areTrackSourceUrlsEqual
      );
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
