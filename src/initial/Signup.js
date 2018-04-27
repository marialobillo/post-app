import React from 'react';
import ContactForm from './Form';

const Signup = () => {
	const functionForma = (datos) => {
		console.log(datos);
	}
	return (
		<div>
			<h2>Signup</h2>
			<ContactForm onSubmit={functionForma} />
		</div>
	);
}

export default Signup;
