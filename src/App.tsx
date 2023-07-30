import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import { HomePage } from './Pages/Home';
import { LoginPage } from './Pages/Login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
