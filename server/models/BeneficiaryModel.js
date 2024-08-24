import mongoose from "mongoose";

const BeneficiarySchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    adhaar: {type: Number, required: true},
    address: {type: String, required: true},
    school: {type: String, required: true},
    college: {type: String, required: true},
    classTenMarks: {type: Number, required: true},
    classTenPassingYear: {type: Number, required: true},
    classTwelveMarks: {type: Number, required: true},
    classTwelvePassingYear: {type: Number, required: true},
})

const Beneficiary = mongoose.model("Beneficiary", BeneficiarySchema);
export default Beneficiary;