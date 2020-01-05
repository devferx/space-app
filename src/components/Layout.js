import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

const Layout = ({ children, title, desc }) => {
	return (
		<>
			<Header title={title} desc={desc} />
			<Navbar />
			{children}
		</>
	);
};

export default Layout;
