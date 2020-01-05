import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ApiKey } from '../constants/index';
import PhotoList from '../components/PhotoList';
import Layout from '../components/Layout';
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
			<Layout title='Mars Photos' desc='See Mars'>
				<section className='photo-container'>
					<PhotoList photos={mars} />
				</section>
			</Layout>
		</div>
	);
};

export default Mars;
