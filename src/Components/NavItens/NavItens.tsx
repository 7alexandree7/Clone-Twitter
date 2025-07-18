import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type Props = {
    icon: IconDefinition,
    text: string | undefined
}

const NavItens = ({icon, text}: Props) => {

  return (

    <div className="w-full flex items-center  p-3 rounded-full cursor-pointer hover:bg-gray-600 transform duration-200 ease-out">
      <div className="flex items-center justify-center">
        <FontAwesomeIcon icon={icon} className="text-xl mr-4" />
        <span className="text-md hidden xl:inline">{text}</span>
      </div>

    </div>
  )
}

export default NavItens
