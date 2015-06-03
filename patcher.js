var originalMethods = {};

patchMeteorMethods = function (methodNames, thisAttributes) {
  for (var i = 0; i < methodNames.length; i++) {
    patchMeteorMethod(methodNames[i], thisAttributes);
  }
};

patchMeteorMethod = function (methodName, thisAttributes) {
  originalMethods[methodName] = Meteor.server.method_handlers[methodName];
  Meteor.server.method_handlers[methodName] = function () {
    for (i in thisAttributes) {
      this[i] = thisAttributes[i];
    }
    return originalMethods[methodName].apply(this, arguments);
  };
};

restoreMeteorMethods = function () {
  for (i in originalMethods) {
    Meteor.server.method_handlers[i] = originalMethods[i];
  }
};
