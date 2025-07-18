import type { PropsFollowItems } from "../../Types/PropsFollowItems/PropsFollowItems"
import { getAvatar } from "../../utils/GenerateImages/generateImages"

const FollowItems = ({ name, user }: PropsFollowItems) => {

    const avatar = getAvatar(`${name + Math.floor(Math.random() * 100)}@email.com`);
    return (
        <div className="w-full flex justify-between items-center p-2">
            <div className="flex items-center space-x-2">
                <img className="w-8 h-8 rounded-full" src={avatar} alt="user avatar" />
                <div className="flex flex-col py-2">
                    <p className="font-bold">{name}</p>
                    <p className="text-gray-500 text-sm">{user}</p>
                </div>
            </div>

            <div>
                <button className="bg-white text-black rounded-full px-4 py-2 font-semibold">Follow</button>
            </div>
        </div>
    )
}

export default FollowItems
