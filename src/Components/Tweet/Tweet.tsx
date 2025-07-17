import type { newTweet } from "../../Types/NewTweets/newTweets"

const Tweet = ({tweet}: {tweet: newTweet}) => {
  return (
    <div className="border-b border-gray-800 hover:bg-gray-700 transition duration-200 ease-in-out">
      <div>
        <img src={tweet.avatar} alt="avatar do perfil do usuário" />
      </div>
    </div>
  )
}

export default Tweet
