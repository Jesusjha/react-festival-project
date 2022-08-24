import './App.css';
import { CartContextProvider } from './context/CartContext/CartContext';
import RouterPath from './Routes/Router';

function App() {
	return (
		<div className='App'>
			<CartContextProvider>
				<RouterPath />
			</CartContextProvider>
		</div>
	);
}

export default App;
