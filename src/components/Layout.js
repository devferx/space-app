import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

const Layout = ({ children, title, desc }) => {
	return (
		<div>
			<Header title={title} desc={desc} />
			<Navbar />
			{children}
		</div>
	);
};

export default Layout;
