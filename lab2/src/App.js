import { Routes, Route } from "react-router-dom";
import CardComponent from './components/CardComponent';
import CarouselComponent from './components/CarouselComponent';
import NavbarComponent from './components/NavbarComponent';
import ReservationForm from './components/ReservationForm';
import './App.css';

// Tạo các component cho các trang
const Home = () => (
  <>
    <CarouselComponent />
    <CardComponent />
    <ReservationForm />
  </>
);

const About = () => <div className="container p-5"><h1>About Us</h1><p>This is the About page.</p></div>;
const Contact = () => <div className="container p-5"><h1>Contact</h1><p>This is the Contact page.</p></div>;

function App() {
  return (
    <div className="bg-light">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;