import { UilGlobe } from '@iconscout/react-unicons'

const Search = ({setSearch}) =>{
    
    const onChangeHandle = (e) =>{
        setSearch(e.target.value)
    }


    return(
        <div className="w-1/4 h-11  bg-white flex justify-end flex-row  gap-4 rounded-lg shadow">
            <div className='justify-center flex items-center'><UilGlobe size="30" color="#C8C8C8" /></div>
            <input type="text" placeholder="  Recherche . . ." className="text-lg text-gray-600 h-full w-11/12 rounded-lg" onKeyUp={onChangeHandle}/>
        </div>
    )
}

export default Search;

