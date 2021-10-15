import React from 'react';
import logo from '../../images/logo.png';
import './Footer.css';

const Footer = () => {
	return (
		<footer>

			<div className="container">
				<div className="d-flex justify-content-between pt-5">
					<div>
						<img id="footer-logo" src={logo} alt="" />
					</div>


					<div className="d-flex gap-5">
						<div>
							<ul>
								<li><a href="#">About Online Food</a></li>

								<li><a href="#">Read Our Blog</a></li>

								<li><a href="#">Sign up to Deliver</a></li>

								<li><a href="#">Add Your Restaurant</a></li>
							</ul>
						</div>

						<div>
							<ul>
								<li><a href="#">Get help</a></li>

								<li><a href="#">Read FAQs</a></li>

								<li><a href="#">View all cities</a></li>

								<li><a href="#">Restaurants near me</a></li>
							</ul>
						</div>
					</div>
				</div>

				<div className="d-flex justify-content-between mt-5">
					<p className="text-secondary"><small>Copyright &copy; 2021 Onion Food</small></p>

					<ul className="d-flex gap-5 fs-6">
						<li><a href="#">Privacy Policy.</a></li>

						<li><a href="#">Terms of Use</a></li>

						<li><a href="#">Pricing</a></li>

					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;