import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import logo from '../../images/logo2.png';
import initializeAuthentication from '../../Firebase/firebase.initialize';
import './SignUpTesting.css';

initializeAuthentication();

const SignUpTesting = () => {

	// Declaring States
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');

	// Creating auth
	const auth = getAuth();

	// Events Hnadling
	const handleSubmit = e => {
		e.preventDefault();
		console.log(name, email, password, confirmPassword);

		if (password.length < 6) {
			setError("Password must be 6 character long!");
			return;
			
		} else if (password !== confirmPassword) {
			setError("Password doesn't match!");
			return;
		}
		// Creating New User
		createUserWithEmailAndPassword(auth, email, password)
			.then(result => {
				const user = result.user;
				console.log(user);
			});
	}

	const handleNameChange = e => {
		setName(e.target.value)
	}

	const handleEmailChange = e => {
		setEmail(e.target.value);
	}

	const handlePasswordChange = e => {
		setPassword(e.target.value);
	}

	const handleConfirmPasswordChange = e => {
		setConfirmPassword(e.target.value);
	}

	return (
		<div className="signing-page">
			<div className="container d-flex justify-content-center mt-5">
				<div className="signing-section">
					<img src={logo} alt="" />

					<div className="form-section">
						<form onSubmit={handleSubmit}>
							<input onBlur={handleNameChange} type="text" placeholder="Name" />
							<br />

							<input onBlur={handleEmailChange} type="email" placeholder="Email" />
							<br />

							<input onBlur={handlePasswordChange} type="password" placeholder="Password" />
							<br />

							<input onBlur={handleConfirmPasswordChange} type="password" placeholder="Confirm Password" />
							<br />

							<h5 className="text-danger">{error}</h5>

							<button type="submit">Sign up</button>

						</form>

						<a className="have-account-link" href="#">Already have an account?</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpTesting;