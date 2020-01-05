import React from 'react';
import '../assets/css/components/PhotoList.css';

const PhotoList = ({ photos }) => {
	return (
		<div className='list'>
			{photos ? (
				photos.map(photo => (
					<div key={photo['id']} className='list__card'>
						<div
							className='list__card--img'
							style={{ backgroundImage: `url(${photo['img_src']})` }}
						/>
						<p className='list__card--title'>
							By Rover: {photo['rover']['name']}
						</p>
					</div>
				))
			) : (
				<div>Cargado</div>
			)}
		</div>
	);
};

export default PhotoList;
