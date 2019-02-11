// TODO: support Preact, Inferno, etc.
function getReactParentNameStack(componentInstance) {
  const fiber = componentInstance._reactInternalFiber;
  const parentStack = [];
  let owner = fiber;
  while ((owner = owner._debugOwner)) {
    if (owner.type.name) {
      parentStack.push(owner.type.name);
    }
  }
  return parentStack;
}

export default getReactParentNameStack;
