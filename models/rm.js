import mongoose from "mongoose";

const Schema = mongoose.Schema

let resultsRickMort = new Schema({
      "name": String,
      "status": String,
      "species": String,
})

let rickAndMort = new Schema({
  "results": [resultsRickMort]

})

export default mongoose.model("rickAndMort", rickAndMort);