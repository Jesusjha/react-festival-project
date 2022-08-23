import React from 'react';
import './CounterBtn.css';

const CounterBtn = () => {
	return (
		<main className='counter__btn--container'>
			<button className='counter--btn'>
				<i class='bx bxs-minus-square'></i>
			</button>
			<button className='counter--btn'>
				<i className='bx bxs-plus-square'></i>
			</button>
		</main>
	);
};

export default CounterBtn;
