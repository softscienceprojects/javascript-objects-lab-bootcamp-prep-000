var recipes = {};

var updateObjectWithKeyAndValue = function(object,key,value) {
  return Object.assign({}, object, { [key]: value })
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value) {
  new Object(object[key]= value);
  return object
}

var deleteFromObjectByKey = function(object, key) {
  delete object['key'];
}

var destructivelyDeleteFromObjectByKey = function(object, key) {

}
