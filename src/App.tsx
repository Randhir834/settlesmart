import { Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollManager from './components/ScrollManager'
import Home from './pages/Home'
import Features from './pages/Features'
import HowItWorks from './pages/HowItWorks'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import GetStarted from './pages/GetStarted'
import InfoPage from './pages/InfoPage'
import Legal from './pages/Legal'
import VoiceAssistant from './pages/VoiceAssistant'
import Flatmates from './pages/Flatmates'
import NotFound from './pages/NotFound'

const Layout = () => (
  <div className="flex min-h-screen flex-col">
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-lift">
      Skip to content
    </a>
    <ScrollManager />
    <Navbar />
    <main id="main" className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
)

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="features" element={<Features />} />
      <Route path="voice-assistant" element={<VoiceAssistant />} />
      <Route path="flatmates" element={<Flatmates />} />
      <Route path="how-it-works" element={<HowItWorks />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="get-started" element={<GetStarted />} />
      <Route path="login" element={<InfoPage kind="login" />} />
      <Route path="careers" element={<InfoPage kind="careers" />} />
      <Route path="privacy" element={<Legal kind="privacy" />} />
      <Route path="terms" element={<Legal kind="terms" />} />
      <Route path="refunds" element={<Legal kind="refunds" />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
)

export default App
