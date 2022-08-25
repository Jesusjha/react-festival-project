import './App.css';
import AuthContextProvider from './context/AuthContext/AuthContext';
import { CartContextProvider } from './context/CartContext/CartContext';
import RouterPath from './Routes/Router';
function App() {
	return (
		<div className='App'>
			<AuthContextProvider>
				<CartContextProvider>
					<RouterPath />
				</CartContextProvider>
			</AuthContextProvider>
		</div>
	);
}

export default App;
