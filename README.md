Xolv.io Patcher
=============== 

Allows you to monkey patch Meteor methods and add attributes into their context. This is useful when
you want to test a Meteor method from a server and pass in attributes like `userId` without needing 
to authenticate via DDP first. 

#Installation

```
meteor add xolvio:patcher
```

#Usage
This package has the `debugOnly` flag set which means it will not get bundled into the app. It also
means you can only reference it as a weak-dependency so you have to use this syntax to get to the 
instance:

```javascript
var patcher= Package['xolvio:patcher']

var thisAttributes = {
  userId: 'notNull'
}

// to patch one method
patcher.patchMeteorMethod('myMethod', thisAttributes);

// to patch multiple methods
patcher.patchMeteorMethods([
  'aMethod',
  'anotherMethod'
], thisAttributes);
```