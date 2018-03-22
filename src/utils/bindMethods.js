function bindMethods(_this, methodNames) {
  for (const methodName of methodNames) {
    _this[methodName] = _this[methodName].bind(_this);
  }
}

export default bindMethods;
