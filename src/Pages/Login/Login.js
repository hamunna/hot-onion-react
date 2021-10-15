import React from 'react';
import logo from '../../images/logo2.png';

const Login = () => {
	return (
		<div className="signing-page">
			<div className="container d-flex justify-content-center mt-5">
				<div className="signing-section">
					<img src={logo} alt="" />

					<div className="form-section">
						<form>
							<input type="email" placeholder="Email" />
							<br />

							<input type="password" placeholder="Password" />
							<br />

							<button>Log in</button>

						</form>

						<a className="have-account-link" href="#">New member?</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;