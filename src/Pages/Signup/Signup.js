import React, { useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo2.png';
import './Signup.css';

const Signup = () => {

	// Declaring States
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	// Events Hnadling
	const handleSubmit = e => {
		console.log(name, email, password, confirmPassword);
		if (password !== confirmPassword) {
			document.getElementById('pass-match-error').classList.add('d-block');
			document.getElementById('pass-match-error').classList.remove('d-none');
		} else {
			document.getElementById('pass-match-error').classList.add('d-none');
			document.getElementById('pass-match-error').classList.remove('d-block');
		}
		e.preventDefault();
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

							<h5 id="pass-match-error" className="text-danger d-none">Password doesn't match!</h5>

							<button type="submit">Sign up</button>

						</form>

						<a className="have-account-link" href="#">Already have an account?</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;