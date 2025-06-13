import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import PizzaCarousel from './components/PizzaCarousel';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <>
      <Header />
      <PizzaCarousel />
      <MenuSection />
      <BookingForm />
      <Footer />
    </>
  );
}

export default App;
