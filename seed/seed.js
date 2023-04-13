import db from "../db/connections.js"
import rimor from "../models/rm.js";
import rickmorty from "../Morty.json" assert { type: "json" };


const insertData = async () => {
  // Reset Database
  await db.dropDatabase();
  
  await rimor.insertMany(rickmorty);

  db.close();
};

insertData();