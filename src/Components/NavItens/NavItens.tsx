import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type Props = {
    icon: IconDefinition,
    text: string
}

const NavItens = ({icon, text}: Props) => {

  return (

    <div className="flex items-center p-3 rounded-full cursor-pointer hover:bg-gray-600 transform duration-200 ease-out">
        <FontAwesomeIcon icon={icon} className="text-2xl mr-4" />
        <span className="text-md hidden xl:inline">{text}</span>
    </div>
  )
}

export default NavItens
