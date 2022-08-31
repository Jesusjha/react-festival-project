import React, { useContext, useEffect, useState } from 'react';
import Cart from '../../../../../components/Cart/Cart';

import { BlueBtn } from '../../../../../ui/BlueBtn/BlueBtn';
import './TicketDetail.css';

import ReactPlayer from 'react-player/youtube';
import CartContext from '../../../../../context/CartContext/CartContext';

import { useParams } from 'react-router-dom';


const TicketDetail = () => {
	
	const { addTicket } = useContext(CartContext);

	const [detail, setDetail] = useState({});
	const { id, title, price, video, info, color } = detail;

	/* Destructuring the festDetail from the useParams hook. */
	const { festDetail } = useParams();
	
	const urlDetail = `http://localhost:3333/tickets/${festDetail}`;
	const getDetail = async () => {
		try {
			const response = await fetch(urlDetail);
			const result = await response.json();
			setDetail(result);
		} catch (error) {
			console.log(error);
		}
	};
	
	useEffect(() => {
		getDetail();
	}, []);

	return (
		<main className='main__detail--container'>
			<h2 className='detail__title--h2'>{title}</h2>
			<section className='detail__info--section'>
				<section className='detail__info--container'>

					{/* A component that allows you to embed a YouTube video in your React app. */}
					<ReactPlayer
						url={`https://www.youtube.com/embed/${video}`}
						controls={true}
						width={1121}
						height={468}
					/>

					<article className='detail__info--checkout'>
						<article>
						<h4 className="detail__subtitle--span">Why should you go to {title}?</h4>
							<p className='detail__info--p'>{info}</p>
					<article className='order__container'>
						<p className='detail__price--p'>{price}.00€</p>
						<BlueBtn onClick={() => addTicket(id, title, price, color)} className='detail__order--btn'><i className='bx bxs-shopping-bag'></i> ORDER</BlueBtn>
					</article>
						</article>
						<Cart className='detail__cart' />
					</article>
				</section>
			</section>
		</main>
	);
};

export default TicketDetail;