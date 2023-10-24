/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0atcxxn42dtui5i")

  // remove
  collection.schema.removeField("gaz4dofx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "epk0lfkh",
    "name": "forme",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "vka17zp3v45ojxc",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gaz4dofx",
    "name": "type_cadre",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("epk0lfkh")

  return dao.saveCollection(collection)
})
