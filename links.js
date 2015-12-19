// Create SimpleSchemas
// https://github.com/ivansglazunov/meteor-links/issues/1
LinkSimpleSchema = new SimpleSchema({
  link: {
    type: Object,
    optional: true
  },
  type: {
    type: String
    optional: true
  },
  package: {
    type: String
    optional: true
  }
});
LinksSimpleSchema = new SimpleSchema({
  _links: {
    type: [LinkSimpleSchema]
  }
});
