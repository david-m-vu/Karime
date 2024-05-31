import "./Navbar.css";
import ticket from "../../assets/ticket.png";
import plus from "../../assets/plus.png";

const NavBar = () => {
    return (
        <div id="navbar" className="flex absolute flex-row w-full justify-between items-center px-10 py-12 text-[2rem] gap-x-8">
            <div className="flex-1"><div className="hover:cursor-pointer inline-block float-left">KARIME</div></div>
            <div className="flex-1 flex flex-row justify-center gap-x-8">
                <div className="relative group">
                    <div className="absolute hover:cursor-pointer transition ease-in-out duration-75 group-hover:bg-gradient-to-r from-pink-300 to-purple-400 group-hover:scale-125 inset-0 bg-clip-text text-transparent blur">PLAY</div>
                    <div className="relative hover:cursor-pointer transition ease-in-out duration-75 group-hover:scale-110 text-[#A6A0A0] group-hover:text-[#ffffff]">PLAY</div>
                </div>
                <div className="relative group">
                    <div className="absolute hover:cursor-pointer transition ease-in-out duration-75 group-hover:bg-gradient-to-r from-pink-300 to-purple-400 group-hover:scale-125 inset-0 bg-clip-text text-transparent blur">MY ALBUM</div>
                    <div className="hover:cursor-pointer group-hover:scale-110 transition duration-75 ease-in-out text-[#A6A0A0] group-hover:text-[#ffffff]">MY ALBUM</div>
                </div>
                <div className="relative group">
                    <div className="absolute hover:cursor-pointer transition ease-in-out duration-75 group-hover:bg-gradient-to-r from-pink-300 to-purple-400 group-hover:scale-125 inset-0 bg-clip-text text-transparent blur">BROWSE</div>
                    <div className="hover:cursor-pointer group-hover:scale-110 transition duration-75 ease-in-out text-[#A6A0A0] group-hover:text-[#ffffff]"> BROWSE</div>
                </div>
                
                
            </div>
            <div id="userInfo" className="flex-1 justify-end items-center">
                <div className="float-right flex-row flex justify-end w-full">
                    <div id="ticketCount" className="relative flex flex-row items-center">
                        <input readOnly={true} value={12345} className="bg-ticketBackground w-full pl-16 rounded-3xl outline-none border-2 border-white"/>
                        <img src={ticket} className="absolute z-10 top-0 p-2 left-2"></img>
                        <img src={plus} className="absolute z-10 top-0 p-4 right-2" /> 
                    </div>
                    <img id="user" className="bg-[#676767] mx-3 w-14 h-14 rounded-full">
                        
                    </img>
                </div>
            </div>
        </div>
    )
}

export default NavBar;