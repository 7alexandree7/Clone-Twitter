import Header from "./Components/Header/Header"
import SideBar from "./Components/SideBar/SideBar"
import TwitterForm from "./Components/TwitterForm/TwitterForm"

function App() {

  return (
    <div className="flex max-w-7xl m-auto">
      <SideBar />
      <main className="flex-grow border-l border-r border-gray-700 max-w-xl">
        <Header />
        <TwitterForm />
      </main>
    </div>
  )
}

export default App
