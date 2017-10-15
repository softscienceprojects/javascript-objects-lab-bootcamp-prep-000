var recipes = {};

var updateObjectWithKeyAndValue = function(object,key,value) {
  return Object.assign({}, object, { [key]: value })
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value) {
  new Object(object[key]= value);
  return object
}

var deleteFromObjectByKey = function(object, key) {
  var obj = {object}
  var newObj = Object.assign({}, object)
  delete newObj.key
  return object
}

var destructivelyDeleteFromObjectByKey = function(object, key) {
  delete object[key];
  return object
}
