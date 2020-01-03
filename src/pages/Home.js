import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Home = () => {
	return (
		<div>
			<Header title='Space App' desc='See the space' />
			<Navbar />
			<section className='container'></section>
		</div>
	);
};

export default Home;
