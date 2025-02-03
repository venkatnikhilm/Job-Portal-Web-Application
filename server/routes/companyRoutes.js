import express from 'express';
import { changeJobApplicationStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js';
import upload from '../config/multer.js';


const router = express.Router();

//Register a company
router.post('/register', upload.single('image'), registerCompany)

//Company Login
router.post('/login', loginCompany)

//Get company data
router.get('/company', getCompanyData)

//Post a new job
router.post('/postjob', postJob)

//Get applicants data of company
router.get('/applicants', getCompanyJobApplicants)

//Get company posted jobs
router.get('/jobs', getCompanyPostedJobs)

//Change job application status
router.post('/change-status', changeJobApplicationStatus)

//Change application visibility
router.post('/change-visibility', changeVisibility)

export default router