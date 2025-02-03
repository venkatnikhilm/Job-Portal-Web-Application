//Register a company

import Company from "../models/Company.js";
import bcrypt from "bcrypt";
import {v2 as cloudinary} from 'cloudinary';
import generateToken from "../utils/generateToken.js";

export const registerCompany = async (req, res) => {
    const { name, email, password } = req.body;
    const imageFile = req.file;
    if (!name || !email || !password || !imageFile) {
        return res.status(400).json({ success: false, message: "All fields are required" });    
    }

    try {
        const companyExists = await Company.findOne({ email });
        if (companyExists) {
            return res.status(400).json({ success: false, message: "Company already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const imageUpload = await cloudinary.uploader.upload(imageFile.path);

        const company = new Company({
            name,
            email,
            password: hashPassword,
            image: imageUpload.secure_url
        });

        res.json({ 
            success: true,
            company:{
                _id: company._id,
                name: company.name,
                email: company.email,
                image: company.image
            },
            token: generateToken(company._id),
              });

        
    } catch (error) {
        res.json({ success: false, message: error.message });
        
    }
}

//Company Login
export const loginCompany = async (req, res) => {}

//Get Company Profile
export const getCompanyData = async (req, res) => {}

//Post a new job
export const postJob = async (req, res) => {}

//Get company job applicants
export const getCompanyJobApplicants = async (req, res) => {}

//Get company posted jobs

export const getCompanyPostedJobs = async (req, res) => {}

//Change job application status

export const changeJobApplicationStatus = async (req, res) => {}

//Change job visibility
export const changeVisibility = async (req, res) => {}