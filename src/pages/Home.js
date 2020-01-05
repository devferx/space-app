import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Apod from '../components/Apod';
import { ApiKey } from '../constants/index';

import '../assets/css/pages/Home.css';

const URL = `https://api.nasa.gov/planetary/apod?api_key=${ApiKey}`;

const Home = () => {
	const [apod, setApod] = useState();
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		axios.get(URL).then(resp => {
			setLoading(false);
			setApod(resp['data']);
		});
	}, []);
	return (
		<div>
			<Header title='Space App' desc='See the space' />
			<Navbar />
			<section className='container'>
				<Apod {...apod} loading={loading} />
			</section>
		</div>
	);
};

export default Home;
