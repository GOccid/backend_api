import mongoose from "mongoose";
const Schema = mongoose.Schema

// let resultsRickMort = new Schema({
//       "name": String,
//       "status": String,
//       "species": String,
//       "image": String
// })

let rickAndMort = new Schema({
  "name": String,
  "status": String,
  "species": String,
  "image": String
})

export default mongoose.model("rickAndMort", rickAndMort);