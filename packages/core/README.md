# @cassette/core

**`@cassette/core`** provides [React Context](https://reactjs.org/docs/context.html)-based components which expose an API for consuming and updating media player state. The API abstraction maps very closely to the set of actions that would be available to an end user of a conventional media player, while remaining flexible enough to accommodate varying media player design paradigms.

### Installation

```console
npm install @cassette/core
```

#### Components included:
* `FullscreenContextConsumer` - used to read and update the state of the surrounding `fullscreenContext`
* `FullscreenContextProvider` - wraps an area which should be fullscreen-able
* `PlayerContextConsumer` - used to read and update the state of the surrounding `playerContext`
* `PlayerContextGroup` - a wrapper which can be used to share configuration among multiple descendant `PlayerContextProvider` instances as well as prevent multiple media elements from playing audio simultaneously
* `PlayerContextProvider` - wraps an area which shares a common `playerContext`

#### Higher-order components included:
* `playerContextFilter` - consumes the surrounding `fullscreenContext` and `playerContext` and passes only a specified subset of the context, as well as any additional props, to the given child component

### Find full documentation [here](https://benwiley4000.github.io/cassette/styleguide/#cassettecore)!
