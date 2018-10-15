/* globals React, PropTypes, ExamplePlayerContextProvider, ExampleMediaPlayer, ExampleMediaInfo */
// eslint-disable-next-line no-unused-vars
function ExampleApp(props) {
  return React.createElement(
    React.StrictMode,
     {},
    React.createElement(
      ExamplePlayerContextProvider,
      {
        playlist: props.playlist
      },
      React.createElement(ExampleMediaPlayer),
      React.createElement(ExampleMediaInfo)
    )
  );
}

ExampleApp.propTypes = {
  playlist: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};
