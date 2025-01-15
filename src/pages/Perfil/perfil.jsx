import { Sidebar } from "../../components/sidebar/indexSBD";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { TrendItem } from "../../components/TrendItem/indexTI";
import { FollowItem } from "../../components/FollowItem/indexFI";
import { IoArrowBack } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { PiBalloonLight } from "react-icons/pi";
import { FiLink } from "react-icons/fi";
import { IoCalendarOutline } from "react-icons/io5";







function Perfil() {
    const [tweets, setTweets] = useState([]);



    return (
        <>
            <div className="flex mx-auto max-w-7xl">
                <Sidebar />
                <main className="flex-grow border-l border-r border-gray-700 max-w-xl px-4">
    <header className="flex items-center top-0 z-10 bg-twitter-background bg-opacity-80 backdrop-blur-sm pb-4 border-b border-gray-700 mb-4">
        <IoArrowBack className="text-white text-3xl ml-4"/>
        <div>
            <h2 className="px-4  text-xl font-bold">Gustavo</h2>
            <p className="px-4  text-gray-500">300 tweets</p>
        </div>
    </header>

    <div className="relative w-full h-60 bg-gray-700 mb-12">
        <img
            src="https://via.placeholder.com/600x200"
            alt="Banner do usuário"
            className="w-full h-full object-cover"
        />

        <div className="absolute bottom-[-70px] left-4">
            <img
                src="https://www.w3schools.com/howto/img_avatar2.png"
                alt="Avatar do usuário"
                className="w-40 h-40 rounded-full border-4 border-gray-900"
            />
        </div>

        <button className="absolute bottom-[-70px] right-4 border-2 border-blue-400 text-white rounded-full font-bold px-4 py-3 w-auto text-sm hover:bg-blue-400 transition duration-200">
            Editar perfil
        </button>
    </div>

           
                    <div>
                        <div className=" p-4" >
                            <h2 className="text-2xl font-bold ">Gustavo</h2>
                            <p className="text-gray-500">Gustavo</p>
                            <p  className="text-gray-300 mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa voluptates est tempore adipisci veritatis magnam! Neque, itaque blanditiis ullam explicabo aspernatur sed exercitationem ea error in maxime incidunt, officia rem.</p>
                            
                        </div>

                        <div className="grid grid-cols-2 p-4"   >
                            <p  className="flex items-center text-gray-500">
                                <span className="mr-2" ><FiMapPin /> </span >Igaporã-BA</p>
                                
                           <p  className="flex items-center text-gray-500">
                                <span className="mr-2" ><PiBalloonLight /></span >Nascido(a) em 01/01/2001</p>
                            
                            <p  className="flex items-center text-gray-500">
                                <span className="mr-2" ><FiLink /></span >https://gustavo.com.br</p>
                            <p  className="flex items-center text-gray-500">
                                <span className="mr-2" ><IoCalendarOutline /></span >Ingressou em 01/01/2001</p>
                             
                        </div>
                        <div className="flex p-4">
                            <p  className="mr-4 text-gray-300"><span  className="font-bold  mr-2">140</span>seguindo</p>
                            <p  className="mr-4 text-gray-300"><span  className="font-bold  mr-2">140</span>seguidores</p>
                            
                        </div>
                        <div className="p-4 grid grid-cols-4 text-center border-b border-gray-500">
    <p className="text-gray-200 px-4 py-3 border-b-2 border-transparent hover:border-blue-400 cursor-pointer transition-all duration-300 ease-in-out">Tweets</p>
    <p className="text-gray-200 px-4 py-3 border-b-2 border-transparent hover:border-blue-400 cursor-pointer transition-all duration-300 ease-in-out">Retweets</p>
    <p className="text-gray-200 px-4 py-3 border-b-2 border-transparent hover:border-blue-400 cursor-pointer transition-all duration-300 ease-in-out">Likes</p>
    <p className="text-gray-200 px-4 py-3 border-b-2 border-transparent hover:border-blue-400 cursor-pointer transition-all duration-300 ease-in-out">Comments</p>
</div>

                    </div>
                    
                 
                    
                </main>
                <aside className="hidden xl:block w-80 px-4">
                    <div className="sticky top-0 pt-2">
                        <div className="relative w-full">
                            <FontAwesomeIcon

                                icon={faSearch}
                                className="absolute top-1/2 left-4 text-gray-500 transform -translate-y-1/2"
                            />
                            <input
                                placeholder="Search Twitter"
                                className="w-full bg-gray-800 text-white rounded-full outline-none py-2 pl-10 pr-4"
                            />
                        </div>

                        <div className="bg-gray-800 rounded-xl mt-4 p-4">
                            <h2 className="font-bold text-xl mb-4">
                                Subscribe to Premium
                            </h2>
                            <p className="text-gray-500 mb-4">
                                Subscribe to unlock new features and if
                                eligible, receive a share of ads revenue.
                            </p>
                            <button className="bg-twitter-blue text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200">
                                Subscribe
                            </button>
                        </div>
                        <div className="bg-gray-800 rounded-xl mt-4 p-4">
                            <h2 className="font-bold text-xl mb-4">
                                Whats hPerfilening
                            </h2>
                            <TrendItem
                                category="NFL - LIFE"
                                name="Cardinals at Bills"
                                tweetCount="1,342"
                            />
                            <TrendItem
                                category="Sports - Trending"
                                name="Kyle Dugger"
                                tweetCount="1,342"
                            />
                            <TrendItem
                                category="Sports - Trending"
                                name="Anthony Richardson"
                                tweetCount="13,445"
                            />
                            <TrendItem
                                category="Sports - Trending"
                                name="Bryce Young"
                                tweetCount="5,455"
                            />
                            <TrendItem
                                category="Sports - Trending"
                                name="Daboll"
                                tweetCount="1,342"
                            />
                        </div>
                        <div className="bg-gray-800 rounded-xl mt-4 p-4">
                            <h2 className="font-bold text-xl mb-4">
                                Who to follow
                            </h2>
                            <FollowItem
                                name="Bill Gates"
                                username="BillGates"
                            />
                            <FollowItem name="Will Smith" username="WillS" />
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
}

export default Perfil;
