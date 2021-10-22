// https://docs.mongodb.com/realm/sdk/node/#std-label-node-intro
import Realm from "realm";
const poligono = {
  type: "Feature",
  bbox: [],
  geometry: {
    _id: "objectId",
    type: "Polygon",
    coordinates: [],
  },
};
// open a local realm with the 'Polygon' 
// Rules for an instance of MongoDB that specify the form of documents that you can insert into each collection, including both fields and values
const realm = await Realm.open({
  schema: [poligono],
});

export poligono;
