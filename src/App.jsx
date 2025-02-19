import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from "./components/footer"
import { Navbar } from "./components/navbar"
import { Home } from "./pages/home"

function App() {


  return (
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
          <Footer />
      </Router>
  )
}

export default App
