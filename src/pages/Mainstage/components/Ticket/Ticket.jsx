import React from 'react';

import { BlueBtn } from '../../../../ui/BlueBtn/BlueBtn';
import './Ticket.css';

import { Link } from 'react-router-dom';


const Ticket = ({ id, title, location, price, description, image, addTicket }) => {

	return (
		<section className='ticket__card--container'>
			<Link to={id.toString()}><img className='ticket__card--img card__img--style' src={image} alt={title} /></Link>
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
					<BlueBtn orderCheck onClick={() => addTicket(id, title, price)}>
						<i className='bx bxs-shopping-bag'></i> ORDER
					</BlueBtn>
				</article>
			</article>
		</section>
	);
};

export default Ticket;