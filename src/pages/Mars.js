import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { ApiKey } from '../constants/index';
import PhotoList from '../components/PhotoList';

import '../assets/css/pages/Mars.css';

const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${ApiKey}`;

const Mars = () => {
	const [mars, setMars] = useState();

	useEffect(() => {
		axios.get(URL).then(({ data }) => {
			setMars(data['photos']);
		});
	}, []);

	return (
		<div>
			<Header title='Mars Photos' desc='See Mars' />
			<Navbar />
			<section className='photo-container'>
				<PhotoList photos={mars} />
			</section>
		</div>
	);
};

export default Mars;
