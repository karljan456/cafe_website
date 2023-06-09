import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Menu from './pages/Menu';
import LocationAndHours from './pages/LocationAndHours';
import ContactUs from './pages/ContactUs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  return (
    <Router>
      <Header />
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
