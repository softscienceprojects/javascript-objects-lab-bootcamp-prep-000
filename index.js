var recipes = {};

var updateObjectWithKeyAndValue = function(object,key,value) {
  return Object.assign({}, object, { [key]: value })
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value) {
  new Object(object[key]: value);
  return object
}

// deleteFromObjectByKey(object, key)

// destructivelyDeleteFromObjectByKey(object, key) {}
