import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
        "name": {type: String, required: true},
        "type" : {type: String, required: true},
        "description" : {type: String, required: true},
        "requirements" : {type: String, required: true},
})
const Project = mongoose.model("Projects", projectSchema);

export default Project