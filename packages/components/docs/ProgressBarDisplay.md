```jsx
class ProgressBarDisplayDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0.3
    };
  }

  render() {
    const { progress } = this.state;
    return (
      <div>
        <div style={{ fontSize: 20 }}>
          <b>Value: </b>
          <input
            style={{ fontSize: 20 }}
            type="number"
            value={progress}
            step={0.01}
            min={0}
            max={1}
            onChange={e => this.setState({ progress: Number(e.target.value) })}
          />
        </div>
        <br />
        <ProgressBarDisplay
          progressDirection="right"
          style={{ background: 'black', height: 10 }}
          progressStyle={{ background: 'orange' }}
          progress={this.state.progress}
        />
      </div>
    );
  }
}
<ProgressBarDisplayDemo />;
```
