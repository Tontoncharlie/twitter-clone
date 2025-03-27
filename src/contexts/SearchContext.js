"use client"

import { useContext, createContext, Children, useState} from "react";

// initialise context
export const SearchContext = createContext();

const name = "amos"


// create a provider tat will make the context available to all files

export const SearchProvider = ({children}) => {
    const [result,setResult] = useState([])
    return(
        <SearchContext.Provider value={{name,result,setResult}}>
        {children}
    </SearchContext.Provider>
    )
}