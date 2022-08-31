import React, { useState, useEffect } from 'react';
import Ticket from '../Ticket/Ticket';
import './TicketContainer.css';

const TicketContainer = ({ removeTicket, addTicket, cart, setCart, color }) => {
	const urlTicket = 'http://localhost:3333/tickets';

	const [ticket, setTicket] = useState([]);

	/* A hook that is used to fetch data from an API. */
	useEffect(() => {
		renderTicket();
	}, []);

/* When the component mounts, fetch the data from the API and set the state with the data. */
	const renderTicket = async() => {
		const response = await fetch(urlTicket);
		const result = await response.json();
		setTicket(result);
		// console.log(result[0].color)
	};


	return (
		<main className='ticket__container'>
			{ticket.map(({ id, url, title, location, price, description, image, color }) => {
				return (
					<Ticket
							key={id}
							id={id}
							url={url}
							title={title}
							location={location}
							price={price}          
							description={description}
							image={image}
							color={color}
							cart={cart}
							setCart={setCart}
							addTicket={addTicket}
							removeTicket={removeTicket}
							ticket={ticket}
					/>
				);
			})}
		</main>
	);
};

export default TicketContainer;
