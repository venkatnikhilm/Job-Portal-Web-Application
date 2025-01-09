import { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [searchFilter, setSearchFilter] = useState({
        title: '',
        location: '',
    });
    
    const [isSearched, setIsSearched] = useState(false);
  const value = {
    searchFilter, setSearchFilter,
    isSearched, setIsSearched,
  };  // You can put context values here
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;