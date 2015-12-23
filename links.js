// Create SimpleSchemas
// https://github.com/ivansglazunov/meteor-links/issues/1
LinkSimpleSchema = new SimpleSchema({
  link: {
    type: DBRefSchema,
    optional: true
  },
  type: {
    type: String
  }
});
LinksSimpleSchema = new SimpleSchema({
  _links: {
    type: [LinkSimpleSchema]
  }
});
