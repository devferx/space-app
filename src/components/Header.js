import React from 'react';
import '../assets/css/components/Header.css';

const Header = ({ title, desc }) => (
	<header className='header'>
		<h1 className='header--title'>{title}</h1>
		<p className='header--desc'>{desc}</p>
	</header>
);

export default Header;
