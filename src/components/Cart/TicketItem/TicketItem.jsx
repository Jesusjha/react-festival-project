import React from 'react';
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
}) => {
	return (
		<>
			<section className='item__container'>
				<article className='item__order--qty'>
					<p className='item__title'>{title}</p>
					<p className='item__type'>{qty} x Individual ticket</p>
				</article>
				<article className='item__price--btn'>
					<p className='item__price'>{qty * price}.00€</p>
					<CounterBtn className='item__btn' priceTicket={priceTicket} removeTicket={removeTicket}	addTicket={addTicket} qty={qty} id={id} title={title} price={price} />
				</article>
			</section>
		</>
	);
};

export default TicketItem;
