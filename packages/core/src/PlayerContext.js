import createSingleGlobalContext from './utils/createSingleGlobalContext';

// TODO: test to make sure context contents stay in sync with
// enumerated list here

export default createSingleGlobalContext({
  displayName: 'PlayerContext',
  keysWillUpdate: [
    'playlist',
    'activeTrackIndex',
    'trackLoading',
    'paused',
    'currentTime',
    'seekPreviewTime',
    'seekInProgress',
    'awaitingResumeOnSeekComplete',
    'duration',
    'bufferedRanges',
    'playedRanges',
    'seekableRanges',
    'volume',
    'muted',
    'shuffle',
    'stalled',
    'playbackRate',
    'setVolumeInProgress',
    'repeatStrategy'
  ]
});
