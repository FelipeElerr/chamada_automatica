import mongoose from "mongoose"

mongoose.connect("mongodb+srv://Rafs:Rafs123@clusteralura.eudtc.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;