import React from 'react';
import { OrderBtn } from '../../../../ui/OrderBtn/OrderBtn';
import { Link } from 'react-router-dom';
import './Ticket.css';

const Ticket = ({ id, title, location, price, description, image, addTicket }) => {

	return (
		<section className='ticket__card--container'>
			<Link to={id.toString()}><img className='ticket__card--img' src={image} alt={title} /></Link>
			<article className='ticket__card__article'>
				<p className='ticket__card--p'>
					<Link className='ticket__card--title' to={id.toString()}>{title}</Link> <span className='ticket__card--location'>{location}</span>
				</p>
				<p className='ticket__card--description'>
					{description}{' '}
					<Link className='ticket__description--link' to={id.toString()}>Read more...</Link>
				</p>
				<article className='order__card--container'>
					<p className='ticket__card--price'>{price}.00€</p>
					<OrderBtn onClick={() => addTicket(id, title, price)}>
						<i className='bx bxs-shopping-bag'></i> ORDER
					</OrderBtn>
				</article>
			</article>
		</section>
	);
};

export default Ticket;