import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Checkout.css';

const Checkout = () => {

  const navigate = useNavigate();

  const toMainstage = () => {
    navigate('/mainstage', {
      replace: true
    });
  }

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
	};

  return (
    <main className='payment__container'>
    
    <h2 className='payment__title'>PAYMENT</h2>

    <form className='payment__container--form'>

      <section className='payment__left--input'>
        <input type="text" name="firstname" id="firstname" />
        <label className='payment__title--label'>First Name</label>
        
        <input type="text" name="creditcart" id="creditcard" placeholder='XXXX-XXXX-XXXX-XXXX' />
        <label className='payment__title--label'>Credit Card Number</label>
       
        <input type="text" name="expiration" id="expiration" placeholder='MM / YY' />
        <label className='payment__title--label'>Card Expiration</label>
      </section>
    
      <section className='payment__right--input'>
        <input type="text" name="lastname" id="lastname" />
        <label className='payment__title--label'>Last Name</label>
       
        <input type="text" name="cvc" id="cvc" placeholder='CVC' />
        <label className='payment__title--label'>Security Code</label>
      </section>
    
    </form>
        {/* <p className='payment__price--p'>{priceTicket()}.00€</p> */}
    
    <button className='payment__btn' onClick={toMainstage}>BUY NOW</button>
      
  </main>
  )
}

export default Checkout