import { faCalendarAlt, faChartBar, faFilm, faImage, faMapMarkedAlt, faSmile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type icons = {
    id: number,
    icon: IconDefinition
}

const TwitterForm = () => {

    const iconsComponents: icons[] = [

        { id: 1, icon: faImage },
        { id: 2, icon: faFilm },
        { id: 3, icon: faChartBar },
        { id: 4, icon: faSmile },
        { id: 5, icon: faCalendarAlt },
        { id: 6, icon: faMapMarkedAlt },

    ]

    return (
        <div className="border-b border-gray-700 w-full px-4">
            <textarea
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
                    className="bg-blue-400 text-white rounded-full font-bold px-6 py-2 hover:bg-blue-600 traansition duration-200 cursor-pointer ">
                    Tweet
                </button>
            </div>
        </div>
    )
}

export default TwitterForm
