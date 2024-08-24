import express from 'express'
import Beneficiary from '../models/BeneficiaryModel.js'

const router = express.Router();

router.post("/beneficiary", async (req, res) => {
    const {name, email, adhaar , address, school, college, classTenMarks, classTenPassingYear, classTwelveMarks, classTwelvePassingYear} = req.body;
    try{
        const existingProject = await Beneficiary.findOne({name});
        if(existingProject){
            return res.json({ message: "project already exists" })
        }
        const project = Beneficiary.create({name, email, adhaar , address, school, college, classTenMarks, classTenPassingYear, classTwelveMarks, classTwelvePassingYear});
        res
        .status(201)
        .json({ message: "Beneficiary added in successfully", success: true, user });
        next();
        console.log("Beneficiary Created Succesfully");
        
    } catch (err){
        console.log(err)
    }
})
router.get("/beneficiary", async(req, res) => {
    try{
     const beneficiary = await Beneficiary.find();
     res.json(beneficiary);
    }
    catch (err){
     console.log(err);
    }
 })

export { router as BeneficiaryRouter };