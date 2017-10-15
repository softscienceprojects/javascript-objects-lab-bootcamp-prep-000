var recipes = {};

var updateObjectWithKeyAndValue = function(object,key,value) {
  return Object.assign({}, object, { [key]: value })
}

var destructivelyUpdateObjectWitKeyAndValue = function(object, key, value) {
  return object[key]: value;
}

// deleteFromObjectByKey(object, key)

// destructivelyDeleteFromObjectByKey(object, key) {}
