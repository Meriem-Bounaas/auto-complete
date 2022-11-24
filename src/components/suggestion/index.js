
const Suggestion = ({name,flags}) =>{
    
    return(
        <div className="w-full h-11 flex flex-row gap-4">
            <div className='justify-center items-center flex'><img src={flags} alt='flag' className="w-7 h-5"/></div>
            <div className="text-lg text-suggColor h-full w-11/12 flex items-center">
                <span className="h-7 w-full">{name}</span>
            </div>
        </div>  
    )
}

export default Suggestion