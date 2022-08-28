import React, { useContext } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext/CartContext';
import { BlueBtn } from '../../ui/BlueBtn/BlueBtn';
import './Cart.css';
import TicketItem from './TicketItem/TicketItem';

const Cart = () => {
	const { cart, priceTicket, addTicket, removeTicket, totalPrice } =
		useContext(CartContext);

	let discount = totalPrice(cart) * 0.21;
	discount -= totalPrice(cart);
	const discountSign = (discount *= -1);

	return (
		<main className='cart__container'>
			<p className='cart__title--p'>YOUR PURCHASE</p>
			<section className='cart__purchase--items'>
				{cart.length === 0 ? (
					<div className='text-center'>
						<i className='bx bx-cart icon__cart'></i>
					</div>
				) : (
					cart.map(({ id, title, price, qty }) => {
						return (
							<TicketItem
								key={id}
								id={id}
								removeTicket={removeTicket}
								addTicket={addTicket}
								priceTicket={priceTicket}
								title={title}
								price={price}
								qty={qty}
							/>
						);
					})
				)}
			</section>
			<section className='cart__price--container'>
				<article className='cart__price--money'>
          <p>{discountSign}€</p>
					<p>Tax: 21%</p>
					<p><span className="total__money--style">TOTAL:</span> {priceTicket()},00€</p>
				</article>
				<article className='cart__checkout--container'>
				<Link to='/checkout'><BlueBtn styleCheck type='button'>CHECKOUT</BlueBtn></Link>

				</article>
			</section>
		</main>
	);
};

export default Cart;
/* <button className='cart__checkout--btn' type='button'>CHECKOUT</button></Link> */