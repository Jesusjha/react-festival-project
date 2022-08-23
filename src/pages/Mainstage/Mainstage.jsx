import React from 'react'
import Cart from '../../components/Cart/Cart';
import CarouselFest from './components/CarouselFest/CarouselFest';
import TicketContainer from './components/TicketContainer/TicketContainer';
import './Mainstage.css';

const Mainstage = () => {
  return (
    <>
      <CarouselFest />
      <main className="main__container">
        <p className="title__store">ORDER YOUR TICKETS BELOW</p>
        <section className="store__container">
          <TicketContainer />
          <Cart />
        </section>
      </main>
      </>
  )
}

export default Mainstage