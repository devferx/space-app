import React from 'react';
import '../assets/css/components/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
	<nav className='navbar'>
		<NavLink exact to='/' activeClassName='active'>
			<button className='navbar--link '>Home</button>
		</NavLink>
		<NavLink to='/mars' activeClassName='active'>
			<button className='navbar--link'>Robert Mars</button>
		</NavLink>
		<NavLink to='/about' activeClassName='active'>
			<button className='navbar--link'>About</button>
		</NavLink>
	</nav>
);

export default Navbar;
