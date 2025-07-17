import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { iconsSideBar } from "../../Const/IconsSideBar/iconsSideBar"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

import NavItens from "../NavItens/NavItens"


const SideBar = () => {

    return (
        <div className="w-20 xl:w-64 sticky top-0 px-2 h-screen">
            <FontAwesomeIcon icon={faTwitter} className="text-3xl text-blue-400 m-4" />
            <div className="w-full flex ">
                <nav className="flex flex-col justify-center intems-center ">
                    {iconsSideBar.map((icon) => (
                        <NavItens key={icon.id} icon={icon.icon} text={icon.text} />
                    ))}
                </nav>
            </div>

            <button className="bg-blue-400 text-white rounded-full w-full  font-bold px-2 py-2 mt-4 cursor-pointer hidden xl:inline">
                <span className="hidden xl:inline">Twitter</span>
            </button>
        </div>
    )
}

export default SideBar