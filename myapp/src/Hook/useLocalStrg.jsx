import React, { useEffect, useState } from 'react'

function useLocalStrg(key, initVal= "") {
    const [value, setValue] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initVal)
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value))
    }, [key,value])
  return [value, setValue] 
}
export default useLocalStrg