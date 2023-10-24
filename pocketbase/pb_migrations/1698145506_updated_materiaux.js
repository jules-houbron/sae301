/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fcu0a8be9i255m6")

  collection.name = "couleur"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2bdqox0w",
    "name": "code_hexadecimale",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dgz2tfpb",
    "name": "libelle_couleur",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fcu0a8be9i255m6")

  collection.name = "materiaux"

  // remove
  collection.schema.removeField("2bdqox0w")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dgz2tfpb",
    "name": "libelle_materiaux",
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

  return dao.saveCollection(collection)
})
