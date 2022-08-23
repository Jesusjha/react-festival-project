import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Checkout from '../pages/Checkout/Checkout';
import Contact from '../pages/Contact/Contact';
import Faq from '../pages/Faq/Faq';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import TicketDetail from '../pages/Mainstage/components/Ticket/TicketDetail/TicketDetail';
import Mainstage from '../pages/Mainstage/Mainstage';
import NotFound from '../pages/NotFound/NotFound';

function RouterPath() {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path='/' element={<Navbar />}>
				<Route path='mainstage' element={<Mainstage />} />
				<Route path='mainstage/:festDetail' element={<TicketDetail />} />
				<Route path='faq' element={<Faq />} />
				<Route path='contact' element={<Contact />} />
				<Route path='login' element={<Login />} />
				<Route path='checkout' element={<Checkout />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default RouterPath;
