import React, { useState } from 'react';
import axios from 'axios';
import { mockData } from './mockData';
import {useNavigate} from 'react-router-dom';

const BeneficiaryForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        adhaar: '',  
        address: '',
        school: '',  
        college: '', 
        classTenMarks: '', 
        classTenPassingYear: '', 
        classTwelveMarks: '',  
        classTwelvePassingYear: '', 
    });

    const [verificationStatus, setVerificationStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const sendEmail = async () => {
        try {
            const { data } = await axios.post("http://localhost:8000/send-email", { to: formData.email });
            console.log(data);
        } catch (error) {
            console.log("Error in Sending Email", error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const aadharDetails = mockData.find(entry => entry.aadhar === formData.adhaar);
        if (aadharDetails) {
            if (aadharDetails.approved) {
                await sendEmail();  // Ensure email is sent before setting status
                setVerificationStatus("Approved");
            } else {
                setVerificationStatus(`Disapproved: ${aadharDetails.reason}`);
            }
        } else {
            setVerificationStatus("Aadhar not found in the system");
        }

        try {
            const response = await axios.post("http://localhost:8000/beneficiary", formData);
            console.log("Data submitted successfully", response.data);
        } catch (err) {
            console.log("Error in submitting data", err.message);
        }
        navigate("/verification")
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Beneficiary Form</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                </div>
                <div className="block flex space-x-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium">Aadhar Number</label>
                        <input
                            type="text"
                            name="adhaar"  // updated field name
                            value={formData.adhaar}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium">Address</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium">School Name</label>
                        <input
                            type="text"
                            name="school"  // updated field name
                            value={formData.school}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium">College Name</label>
                        <input
                            type="text"
                            name="college"  // updated field name
                            value={formData.college}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium">10th Marksheet Number</label>
                        <input
                            type="number"  // updated type
                            name="classTenMarks"  // updated field name
                            value={formData.classTenMarks}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium">10th Passing Year</label>
                        <input
                            type="number"  // updated type
                            name="classTenPassingYear"  // updated field name
                            value={formData.classTenPassingYear}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium">12th Marksheet Number</label>
                        <input
                            type="number"  // updated type
                            name="classTwelveMarks"  // updated field name
                            value={formData.classTwelveMarks}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium">12th Passing Year</label>
                        <input
                            type="number"  // updated type
                            name="classTwelvePassingYear"  // updated field name
                            value={formData.classTwelvePassingYear}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-[100px] bg-blue-600 text-white items-center font-semibold p-2 rounded-md"
                >
                    Submit
                </button>
            </form>

        </div>
    );
};

export default BeneficiaryForm;
