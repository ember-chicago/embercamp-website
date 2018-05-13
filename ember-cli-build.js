'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    prember: {
      urls: [
        '/',
        '/program'
      ]
    },
  });

  return app.toTree();
};
