import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Menu from './components/Menu.jsx'
import Gallery from './components/Gallery.jsx'
import Reviews from './components/Reviews.jsx'
import Location from './components/Location.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import { useTheme } from './hooks/useTheme.js'

function App() {
  const [dark, setDark] = useTheme()

  return (
    <div className="bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <Menu />
        <Gallery />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App