import { UilGlobe } from '@iconscout/react-unicons'

const Suggestion = ({name}) =>{
    return(
        <div className="w-1/4 h-fit bg-white border-b-2 border-gray-300 flex flex-row">
            <div className='justify-center'><UilGlobe size="30" color="#61DAFB" /></div>
            <div className="text-lg text-purple-600 h-full w-11/12">{name}</div>
        </div>
    )
}

export default Suggestion