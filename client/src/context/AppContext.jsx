import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useAuth, useUser } from '@clerk/clerk-react';

export const AppContext = createContext();

const AppContextProvider = (props) => {

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const {user} = useUser()
  const {getToken} = useAuth()
  
    const [searchFilter, setSearchFilter] = useState({
        title: '',
        location: '',
    });
    
    const [isSearched, setIsSearched] = useState(false);

    const [jobs,setJobs] = useState([]);

    const[showRecruiterLogin, setShowRecruiterLogin] = useState(false);

    const[companyToken, setCompanyToken] = useState(null);
    const[companyData, setCompanyData] = useState(null);

    const [userData, setUserData] = useState(null);
    const [userApplications, setUserApplications] = useState([]);
    
    //Function to fetch Job Data
    const fetchJobs = async () =>{
      const {data} = await axios.get(backendUrl + '/api/jobs')
      try {
        if(data.success){
          setJobs(data.jobs)
          console.log(data.jobs)
          console.log("Backend URL:", backendUrl);
        }else{
          toast.error(data.message)
        }
      } catch (error) {
        toast.error(error.message) 
      }
    }
    //Fetch company data function
    const fetchCompanyData = async () => {
      try {
        const {data} = await axios.get(backendUrl + '/api/company/company', {headers:{token:companyToken}})
          if(data.success){
            setCompanyData(data.company)
            console.log(data)
          }else{
            toast.error(data.message)
          }
      } catch (error) {
        toast.error(error.message)
      }
    }

    //Function to fetch user data
    const fetchUserData = async () => {
      try {

        const token = await getToken()

        const {data} = await axios.get(backendUrl + '/api/user/user', 
          {headers:{Authorization:`Bearer ${token}`}})

        if(data.success){
          setUserData(data.user)
        }else{
          toast.error(data.message)
        }
      } catch (error) {
        toast.error(error.message)
      }
    }

    useEffect(() => {
        fetchJobs()
        const storedCompanyToken = localStorage.getItem('companyToken');
        if (storedCompanyToken) {
          setCompanyToken(storedCompanyToken);
        }
    },[])

    useEffect(() => {

      if (companyToken){
        fetchCompanyData()
      }


    },[companyToken])

    useEffect(() => {
      if (user){
        fetchUserData()
      }
    },[user])

  const value = {
    searchFilter, setSearchFilter,
    isSearched, setIsSearched,
    jobs, setJobs,
    showRecruiterLogin, setShowRecruiterLogin,
    companyToken, setCompanyToken,
    companyData, setCompanyData,
    backendUrl
  };  // You can put context values here
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;