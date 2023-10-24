/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0atcxxn42dtui5i")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m2s4kkhz",
    "name": "materiaux_verre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "fcu0a8be9i255m6",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6lwuovff",
    "name": "materiaux_cadre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "fcu0a8be9i255m6",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0atcxxn42dtui5i")

  // remove
  collection.schema.removeField("m2s4kkhz")

  // remove
  collection.schema.removeField("6lwuovff")

  return dao.saveCollection(collection)
})
