import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { newTweet } from "../../Types/NewTweets/newTweets"
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons/faEllipsisH"
import { faChartBar, faComment, faHeart, faRetweet, faUpload } from "@fortawesome/free-solid-svg-icons"

interface PropsTweet {
  tweet: newTweet;
  onAction: (action: "likes" | "comments" | "retweets") => void;
}


const Tweet = ({ tweet, onAction }: PropsTweet) => {
  return (
    <div className="border-b border-gray-800 hover:bg-gray-700 transition duration-200 ease-in-out p-4">
      <div className="flex space-x-3">
        <img className="w-12 h-12 rounded-full" src={tweet.avatar} alt="avatar do perfil do usuário" />

        <div className="flex-1">

          <div className="flex items-center justify-between py-2 px-4">
            <div>
              <span className="font-bold">{tweet.name}</span>
              <span className="text-gray-500 ml-2">@{tweet.username}</span>
              <span className="text-gray-500 ml-2">{tweet.time}</span>
            </div>
            <FontAwesomeIcon icon={faEllipsisH} className="text-gray-500 cursor-pointer" />
          </div>

          <p className="px-4 text-[15px] xl:text-base">{tweet.content}</p>
          {tweet.image && (
            <img
              src={tweet.image}
              alt="Imagem do tweet"
              className="max-w-full mt-3 rounded-xl h-auto"
            />
          )}

          <div className="flex justify-between mt-4 text-gray-50">
            <div className="flex items-center cursor-pointer hover:text-blue-400 transition duration-200 ease-out">
              <FontAwesomeIcon onClick={() => onAction("comments")} icon={faComment} />
              <span className="ml-2">{tweet.comments}</span>
            </div>

            <div className="flex items-center cursor-pointer hover:text-green-400 transition duration-200 ease-out">
              <FontAwesomeIcon onClick={() => onAction("retweets")} icon={faRetweet} />
              <span className="ml-2">{tweet.retweets}</span>
            </div>

            <div className="flex items-center cursor-pointer hover:text-red-400 transition duration-200 ease-out">
              <FontAwesomeIcon onClick={() => onAction("likes")} icon={faHeart} />
              <span className="ml-2">{tweet.likes}</span>
            </div>

            <div className="flex items-center cursor-pointer hover:text-blue-400 transition duration-200 ease-out">
              <FontAwesomeIcon icon={faChartBar} />
            </div>

            <div className="flex items-center cursor-pointer hover:text-blue-400 transition duration-200 ease-out mr-2">
              <FontAwesomeIcon icon={faUpload} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
