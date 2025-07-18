import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TrendItem from "../TrendItem/TrendItem"
import FollowItems from "../FollowItems/FollowItems"
import { faSearch } from "@fortawesome/free-solid-svg-icons"


const Aside = () => {
  return (

      <aside className="hidden xl:block max-w-80 px-4">
          <div className="sticky top-0 pt-2">
              <div className="relative">
                  <FontAwesomeIcon icon={faSearch} className="absolute top-3 left-3 text-gray-400" />
                  <input className="bg-[#15202b] text-white rounded-full w-full py-2 pl-10 pr-4 outline-none" type="text" placeholder="Search Twitter" />
              </div>

              <div className="bg-gray-800 mt-6 rounded-2xl p-4">
                  <h2 className="font-bold text-xl mb-4">Subscribe to Premium</h2>
                  <p className="text-gray-500 mb-4">Subscribe to  unlock new features and explore exclusive content on Twitter Premium</p>
                  <button className="bg-blue-400 text-white cursor-pointer font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200">Subscribe</button>
              </div>

              <div className="bg-gray-800 mt-6 rounded-2xl p-4">
                  <h2>Whats happening</h2>
                  <TrendItem category={"NFL . LIVE"} name={"Cardinals at Bills"} />
                  <TrendItem category={"Sports . Trending"} name={"Kyle Dugger"} />
                  <TrendItem category={"Sports . Trending"} name={"Anthony Edwards"} tweetCount={"12,800 Posts"} />
                  <TrendItem category={"Sports . Trending"} name={"Bryce Young"} tweetCount={"2,163 Posts"} />
                  <TrendItem category={"Sports . Trending"} name={"Dabol"} tweetCount={"1,342 Posts"} />
              </div>

              <div className="bg-gray-800 mt-6 rounded-2xl p-4">
                  <h2 className="font-bold text-xl mb-4">Who to follow</h2>
                  <FollowItems name={"Bill Gates"} user={"@BillGates"} />
                  <FollowItems name={"Will Smith"} user={"@WillSmith"} />
                  <FollowItems name={"Steve Jobs"} user={"@SteveJobs"} />
              </div>

          </div>
      </aside>
  )
}

export default Aside
