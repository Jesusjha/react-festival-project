import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Profile from '../pages/Auth/Profile/Profile';
import Checkout from '../pages/Checkout/Checkout';
import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
import TicketDetail from '../pages/Mainstage/components/Ticket/TicketDetail/TicketDetail';
import Mainstage from '../pages/Mainstage/Mainstage';
import NotFound from '../pages/NotFound/NotFound';
import ProtectedRoutes from './ProtectedRoutes';

function RouterPath() {
	return (
		<Routes>
			/* A way to render the Navbar component on every page. */
			<Route index element={<Home />} />
			<Route path='/' element={<Navbar />}>
				<Route path='mainstage' element={<Mainstage />} />
				<Route path='mainstage/:festDetail' element={<TicketDetail />} />
				{/* <Route path='contact' element={<Contact />} /> */}
				<Route path='login' element={<Profile />} />
				/* A protected route. */
				<Route
					path='checkout'
					element={
						<ProtectedRoutes>
							<Checkout />
						</ProtectedRoutes>
					}
				/>
			</Route>
			<Route path='*' element={<NotFound replace />} />
		</Routes>
	);
}

export default RouterPath;
