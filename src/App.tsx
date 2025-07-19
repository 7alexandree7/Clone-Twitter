import Header from "./Components/Header/Header"
import SideBar from "./Components/SideBar/SideBar"
import Tweet from "./Components/Tweet/Tweet"
import TwitterForm from "./Components/TwitterForm/TwitterForm"
import { v4 as uuidv4 } from 'uuid';
import { getAvatar, getRandomImage } from "./utils/GenerateImages/generateImages";
import { useState, useEffect } from "react";
import type { newTweet } from "./Types/NewTweets/newTweets"
import generatePosts from "./utils/GeneratePosts/generatePosts";
import Aside from "./Components/Aside/Aside";

function App() {
  const [tweets, setTweets] = useState<newTweet[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      addNewTweet(generatePosts())
    }, 9000);

    return () => clearInterval(interval);
  }, [])


  const addNewTweet = (content: string) => {
    const newTweet: newTweet = {
      id: uuidv4(),
      name: "Unfast",
      username: `unfast${Math.floor(Math.random() * 100)}`,
      avatar: getAvatar(`unfast${Math.floor(Math.random() * 100)}@email.com`),
      content,
      time: new Date().toLocaleString(['pt-BR'], { hour: 'numeric', minute: 'numeric' }),
      image: getRandomImage(),
      likes: 0,
      retweets: 0,
      comments: 0,
    };
    setTweets((prevTweets) => [newTweet, ...prevTweets]);
  };


  const handleTweetAction = (id: string, action: "likes" | "comments" | "retweets") => {
    setTweets(prev =>
      prev.map(tweet =>
        tweet.id === id
          ? { ...tweet, [action]: (tweet[action] ?? 0) + 1 }
          : tweet
      )
    );
  };


  return (
    <div className="flex max-w-7xl m-auto gap-4 overflow-hidden px-2">
      <SideBar />
      <main className="flex-grow border-l border-r border-gray-700 max-w-xl">
        <Header />
        <TwitterForm onTweet={addNewTweet} />
        <div>
          {tweets.map((tweet) => (
            <Tweet
              key={tweet.id}
              tweet={tweet}
              onAction={(action) => handleTweetAction(tweet.id, action)}
            />
          ))}
        </div>
      </main>
      <Aside />
    </div>
  );
}

export default App;
