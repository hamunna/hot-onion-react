import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo2.png';
import './Signup.css';

const Signup = () => {
	const allContext = useFirebase();

	return (
		<div className="signing-page">
			<div className="container d-flex justify-content-center mt-5">
				<div className="signing-section">
					<img src={logo} alt="" />

					<div className="form-section">
						<form>
							<input type="text" placeholder="Name" />
							<br />

							<input type="email" placeholder="Email" />
							<br />

							<input type="password" placeholder="Password" />
							<br />

							<input type="password" placeholder="Confirm Password" />
							<br />

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