Package.describe({
  name: 'ivansglazunov:links',
  version: '0.1.1',
  summary: 'Implementation of references independent of DBRef interpretation.',
  git: 'https://github.com/ivansglazunov/meteor-links',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('mongo');
  api.use('ivansglazunov:dbrefs@0.1.4');
  api.use('dburles:mongo-collection-instances@0.3.4');
  api.use('ecmascript');
  api.addFiles('Links.js');
  api.export('Link');
});
