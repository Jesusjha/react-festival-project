import React, { useContext } from 'react';
import TicketItem from './TicketItem/TicketItem';

import { BlueBtn } from '../../ui/BlueBtn/BlueBtn';
import './Cart.css';

import CartContext from '../../context/CartContext/CartContext';
import Scrollbars from 'react-custom-scrollbars-2';
import { Link } from 'react-router-dom';

const Cart = () => {
	const { cart, priceTicket, addTicket, removeTicket, totalPrice } = useContext(CartContext);

	/* Calculating the discount. */
	let discount = totalPrice(cart) * 0.21;
	discount -= totalPrice(cart);
	const discountSign = (discount *= -1);

	return (
		<main className='cart__container'>
			<p className='cart__title--p'>YOUR PURCHASE</p>
			<section className='cart__purchase--items'>
			<Scrollbars>
				{cart.length === 0 ? (
					<div className='text-center'>
						<i className='bx bx-cart icon__cart'></i>
					</div>
				) : (
					cart.map(({ id, title, price, qty, color }) => {
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
								color={color}
							/>
						);
					})
				)}
				</Scrollbars>
			</section>
			<section className='cart__price--container'>

				{/* Calculating the discount and the total price. */}
				<article className='cart__price--money'>
          <p>{discountSign.toFixed(2)}€</p>
					<p>Tax: 21%</p>
					<p><span className="total__money--style">TOTAL:</span> {priceTicket()},00€</p>
				</article>
				<article className='cart__checkout--container'>
					<Link to='/checkout'>
						<BlueBtn styleCheck type='button'>CHECKOUT</BlueBtn>
					</Link>
				</article>
			</section>
		</main>
	);
};

export default Cart;