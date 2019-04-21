const contextSync = {};

function createContextSync(namespace) {
  if (contextSync[namespace]) {
    return contextSync[namespace];
  }

  let __context;
  const subscribers = new Set();

  contextSync[namespace] = {
    update(context) {
      __context = context;
      for (const listener of subscribers) {
        listener();
      }
    },
    read() {
      return __context;
    },
    subscribe(listener) {
      subscribers.add(listener);
    },
    unsubscribe(listener) {
      subscribers.delete(listener);
    }
  };

  return contextSync[namespace];
}

export default createContextSync;
