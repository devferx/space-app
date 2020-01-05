import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
const Mars = () => {
	return (
		<div>
			<Header title='Space App' desc='See the space' />
			<Navbar />
			<h1>Desde Mars!</h1>
		</div>
	);
};

export default Mars;
