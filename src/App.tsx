import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import { Footer } from "./components/footer"
import Home from "./screens/home"
const App = () => {
  return (
    <div className="bg-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App