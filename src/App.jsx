import Second from "./components/Second"
import Services from "./components/Services"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import About from "./components/About"
import Reviews from "./components/Reviews"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
const App = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800"  >
      <Navbar />
      <Second />
      <Services />
      <Portfolio />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </main>)
}

export default App