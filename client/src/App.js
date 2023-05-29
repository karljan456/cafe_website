import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Menu from './pages/Menu';
import LocationAndHours from './pages/LocationAndHours';
import ContactUs from './pages/ContactUs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Menu />} />
        <Route exact path="/locationandhours" element={<LocationAndHours />} />
        <Route exact path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
