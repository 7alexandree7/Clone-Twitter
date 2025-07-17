import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { iconsComponents } from "../../Const/IconsComponents/iconsComponents"

type Props = {
    onTweet: (content: string) => void
}


const TwitterForm = ({ onTweet }: Props) => {

    const [content, setContent] = useState<string>('')

    function handleSubmit() {
       if(!content) return
       onTweet(content)
       setContent('')
    }

    return (
        <div className="border-b border-gray-700 w-full px-4">
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="bg-transparent w-full outline-none resize-none py-2"
                placeholder="What's happening?"
                maxLength={280}
            />
            <div className="flex items-center justify-between py-2">
                <div className="flex space-x-4">
                    {iconsComponents.map((icon) => {
                        return (
                            <FontAwesomeIcon key={icon.id} icon={icon.icon} className="text-blue-400 cursor-pointer" />
                        )
                    })}
                </div>
                <button
                    onClick={handleSubmit}
                    className="bg-blue-400 text-white rounded-full font-bold px-6 py-2 hover:bg-blue-600 traansition duration-200 cursor-pointer ">
                    Tweet
                </button>
            </div>
        </div>
    )
}

export default TwitterForm
