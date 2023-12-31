import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Search } from './screens/Search';
import { Details } from './screens/Details';
import { NotFound } from './screens/NotFound';
import { NormalizeStyles } from './shared/NormalizeStyles';
import { Header } from './common-components/Header/Header';

import Axios from 'axios';
import { configure } from 'axios-hooks';

const axios = Axios.create({
	baseURL: `${process.env.REACT_APP_SUPER_HERO_API_BASE_URL}/${process.env.REACT_APP_SUPER_HERO_API_KEY}`,
});
configure({ axios });

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