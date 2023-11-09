import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Search } from './screens/Search';
import { Details } from './screens/Details';
import { NotFound } from './screens/NotFound';
import { NormalizeStyles } from './shared/NormalizeStyles';
import { Header } from './common-components/Header/Header';
export function App() {
	return (
		<BrowserRouter>
			<NormalizeStyles />
			<Header />
			<Routes>
				<Route path="/detalhes/:id" element={<Details />} />
				<Route path="/" element={<Search />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}