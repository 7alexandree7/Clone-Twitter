import type { PropsCategory } from "../../Types/PropsCategory/propsCategory"

const TrendItem = ({ category, name, tweetCount }: PropsCategory) => {

  return (
    <div className="py-3 bg-gray-800 cursor-pointer">
      <p className="text-gray-500 text-sm">#{category}</p>
      <p className="font-bold">{name}</p>
      {tweetCount && <p className="text-gray-500 text-sm">{tweetCount}</p>}
    </div>
  )
}

export default TrendItem
