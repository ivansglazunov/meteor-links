# Links

### Use in conjunction with your schema

```js
yourSchema = new SimpleSchema({});
collectionSchema = new SimpleSchema([SimpleSchemaLinks, yourSchema, {additionalField: {type: String} }]);
```
