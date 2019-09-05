export default (parent) => {
  if (Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(parent.$options), '_scopeId')) {
    return { [parent.$options._scopeId]: '' }
  }

  return {}
}
