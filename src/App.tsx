import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import { Footer } from "./components/footer"
import Home from "./screens/home";
import AboutUsPage from "./screens/about-us"
import CausesPage from "./screens/causes-page"
import GalleryPage from "./screens/gallery"
import EventsPage from "./screens/events"
import EventDetailsPage from "./screens/event-detail"
const App = () => {
  return (
    <div className="bg-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUsPage />} />
          <Route path='/causes' element={<CausesPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/events' element={<EventsPage />} />
          <Route path='/events/:id' element={<EventDetailsPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App