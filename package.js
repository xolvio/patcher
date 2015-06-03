Package.describe({
  name: 'xolvio:patcher',
  version: '0.1.0',
  debugOnly: true,
  summary: 'Patches Meteor methods and allows you to override "this" attributes for testing purposes'
});

Package.onUse(function(api) {

  api.addFiles([
    'patcher.js'
  ], 'server');

  api.export('restoreMeteorMethods', 'server');
  api.export('patchMeteorMethod', 'server');
  api.export('patchMeteorMethods', 'server');

});
