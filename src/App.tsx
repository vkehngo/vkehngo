import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import { Footer } from "./components/footer"
import Home from "./screens/home"
import SmoothScrollWrapper from "./lib/SmoothScrollWrapper"
const App = () => {
  return (
    <div className="bg-white">
      <SmoothScrollWrapper>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </SmoothScrollWrapper>
    </div>
  )
}

export default App