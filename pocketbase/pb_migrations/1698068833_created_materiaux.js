/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fcu0a8be9i255m6",
    "created": "2023-10-23 13:47:13.721Z",
    "updated": "2023-10-23 13:47:13.721Z",
    "name": "materiaux",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("fcu0a8be9i255m6");

  return dao.deleteCollection(collection);
})
