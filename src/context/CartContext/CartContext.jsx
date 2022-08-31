import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext({});
const ticketStorage = JSON.parse(localStorage.getItem('ticket')) || [];

export const CartContextProvider = ({ children }) => {
	/* Creating a useState hook to added tickets to shopping cart. */
	const [cart, setCart] = useState(ticketStorage);

	/* A hook that is used to store the cart state in the local storage. */
	useEffect(() => {
		localStorage.setItem('ticket', JSON.stringify(cart));
	}, [cart]);

	//* ADD TICKET //
	/**
	 * If the ticket exists in the cart, increase the quantity by 1, otherwise add the ticket to the cart.
	 */
	const addTicket = (id, title, price, color) => {
		const ticketExist = cart.find((e) => e.id === id);

		if (ticketExist) {
			const newTicketItem = cart.map((e) =>
				e.id === id ? { ...ticketExist, qty: ticketExist.qty + 1 } : e
			);
			setCart(newTicketItem);
		} else {
			const newTicketItem = [
				...cart,
				{ id: id, title: title, price: price, color: color, qty: 1 },
			];
			setCart(newTicketItem);
		}
	};

	//! DELETE TICKET //
	/**
	 * If the quantity of the ticket is 1, then remove the ticket from the cart. Otherwise, reduce the
	 * quantity of the ticket by 1.
	 */
	const removeTicket = (id) => {
		const ticketExist = cart.find((e) => e.id === id);

		if (ticketExist.qty === 1) {
			const newTicketItem = cart.filter((e) => e.id !== id);
			setCart(newTicketItem);
		} else {
			const newTicketItem = cart.map((e) =>
				e.id === id ? { ...ticketExist, qty: ticketExist.qty - 1 } : e
			);
			setCart(newTicketItem);
		}
	};

	//? TICKET PRICE
	/**
	 * The function takes an array of objects, and returns the sum of the quantity of each object
	 * multiplied by the price of each object.
	 * @returns The total price of the items in the cart.
	 */
	const totalPrice = (arr) => {
		return arr.reduce((a, c) => a + c.qty * c.price, 0);
	};

	const priceTicket = () => {
		const itemPrice = cart.reduce((a, c) => a + c.qty * c.price, 0);
		return itemPrice;
	};

	return (
		<CartContext.Provider
			value={{
				totalPrice,
				priceTicket,
				removeTicket,
				addTicket,
				cart,
				setCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
