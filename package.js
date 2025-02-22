Package.describe({
  name: 'seakaytee:spin',
  summary: 'Simple spinner package for Meteor',
  version: '2.3.2',
  git: 'https://github.com/sachag/meteor-spin'
});

Npm.depends({
  "spin.js": "4.1.1"
});

Package.onUse(function (api, where) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0','2.3']);
  api.use([
    'templating',
    'underscore'
  ], 'client');

  api.addFiles([
    '.npm/package/node_modules/spin.js/spin.js',
    'lib/spinner.html',
    'lib/spinner.css',
    'lib/spinner.js'
  ], 'client');
});
