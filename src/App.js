import { useEffect, useState } from "react";
import Search from "./components/search";
import Suggestion from "./components/suggestion";
import './style/index.css'

function App() {
  const [data,setData]=useState()
  const [search, setSearch]=useState()

  const getCountries = async(countryName) =>{
    try{
      if(countryName.length){
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)      
        const json = await response.json()
      if(json.length)
        setData(json)
      }
    }catch(e){
      console.log(e.message)
    }
  }
  
  const deboucing = () =>{
    let timeOut
    return () =>{
        clearTimeout(timeOut)
        timeOut = setTimeout(()=>{
        getCountries(search)
      },2000)
    }
  }

  useEffect(()=>{
    const myFetch = deboucing()
    myFetch()
  },[search])

  const ListSuggestion = data? data.filter(e => (e.name.common).toLowerCase().startsWith(search))
                                   .map(e => <Suggestion name={e.name.common} 
                                                         flags={e.flags.png}
                                              /> 
                            ):[]

  const nombreCountries = data? ListSuggestion.length +" countries": "0 countries"
  return (
    <div className="h-screen w-screen items-center flex flex-col pt-20 bg-gray-200">
      <Search setSearch={setSearch}/>
      <div className="flex w-1/4 justify-end py-1 text-xs pr-1 text-gray-500">
        <span>{nombreCountries}</span>
      </div>
      <div className="flex flex-col w-full h-96 items-center">
        <div className="flex flex-col w-1/4  items-center justify-center overflow-y-scroll">
          {ListSuggestion}
        </div>
      </div>
    </div>
  );
}

export default App;