import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { newTweet } from "../../Types/NewTweets/newTweets"
import { faEllipsisH, faChartBar, faComment, faHeart, faRetweet, faUpload } from "@fortawesome/free-solid-svg-icons"

interface PropsTweet {
  tweet: newTweet;
  onAction: (action: "likes" | "comments" | "retweets") => void;
}

const Tweet = ({ tweet, onAction }: PropsTweet) => {
  return (
    <div className="w-full max-w-[600px] border-b border-gray-800 hover:bg-gray-700 transition duration-200 ease-in-out p-4 mx-auto">
      <div className="flex space-x-3">
        <img
          className="w-12 h-12 rounded-full flex-shrink-0"
          src={tweet.avatar}
          alt="avatar do perfil do usuário"
        />

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between py-2">
            <div className="flex flex-wrap items-center text-sm sm:text-base">
              <span className="font-bold">{tweet.name}</span>
              <span className="text-gray-500 ml-2 truncate">@{tweet.username}</span>
              <span className="text-gray-500 ml-2">{tweet.time}</span>
            </div>
            <FontAwesomeIcon icon={faEllipsisH} className="text-gray-500 cursor-pointer" />
          </div>

          <p className="text-[15px] sm:text-base break-words">{tweet.content}</p>

          {tweet.image && (
            <img
              src={tweet.image}
              alt="Imagem do tweet"
              className="w-full mt-3 rounded-xl h-auto object-cover"
            />
          )}

          <div className="flex justify-between mt-4 text-gray-50 flex-wrap gap-2">
            <div
              className="flex items-center cursor-pointer hover:text-blue-400 transition duration-200 ease-out"
              onClick={() => onAction("comments")}
            >
              <FontAwesomeIcon icon={faComment} />
              <span className="ml-2">{tweet.comments}</span>
            </div>

            <div
              className="flex items-center cursor-pointer hover:text-green-400 transition duration-200 ease-out"
              onClick={() => onAction("retweets")}
            >
              <FontAwesomeIcon icon={faRetweet} />
              <span className="ml-2">{tweet.retweets}</span>
            </div>

            <div
              className="flex items-center cursor-pointer hover:text-red-400 transition duration-200 ease-out"
              onClick={() => onAction("likes")}
            >
              <FontAwesomeIcon icon={faHeart} />
              <span className="ml-2">{tweet.likes}</span>
            </div>

            <div className="flex items-center cursor-pointer hover:text-blue-400 transition duration-200 ease-out">
              <FontAwesomeIcon icon={faChartBar} />
            </div>

            <div className="flex items-center cursor-pointer hover:text-blue-400 transition duration-200 ease-out">
              <FontAwesomeIcon icon={faUpload} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
