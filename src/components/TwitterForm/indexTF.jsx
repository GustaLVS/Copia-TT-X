import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faChartBar, faFilm, faImage, faSmile, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

export function TwitterForm ({onTweet}) {

    const textAreaRef = useRef()

    function handleSubmite () {
        if(textAreaRef.current.value){
            onTweet(textAreaRef.current.value)
            textAreaRef.current.value = ''
        }
    }

    return (
        <div className="border-b  border-gray-800 p-4">
            <textarea
            className="w-full bg-transparent text-white text-xl resize-none outline-none"
            placeholder="What's happening ?"
            ref={textAreaRef}
            />
            <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-4">
                    <FontAwesomeIcon icon={ faImage } className="text-blue-400 cursor-pointer"/>
                    <FontAwesomeIcon icon={ faFilm } className="text-blue-400 cursor-pointer"/>
                    <FontAwesomeIcon icon={ faChartBar } className="text-blue-400 cursor-pointer"/>
                    <FontAwesomeIcon icon={ faSmile } className="text-blue-400 cursor-pointer"/>
                    <FontAwesomeIcon icon={ faCalendar } className="text-blue-400 cursor-pointer"/>
                    <FontAwesomeIcon icon={ faMapMarkedAlt } className="text-blue-400 cursor-pointer"/>
                </div>
                <button className="bg-blue-400 text-white font-bold px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200" onClick={handleSubmite}>Tweet</button>
            </div>
        </div>
    )
}