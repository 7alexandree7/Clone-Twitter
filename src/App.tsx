import Header from "./Components/Header/Header"
import SideBar from "./Components/SideBar/SideBar"

function App() {

  return (
    <div className="flex max-w-7xl m-auto">
      <SideBar />
      <main className="flex flex-grow border-l border-r border-gray-700 max-w-xl">
        <Header />
      </main>
    </div>
  )
}

export default App
