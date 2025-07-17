import Header from "./Components/Header/Header"
import SideBar from "./Components/SideBar/SideBar"
import Tweet from "./Components/Tweet/Tweet"
import TwitterForm from "./Components/TwitterForm/TwitterForm"
import { v4 as uuidv4 } from 'uuid';
import { getAvatar } from "./utils/GenerateImages/generateImages";
import { getRandomImage } from "./utils/GenerateImages/generateImages";
import { useState, useEffect } from "react";
import type { newTweet } from "./Types/NewTweets/newTweets"

function App() {

 
  const [tweets, setTweets] = useState<newTweet[]>([]);

  useEffect(() => {
    console.table(tweets)
  },[tweets])

  const addNewTweet = (content: string, includeImage: boolean = false) => {

    const newTweet: newTweet = {
      id: uuidv4(),
      name: "Unfast",
      username: `unfast${Math.floor(Math.random() * 100)}`,
      avatar: getAvatar(`unfast${Math.floor(Math.random() * 100)}@email.com`),
      content,
      time: new Date().toLocaleString(['pt-BR'], { hour: 'numeric', minute: 'numeric' }),
      image: includeImage ? getRandomImage() : null,
      likes: 0,
      retweets: 0,
      comments: 0
    }
    setTweets((prevTweets: newTweet[]) => [newTweet, ...prevTweets])
  }


  return (
    <div className="flex max-w-7xl m-auto gap-4 overflow-hidden">
      <SideBar />
      <main className="flex-grow border-l border-r border-gray-700 max-w-xl">
        <Header />
        <TwitterForm onTweet={(content: string) => addNewTweet(content, Math.random() > 0.5 )} />
        <div>
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
