import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import CartContext from '../../context/CartContext/CartContext';

import { GenericInput } from '../../ui/GenericInput/GenericInput';
import './Checkout.css';

import Swal from 'sweetalert2';

const Checkout = () => {

  const {cart, setCart, priceTicket} = useContext(CartContext);
  const navigate = useNavigate();

/* When the user clicks the button, the function will navigate to the mainstage page and reset the cart. */
  const toMainstage = () => {
    navigate('/mainstage', {
      replace: true
    });

    resetCart()
  }
  
  const resetCart = () => {
    let cartCopy = [...cart];
    cartCopy = [];
    setCart(cartCopy);
  }

/* When the user clicks the "Buy Now" button, a sweet alert will pop up and the user will be redirected to the mainstage page and the cart will be empty. */
  const buyNow = () => {
		Swal.fire({
			title: 'Thank you!',
			text: 'Your tickets will be sent to your email',
			imageUrl:
				'https://images.squarespace-cdn.com/content/v1/5f7b618b9a735b31389fb9d9/e9afb607-f107-4afc-b4ed-e62860aa1217/Tomorrowland+2018+-+6.jpg?format=2500w',
			imageWidth: 400,
			imageHeight: 300,
			imageAlt: 'happy girl',
			confirmButtonColor: '#2bb0c7',
			background: '#0c0c0c',
      fontFamily:"Inter",
		});
    toMainstage();
	};

  return (
    <main className='payment__container'>
    
    <h2 className='payment__title'>PAYMENT</h2>

    <form className='payment__container--form'>

      <section className='payment__left--input'>
        <label className='payment__title--label'>First Name</label>
        <GenericInput styleBuy type="text" name="firstname" id="firstname" />
        
        <label className='payment__title--label'>Credit Card Number</label>
        <GenericInput styleBuy type="text" name="creditcart" id="creditcard" placeholder='XXXX-XXXX-XXXX-XXXX' />
       
        <label className='payment__title--label'>Card Expiration</label>
        <GenericInput styleBuy type="text" name="expiration" id="expiration" placeholder='MM / YY' />
      </section>
    
      <section className='payment__right--input'>
        <label className='payment__title--label'>Last Name</label>
        <GenericInput styleBuy type="text" name="lastname" id="lastname" />
       
        <label className='payment__title--label'>Security Code</label>
        <GenericInput styleBuy type="text" name="cvc" id="cvc" placeholder='CVC' />
        <p className='payment__price--p'><span className="payment__price--align">{priceTicket()}.00€</span></p>
      </section>
    
    </form>
    
    <button className='payment__btn' onClick={buyNow}>BUY NOW</button>
      
  </main>
  )
}

export default Checkout