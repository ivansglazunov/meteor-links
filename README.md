# Links

```
meteor add ivansglazunov:links
```

DBRef in Meteor has bad interpretation. The client and the server query syntax is different for him.

If your `_id`, the names of the collections are always string and you always know what field will be stored link - this package is for you.

## Universal links string syntax

What is going to link?
```js
var link = document._id+'|'+collection._name;
```

## Lovely methods

##### Mongo.Collection.prototype.attachLinks

Adds to the documents some helpers.

> ()

```js
var Documents = new Mongo.Collection('documents');
Documents.attachLinks();
```

##### document.Link

Generate a link to a document.

> () => String

```js
Documents.insert({ name: "test" }); // "mHnuNthscrJJm64GY"
var document = Documents.findOne({ name: "test" });
document.Link(); // "mHnuNthscrJJm64GY|documents"
```

##### Link

Get a document of link.

> (link: String) => Document|undefined

```js
Link("mHnuNthscrJJm64GY|documents"); // { _id: "mHnuNthscrJJm64GY", name: "test" }
```

##### Link.collection

Get a collection instance from link.

> (link: String) => Collection|undefined

```js
Link.collection("mHnuNthscrJJm64GY|documents"); // Documents
```

##### Link.id

Get a id from link.

> (link: String) => String|undefined

```js
Link.id("mHnuNthscrJJm64GY|documents"); // "mHnuNthscrJJm64GY"
```

##### Link.toDBRef

Convert link to DBRef.

> (link: String) => DBRef

```js
Link.toDBRef("mHnuNthscrJJm64GY|documents"); // { $ref: 'documents', $id: 'mHnuNthscrJJm64GY' }
```

##### Link.fromDBRef

Convert DBRef to link.

> (dbref: DBRef) => String

```js
Link.fromDBRef({ $ref: 'documents', $id: 'mHnuNthscrJJm64GY' }); // "mHnuNthscrJJm64GY|documents"
Link.fromDBRef({ namespace: 'documents', oid: 'mHnuNthscrJJm64GY' }); // "mHnuNthscrJJm64GY|documents"
```

##### Link.parse

Parse link to id, with validation.

> (link: String) => [String]

```js
Link.parse("mHnuNthscrJJm64GY|documents"); // ["mHnuNthscrJJm64GY", "documents"]
```

##### Link.validate

> (link: String) => Boolean

```js
Link.validate("mHnuNthscrJJm64GY|documents"); true
Link.validate("mHnuNthscrJJm64GY||documents"); false
Link.validate("mHnuNthscrJJm64GY"); false
Link.validate("mHnuNthscrJJm64GY|documents|"); false
Link.validate("mHnuNthscrJJm64GY||"); false
```

## Versions

##### 0.1.3
* dependence `dburles:collection-helpers@1.0.4`

##### 0.1.2
* Fix method `Link`