import React, { useContext } from 'react'
import Cart from '../../components/Cart/Cart';
import CartContext from '../../context/CartContext/CartContext';
import CarouselFest from './components/CarouselFest/CarouselFest';
import TicketContainer from './components/TicketContainer/TicketContainer';
import './Mainstage.css';

const Mainstage = () => {

  const {cart, setCart, addTicket, removeTicket, priceTicket, totalPrice} = useContext(CartContext);

  return (
    <>
      <CarouselFest />
      <main className='main__container'>
				<p className='title__store'>ORDER YOUR TICKETS BELOW</p>
				<section className='store__container'>

					{/* Passing the cart and setCart state to the TicketContainer component. */}
					<TicketContainer addTicket={addTicket} cart={cart} setCart={setCart} />

					{/* Passing the cart and setCart state to the Cart component. */}
					<Cart totalPrice={totalPrice} priceTicket={priceTicket} removeTicket ={removeTicket} addTicket={addTicket} cart={cart} setCart={setCart} />
					
				</section>
			</main>
      </>
  )
}

export default Mainstage

/*  */