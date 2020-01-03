import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Apod from '../components/Apod';

import '../assets/css/pages/Home.css';

const Home = () => {
	return (
		<div>
			<Header title='Space App' desc='See the space' />
			<Navbar />
			<section className='container'>
				<Apod></Apod>
			</section>
		</div>
	);
};

export default Home;
