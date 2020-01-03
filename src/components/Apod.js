import React from 'react';
import '../assets/css/components/Apod.css';

const Apod = ({ copyright, title, url, hdurl, explanation }) => (
	<div className='card'>
		{copyright ? (
			<>
				<div
					className='img'
					style={{ backgroundImage: `url(${url})` }}></div>
				<div className='autor'>
					<span>by: {copyright}</span>
				</div>
				<div className='title'>
					<span>{title}</span>
				</div>
				<div className='desc'>
					<span>{explanation}</span>
				</div>
				<div className='button-container'>
					<a
						className='button-container-link'
						href={hdurl}
						target='_blank'
						rel='noopener noreferrer'>
						View HD image
					</a>
				</div>
			</>
		) : (
			<div>
				<h1>Loading...</h1>
			</div>
		)}
	</div>
);

export default Apod;
