import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import { Footer } from "./components/footer"
import Home from "./screens/home";
import AboutUsPage from "./screens/about-us"
import CausesPage from "./screens/causes-page"
import GalleryPage from "./screens/gallery"
import EventsPage from "./screens/events"
import EventDetailsPage from "./screens/event-detail"
import ContactPage from "./screens/contact-us";
import VideosPage from "./screens/videosPage";
import { FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  return (
    <div className="bg-white">
      <BrowserRouter>
      <ScrollToTop />
        <div className="w-full h-[35px] md:h-[35px] relative bg-secondary flex items-center justify-between px-4">
          <p className="text-sm md:text-md text-white">Viklang Kendra & Education Hub</p>
          <div className="flex items-center justify-end gap-2">
            <a href="https://www.youtube.com/channel/UCwaEY6vypWr5tMeDj6XodwA" target="_blank" rel="noopener noreferrer">
              <FaYoutube color="white" size={20} />
            </a>
            <a href="https://www.instagram.com/vkeh.offical/" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram color="white" size={20} />
            </a>
            <a href="https://www.facebook.com/vkeh.offical/" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare color="white" size={20} />
            </a>
          </div>
        </div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUsPage />} />
          <Route path='/causes' element={<CausesPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/events' element={<EventsPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/videos' element={<VideosPage />} />
          <Route path='/events/:id' element={<EventDetailsPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App