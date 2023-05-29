import Home from "@/routes/Home"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

function App() {

  return (
    <div className="max-sm:hidden">
      <Navbar />
      <Sidebar />
      <Home />
    </div>
  )
}

export default App
