import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import Home from './pages/Home';
import Mars from './pages/Mars';
import About from './pages/About';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/mars' component={Mars} />
				<Route exact path='/about' component={About} />
			</Switch>
		</Router>
	);
}

export default App;
