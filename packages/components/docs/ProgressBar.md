```jsx
import { ProgressBar } from '@cassette/components';

class ProgressBarDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0.3,
      dragging: false
    };
  }

  render() {
    const { progress, dragging } = this.state;
    return (
      <div>
        <div style={{ fontSize: 20 }}>
          <b>Value:</b> {progress.toFixed(2)} {dragging && '(dragging)'}
        </div>
        <br />
        <ProgressBar
          progressDirection="right"
          style={{ background: 'black', height: 30 }}
          progressStyle={{ background: 'orange' }}
          progress={this.state.progress}
          onAdjustProgress={progress => {
            this.setState({
              progress,
              dragging: true
            });
          }}
          onAdjustComplete={() => this.setState({ dragging: false })}
        />
      </div>
    );
  }
}
<ProgressBarDemo />;
```
