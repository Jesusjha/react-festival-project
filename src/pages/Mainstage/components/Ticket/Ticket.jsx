import React from 'react';
import { OrderBtn } from '../../../../ui/OrderBtn/OrderBtn';
import { Link } from 'react-router-dom';
import './Ticket.css';


const Ticket = ({ url, title, location, price, description, image }) => {
	return (
		<section className='ticket__card--container'>
			<img src={image} alt={title} className='ticket__card--img' />
			<article className='ticket__card__article'>
				<p className='ticket__card--title'>
					{title} <span className='ticket__card--location'>{location}</span>
				</p>
				<p className='ticket__card--description'>
					{description}{' '}
					<Link className='ticket__description--link' to={url}>Read more...</Link>
				</p>
				<article className='order__card--container'>
					<p className='ticket__card--price'>{price}.00€</p>
					<OrderBtn>
						<i className='bx bxs-shopping-bag'></i> ORDER
					</OrderBtn>
				</article>
			</article>
		</section>
	);
};

export default Ticket;