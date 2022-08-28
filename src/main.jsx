import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Scrollbars from 'react-custom-scrollbars-2';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Scrollbars universal>
			<App />
		</Scrollbars>
	</BrowserRouter>
);
