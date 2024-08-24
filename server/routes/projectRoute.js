import express from 'express';
import Project from "../models/ProjectModel.js"

const router = express.Router();

router.post("/project", async (req, res) => {
    try{
        const { name, type, requirements, description } = req.body;
        const existingProject = await Project.findOne({name});
        if(existingProject){
            return res.json({ message: "project already exists" })
        }
        const project = Project.create({name, type, requirements, description});
        res
        .status(201)
        .json({ message: "User signed in successfully", success: true, user });
        next();
        console.log("User Created Succesfully");
        
    } catch (err){
        console.log(err)
    }
})

router.get("/project", async(req, res) => {
   try{
    const projects = await Project.find();
    res.json(projects);
   }
   catch (err){
    console.log(err);
   }
})

export {router as ProjectRouter};
