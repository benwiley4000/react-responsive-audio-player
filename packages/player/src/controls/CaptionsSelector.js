import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CaptionsIcon from 'svg-react-loader?name=CaptionsIcon!material-design-icons/av/svg/design/ic_closed_caption_48px.svg?';

import { playerContextFilter, PlayerPropTypes } from '@cassette/core';

import ButtonWrapper from './common/ButtonWrapper';
import classNames from '../utils/classNames';
import stopPropagation from '../utils/reactStopPropagation';

const hiddenMenuStyle = { display: 'none' };

function getFilteredTextTracks(textTracks) {
  return textTracks.filter(textTrack => {
    return textTrack.kind === 'subtitles' || textTrack.kind === 'captions';
  });
}

function CaptionsMenuItem({ language, label, active, onClick }) {
  return (
    <div className="cassette__captions_selector__menu_item_container">
      <button
        type="button"
        className={classNames('cassette__captions_selector__menu_item', {
          active
        })}
        onClick={onClick}
      >
        {language ? `${language} - ${label}` : '(none)'}
      </button>
    </div>
  );
}

CaptionsMenuItem.propTypes = {
  language: PropTypes.string,
  label: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

/**
 * A button with different behavior depending on the number of available captions/subtitles text tracks. If none is available, the button is disabled. If one is available, clicking the button toggles the visibility of that text track. If multiple are available, clicking the button opens a subtitles/captions selection menu.
 */
export class CaptionsSelector extends PureComponent {
  constructor(props) {
    super(props);

    const state = {
      menuOpen: false,
      // null | 'hidden' | 'above' | 'below'
      menuPosition: null
    };

    this.state = {
      ...state,
      ...this.constructor.getDerivedStateFromProps(props, state)
    };

    this.controlRef = null;
    this.menuRef = null;

    // bind methods fired on React events
    this.setControlRef = this.setControlRef.bind(this);
    this.setMenuRef = this.setMenuRef.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);

    // bind methods bound on lifecycle hooks
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { activeTextTracks, playlist, activeTrackIndex } = props;
    return {
      activeCaptionsAndSubtitles: getFilteredTextTracks(activeTextTracks),
      availableCaptionsAndSubtitles: getFilteredTextTracks(
        (playlist[activeTrackIndex] || {}).textTracks || []
      ),
      menuPosition: state.menuOpen ? state.menuPosition : null
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick);
  }

  componentDidUpdate() {
    /* if we've applied a hidden class to our menu, it's because
     * we need to measure the element dimensions in order to figure out
     * where and in which direction to position it. if there isn't enough
     * vertical space above the control button, then if there's room we'll
     * place it below.
     * granted - it's certainly not ideal to need to check dom dimensions
     * before placing an element, but a user could have applied unanticipated
     * styles we won't know about unless we check.
     */
    const { menuPosition } = this.state;
    if (menuPosition === 'hidden') {
      const controlRect = this.controlRef.getBoundingClientRect();
      const top = controlRect.top;
      const menuHeight = this.menuRef.offsetHeight;
      let newPosition;
      if (menuHeight <= top) {
        newPosition = 'above';
      } else {
        const viewportHeight = document.documentElement.clientHeight;
        const bottom = viewportHeight - controlRect.bottom;
        newPosition = menuHeight <= bottom ? 'below' : null;
      }
      this.setState({
        menuPosition: newPosition
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  setControlRef(ref) {
    this.controlRef = ref;
  }

  setMenuRef(ref) {
    this.menuRef = ref;
  }

  handleOutsideClick() {
    this.setState({
      menuOpen: false
    });
  }

  handleButtonClick() {
    this.setState(state => {
      const {
        activeCaptionsAndSubtitles,
        availableCaptionsAndSubtitles
      } = state;
      const { onSelectCaptionsOrSubtitlesSrc } = this.props;
      switch (availableCaptionsAndSubtitles.length) {
        case 0:
          return null;
        case 1:
          if (activeCaptionsAndSubtitles.length) {
            onSelectCaptionsOrSubtitlesSrc(null);
          } else {
            onSelectCaptionsOrSubtitlesSrc(
              availableCaptionsAndSubtitles[0].src
            );
          }
          return null;
        default: {
          const menuOpen = !state.menuOpen;
          return {
            menuOpen,
            menuPosition: menuOpen ? 'hidden' : null
          };
        }
      }
    });
  }

  render() {
    const { onSelectCaptionsOrSubtitlesSrc } = this.props;
    const {
      menuOpen,
      menuPosition,
      activeCaptionsAndSubtitles,
      availableCaptionsAndSubtitles
    } = this.state;
    return (
      <ButtonWrapper
        ref={this.setControlRef}
        className="cassette__captions_selector"
        onClick={stopPropagation}
      >
        <button
          ref={this.setButtonRef}
          type="button"
          className={classNames(
            'cassette__material_toggle cassette__media_button cassette__captions_selector__btn',
            {
              highlight: menuOpen,
              on: Boolean(activeCaptionsAndSubtitles.length)
            }
          )}
          onClick={this.handleButtonClick}
        >
          <div className="foreground inner">
            <CaptionsIcon width="100%" height="100%" />
          </div>
        </button>
        <div
          ref={this.setMenuRef}
          style={menuOpen ? undefined : hiddenMenuStyle}
          className={classNames(
            'cassette__captions_selector__menu',
            menuPosition
          )}
        >
          {availableCaptionsAndSubtitles.map(textTrack => {
            const active = activeCaptionsAndSubtitles.some(t => {
              return t.src === textTrack.src;
            });
            return (
              <CaptionsMenuItem
                key={textTrack.src}
                active={active}
                onClick={() => {
                  this.setState({
                    menuOpen: false
                  });
                  onSelectCaptionsOrSubtitlesSrc(textTrack.src);
                }}
                language={textTrack.language}
                label={textTrack.label}
              />
            );
          })}
          <CaptionsMenuItem
            onClick={() => {
              this.setState({
                menuOpen: false
              });
              onSelectCaptionsOrSubtitlesSrc(null);
            }}
          />
        </div>
      </ButtonWrapper>
    );
  }
}

const TextTrackCueList =
  typeof TextTrackCueList === 'undefined' ? Object : TextTrackCueList;

CaptionsSelector.propTypes = {
  activeTextTracks: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      kind: PropTypes.oneOf([
        'subtitles',
        'captions',
        'descriptions',
        'chapters',
        'metadata'
      ]).isRequired,
      cues: PropTypes.instanceOf(TextTrackCueList).isRequired,
      activeCues: PropTypes.instanceOf(TextTrackCueList).isRequired
    })
  ).isRequired,
  playlist: PropTypes.arrayOf(PlayerPropTypes.track).isRequired,
  activeTrackIndex: PropTypes.number.isRequired,
  onSelectCaptionsOrSubtitlesSrc: PropTypes.func.isRequired
};

export default playerContextFilter(CaptionsSelector, [
  'activeTextTracks',
  'playlist',
  'activeTrackIndex',
  'onSelectCaptionsOrSubtitlesSrc'
]);
