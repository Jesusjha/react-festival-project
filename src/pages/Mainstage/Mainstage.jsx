import React from 'react'
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
        </section>
      </main>
    </>
  )
}

export default Mainstage