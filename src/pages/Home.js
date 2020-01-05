import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
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
			<Layout title='Space App' desc='See the space'>
				<section className='container'>
					<Apod {...apod} loading={loading} />
				</section>
			</Layout>
		</div>
	);
};

export default Home;
