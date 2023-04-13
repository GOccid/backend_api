import mongoose from "mongoose";

// mongoose.Promise = Promise

const URL = process.env.PROD_MONGODB || "mongodb://127.0.0.1:27017/backend_api";

mongoose.set("returnOriginal", false)


mongoose.connect(URL, {useNewUrlParser: true}).catch((error)=> 
console.log("Error :", error.message));

mongoose.connection.on("Disconnected", ()=>
console.log("Disconnected!")
);

mongoose.connection.on("error", (error)=> console.error(`connection error: ${error}`)
);

export default mongoose.connection;
