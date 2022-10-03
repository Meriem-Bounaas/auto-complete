
const Suggestion = ({name,flags}) =>{
    return(
        <div className="w-full h-11 bg-white border-2 border-gray-300 flex flex-row gap-4 ">
            <div className='justify-center items-center flex'><img src={flags} className="w-7 h-5"/></div>
            <div className="text-lg text-gray-600 h-full w-11/12">{name}</div>
        </div>
        
    )
}

export default Suggestion