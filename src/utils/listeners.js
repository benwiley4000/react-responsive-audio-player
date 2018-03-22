function getListenerUtil (prefix) {
  return function (obj, element, listeners) {
    for (const l of listeners) {
      element[`${prefix}eventListener`](l[0], obj[l[1]]);
    }
  }
}

export const addListenersOnObject = getListenerUtil('add');
export const removeListenersOnObject = getListenerUtil('remove');
