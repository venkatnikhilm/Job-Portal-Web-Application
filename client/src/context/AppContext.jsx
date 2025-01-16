import { createContext, useEffect, useState } from 'react';
import { jobsData } from '../assets/assets';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [searchFilter, setSearchFilter] = useState({
        title: '',
        location: '',
    });
    
    const [isSearched, setIsSearched] = useState(false);

    const [jobs,setJobs] = useState([]);

    const[showRecruiterLogin, setShowRecruiterLogin] = useState(false);
    
    //Function to fetch Job Data
    const fetchJobs = async () =>{
      setJobs(jobsData)
    }

    useEffect(() => {
        fetchJobs()
    },[])

  const value = {
    searchFilter, setSearchFilter,
    isSearched, setIsSearched,
    jobs, setJobs,
    showRecruiterLogin, setShowRecruiterLogin
  };  // You can put context values here
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;