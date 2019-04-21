/* globals React, PropTypes */

// eslint-disable-next-line no-unused-vars
class ExampleMuteMessage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showingMuteMessage: false
    };
  }

  static getDerivedStateFromProps(props) {
    if (!props.muted) {
      return {
        showingMuteMessage: false
      };
    }
    return null;
  }

  componentDidMount() {
    if (this.props.muted) {
      this.muteMessageTimeout = setTimeout(() => {
        this.setState({
          showingMuteMessage: true
        });
      }, 5000);
    }
  }

  componentDidUpdate() {
    if (!this.props.muted) {
      clearTimeout(this.muteMessageTimeout);
    }
  }

  render() {
    return React.createElement(
      'p',
      {
        className: this.state.showingMuteMessage
          ? 'mute_message'
          : 'mute_message hidden'
      },
      "(You won't hear anything until you unmute the media.)"
    );
  }
}

ExampleMuteMessage.propTypes = {
  muted: PropTypes.bool.isRequired
};
