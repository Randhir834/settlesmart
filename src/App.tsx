import Hero from './sections/Hero'
import Problem from './sections/Problem'
import WhyIndia from './sections/WhyIndia'
import Features from './sections/Features'
import UniqueValue from './sections/UniqueValue'
import TargetUsers from './sections/TargetUsers'
import FutureVision from './sections/FutureVision'
import Footer from './sections/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <WhyIndia />
        <Features />
        <UniqueValue />
        <TargetUsers />
        <FutureVision />
      </main>
      <Footer />
    </div>
  )
}

export default App
