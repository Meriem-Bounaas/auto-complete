import { useEffect, useState } from "react";
import Search from "./components/search";
import Suggestion from "./components/suggestion";
import './style/index.css'

function App() {
  const [data, setData] = useState()
  const [search, setSearch] = useState("")

  const getCountries = async (countryName) => {
    try {
      if (countryName.length) {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        const json = await response.json()
        if (json.length)
          setData(json)
          console.log('fetch');
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  const deboucingFetch = () => {
    let timeOut
    return () => {
      clearTimeout(timeOut)
      timeOut = setTimeout(() => {
        getCountries(search)
      }, 1000)
    }
  }

  useEffect(() => {
    deboucingFetch()()
  }, [search])

  let ListSuggestion = []
  if (data) {
    ListSuggestion = search ? data.filter(e => (e.name.common).toLowerCase().startsWith(search.toLowerCase()))
      .map((e, index) => <Suggestion
        key={index}
        name={e.name.common}
        flags={e.flags.png}
        search={search}
      />
      ) : []
  }

  const nombreCountries = data ? ListSuggestion.length + " countries" : "0 countries"

  return (
    <div id="map" className={`items-center flex flex-col pt-20 h-screen`}>
      <Search setSearch={setSearch} />
      <div className="flex w-1/4 justify-end py-1 text-xs pr-1 text-gray-500">
        <span>{nombreCountries}</span>
      </div>
      <div className="flex flex-col w-full h-2/3 items-center">
        <div className={`flex flex-col w-1/4 bg-slate-50 items-center justify-center ${(ListSuggestion.length > 10) ? 'overflow-y-scroll' : ''} ${ListSuggestion.length ? 'border-solid border-gray-200 border-2 rounded-md p-2' : ''}`}>
          {ListSuggestion}
        </div>
      </div>
    </div>
  );
}

export default App;