import React, { useContext, useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { useParams } from 'react-router-dom';
import Cart from '../../../../../components/Cart/Cart';
import CartContext from '../../../../../context/CartContext/CartContext';
import { BlueBtn } from '../../../../../ui/BlueBtn/BlueBtn';
import './TicketDetail.css';

const TicketDetail = () => {
	/* Destructuring the festDetail from the useParams hook. */
	const [detail, setDetail] = useState({});

	const params = useParams();

	const { addTicket } = useContext(CartContext);

	const { id, title, price, video, info } = detail;

	useEffect(() => {
		getDetail();
	}, []);

	const urlDetail = `http://localhost:3333/tickets/${params.festDetail}`;

	const getDetail = async () => {
		try {
			const response = await fetch(urlDetail);
			const result = await response.json();
			setDetail(result);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<main className='main__detail--container'>
			<h2 className='detail__title--h2'>{title}</h2>
			<section className='detail__info--section'>
				<section className='detail__info--container'>
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
						<BlueBtn onClick={() => addTicket(id, title, price)} className='detail__order--btn'><i className='bx bxs-shopping-bag'></i> ORDER</BlueBtn>
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