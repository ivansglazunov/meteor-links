// Helper
// ()
Meteor.Collection.prototype.attachLinks = function() {
  var collection = this;
  this.helpers({
    Link: function() { return this._id+"|"+collection._name; }
  });
};

// (link: String) => Document|undefined
Link = function(link) {
  var link = Link.parse(link);
  var collection = Mongo.Collection.get(link[1]);
  return collection.findOne({ _id: link[0] });
}

// (link: String) => [String]|undefined
Link.parse = function(link) {
  if (typeof(link) != 'string') throw new Meteor.Error('Link must be a string!', 'typeof(link) != "string"');
  var link = link.split('|');
  if (link.length < 2 || link.length > 3) throw new Meteor.Error('Invalid link.', 'link.length < 2 || link.length > 3');
  if (!link[0].length || !link[1].length || (link.length == 3 && !link[2].length)) throw new Meteor.Error('Invalid link.', 'Too short strings.');
  if (!Mongo.Collection.get(link[1])) throw new Meteor.Error('Collection '+link[1]+' not found.');
  return link;
};

// (link: String) => Boolean
Link.validate = function(link) {
  try {
    Link.parse(link);
  } catch(error) {
    return false;
  }
  return true;
};

// (link: String) => Collection|undefined
Link.collection = function(link) {
  var link = Link.parse(link);
  return Mongo.Collection.get(link[1]);
};

// (link: String) => String|undefined
Link.id = function(link) {
  var link = Link.parse(link);
  return link[0];
};

// (link: String) => DBRef
Link.toDBRef = function(link) {
  var link = Link.parse(link);
  return DBRef.new(link[1], link[0], link.length == 3 ? link[2] : undefined);
};

// (dbref: DBRef) => String
Link.fromDBRef = function(dbref) {
  var dbref = DBRef.new(dbref);
  return dbref.$id+'|'+dbref.$ref;
};