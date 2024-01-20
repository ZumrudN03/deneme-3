import React, { createContext, useState } from 'react'

export const SeacrhContext = createContext()

function SearchProvider({children}) {
    const [search, setsearch] = useState("")
    function handleSearch(e) {
        setsearch(e.target.value)
    }
  return (
    <SeacrhContext.Provider value={{search,handleSearch}}>
        {children}
    </SeacrhContext.Provider>
  )
}

export default SearchProvider