import { UilGlobe } from '@iconscout/react-unicons'

const Search = ({setSearch}) =>{
    
    const onChangeHandle = (e) =>{
        setSearch(e.target.value)
    }


    return(
        <div className="w-1/4 h-9 bg-white flex justify-end flex-row border-b-2 border-gray-300">
            <div className='justify-center'><UilGlobe size="30" color="#61DAFB" /></div>
            <input type="text" placeholder="  Recherche . . ." className="text-lg text-purple-600 h-full w-11/12" onKeyUp={onChangeHandle}/>
        </div>
    )
}

export default Search;