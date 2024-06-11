import { Introduction } from "./components/Introduction";
import { Navbar } from "./components/Navbar"

function App() {
  return <div className="bg-neutral-50 w-screen">
      <Navbar/>
      <Introduction/>
    </div>
}

export default App;