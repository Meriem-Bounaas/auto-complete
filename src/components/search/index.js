import { UilGlobe } from '@iconscout/react-unicons'

const Search = ({ setSearch }) => {

    const onChangeHandle = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="w-1/4 h-11 flex gap-2 flex-row rounded-lg border-2 border-solid">
            <div className='flex items-center ml-2'><UilGlobe size="30" color="#C8C8C8" /></div>
            <input type="text" 
                   placeholder="  Recherche . . ." 
                   onChange={onChangeHandle}
                   className="text-lg h-full w-full rounded-lg"
            />
        </div>
    )
}

export default Search;

