import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faHome, faHashtag, faBell, faEnvelope, faBookmark, faUserFriends, faUser, faEllipsis } from "@fortawesome/free-solid-svg-icons"
import NavItens from "../NavItens/NavItens"

const SideBar = () => {

    return (
        <div className="w-20 xl:w-64 sticky top-0 px-2 h-screen">
            <FontAwesomeIcon icon={faTwitter} className="text-3xl text-blue-400 m-4" />
            <nav>
                <NavItens icon={faHome} text={"Home"} />
                <NavItens icon={faHashtag} text={"Explore"} />
                <NavItens icon={faBell} text={"Notifications"} />
                <NavItens icon={faEnvelope} text={"Messages"} />
                <NavItens icon={faBookmark} text={"Bookmarks"} />
                <NavItens icon={faUserFriends} text={"Communities"} />
                <NavItens icon={faTwitter} text={"Premium"} />
                <NavItens icon={faUser} text={"Profile"} />
                <NavItens icon={faEllipsis} text={"More"} />
            </nav>

            <button className="bg-blue-400 text-white rounded-full w-full  font-bold px-2 py-2 mt-4">
                <span className="hidden xl:inline">Twitter</span>
            </button>


        </div>
    )
}

export default SideBar