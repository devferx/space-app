import React from 'react';
import '../assets/css/components/Apod.css';

const Apod = ({
	copyright,
	title,
	url,
	hdurl,
	explanation,
	loading
}) => {
	if (!loading) {
		return (
			<div className='card'>
				<div
					className='img'
					style={{ backgroundImage: `url(${url})` }}></div>
				<div className='autor'>
					{copyright && <span>by: {copyright}</span>}
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
			</div>
		);
	} else {
		return (
			<div className='cargando-container'>
				<span className='cargando-container--loading'>
					Cargando ...
				</span>
			</div>
		);
	}
};

export default Apod;
