import express from 'express';
import { changeJobApplicationStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js';
import upload from '../config/multer.js';
import { protectCompany } from '../middlewares/middleware.js';


const router = express.Router();

//Register a company
router.post('/register', upload.single('image'), registerCompany)

//Company Login
router.post('/login', loginCompany)

//Get company data
router.get('/company', protectCompany, getCompanyData)

//Post a new job
router.post('/post-job', protectCompany, postJob)

//Get applicants data of company
router.get('/applicants', getCompanyJobApplicants)

//Get company posted jobs
router.get('/list-jobs', protectCompany, getCompanyPostedJobs)

//Change job application status
router.post('/change-status',protectCompany, changeJobApplicationStatus)

//Change application visibility
router.post('/change-visibility',protectCompany, changeVisibility)

export default router