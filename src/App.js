import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './initial/Home';
import Login from './initial/Login';
import Signup from './initial/Signup';

const Header = () => {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/login">Login</Link>
			<Link to="/signup">Signup</Link>

		</nav>
	);
}


const App = () => {
	return (
		<Router>
			<div>
				<Header />
				<Route exact path="/" component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />

				<h2>Dentro de App</h2>
			</div>
		</Router>
	);
}
export default App;
