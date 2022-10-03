import { useEffect, useState } from "react";
import Search from "./components/search";
import Suggestion from "./components/suggestion";
import './style/index.css'

function App() {
  const [data,setData]=useState()
  const [search, setSearch]=useState()

  const getCountries = async(countries) =>{
    if(countries.length){
      const response = await fetch(`https://restcountries.com/v3.1/name/${countries}`)
      const json = await response.json()
    if(json.length)
      setData(json)
    }
  }

  useEffect(()=>{
    getCountries(search)
  },[search])

  const ListSuggestion = data? data.filter(e => (e.name.common).toLowerCase().startsWith(search)).map(e => <Suggestion name={e.name.common} /> 
                                       ):[]

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 h-screen w-screen justify-center items-center flex flex-col pt-20">
      <Search setSearch={setSearch}/>
      <div className="flex flex-col w-full h-full items-center">
        {ListSuggestion}
      </div>
    </div>
  );
}

export default App;
