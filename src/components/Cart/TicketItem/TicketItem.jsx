import React, { useEffect, useState } from 'react';
import CartContext from '../../../context/CartContext/CartContext';
import CounterBtn from '../CounterBtn/CounterBtn';

import './TicketItem.css';

const TicketItem = ({
	priceTicket,
	removeTicket,
	addTicket,
	id,
	title,
	price,
	qty,
	color
}) => {

	return (
		<>
			<section className='item__container' style={{backgroundImage:`url(${color})`}}>
				<article className='item__order--qty'>
					<p className='item__title'>{title}</p>

					{/* Displaying the quantity of tickets. */}
					<p className='item__type'>{qty} x Individual ticket</p>
				</article>
				<article className='item__price--btn'>
				
					{/* Multiplying the quantity of tickets by the price of the ticket */}
					<p className='item__price'>{qty * price}.00€</p>
					<div className="item__btn">
						<CounterBtn priceTicket={priceTicket} removeTicket={removeTicket}	addTicket={addTicket} qty={qty} id={id} title={title} price={price} />
					</div>
				</article>
			</section>
		</>
	);
};

export default TicketItem;
