import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RepeatIcon from 'svg-react-loader?name=RepeatIcon!material-design-icons/av/svg/design/ic_repeat_48px.svg?';
import RepeatOneIcon from 'svg-react-loader?name=RepeatOneIcon!material-design-icons/av/svg/design/ic_repeat_one_48px.svg?';

import { repeatStrategyOptions } from '../constants';
import bindMethods from '../utils/bindMethods';
import createControlRenderProp from '../factories/createControlRenderProp';

function getNextRepeatStrategy (repeatStrategy) {
  let nextIndex = repeatStrategyOptions.indexOf(repeatStrategy) + 1;
  if (nextIndex >= repeatStrategyOptions.length) {
    nextIndex = 0;
  }
  return repeatStrategyOptions[nextIndex];
}

class RepeatButton extends PureComponent {
  constructor (props) {
    super(props);

    bindMethods(this, [
      // bind methods fired on React events
      'handleNextRepeatStrategy'
    ]);
  }

  handleNextRepeatStrategy () {
    this.props.onSetRepeatStrategy(
      getNextRepeatStrategy(this.props.repeatStrategy)
    );
  }

  render () {
    const { repeatStrategy } = this.props;
    const Icon = repeatStrategy === 'track' ? RepeatOneIcon : RepeatIcon;
    return (
      <button
        className={classNames(
          'rrap__material_toggle rrap__audio_button rrap__repeat_btn',
          { on: repeatStrategy !== 'none' }
        )}
        onClick={this.handleNextRepeatStrategy}
      >
        <div className="inner foreground">
          <Icon width="100%" height="100%" />
        </div>
      </button>
    );
  }
}

RepeatButton.propTypes = {
  repeatStrategy: PropTypes.oneOf(repeatStrategyOptions).isRequired,
  onSetRepeatStrategy: PropTypes.func.isRequired
};

export const renderRepeatButton = createControlRenderProp(RepeatButton, [
  'repeatStrategy',
  'onSetRepeatStrategy'
]);

export default RepeatButton;
