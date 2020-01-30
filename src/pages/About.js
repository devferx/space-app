import React from 'react';
import Layout from '../components/Layout';

import '../assets/css/pages/about.css';

const About = () => {
	return (
		<Layout title='About Us' desc='Contact me'>
			<div className='main-container'>
				<div className='contact'>
					<p>Contact</p>
				</div>
				<div className='container-contact'>
					<div className='caja'>
						<h3>Fernando Quinteros G.</h3>
						<p>
							<strong>Email:</strong>
						</p>
						<p>fernandoquinterosgutierrez@gmail.com</p>
						<p>
							<strong>Phone:</strong>
						</p>
						<p>+591 75479004</p>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default About;
