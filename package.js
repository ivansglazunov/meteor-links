Package.describe({
  name: 'ivansglazunov:links',
  version: '0.0.2',
  summary: 'Typed links with DBRef.',
  git: 'https://github.com/ivansglazunov/meteor-links',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('mongo');
  api.use('aldeed:simple-schema@1.5.1');
  api.use('ivansglazunov:dbrefs@0.0.4');
  api.use('ecmascript');
  api.addFiles('links.js');
  api.export('LinksSimpleSchema');
});
