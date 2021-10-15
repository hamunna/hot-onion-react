import React from 'react';
import { Container } from 'react-bootstrap';

const Delivered = () => {
	return (
		<Container className="mt-5">
			<div className="d-flex justify-content-between">
				<div id="delivery-detail-form">
					
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.0262286888483!2d91.8658047144783!3d24.897086949921317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750553f7d068f95%3A0xf0f02fdd8cd46b9b!2sAl%20Hamra%20Shopping%20mall!5e0!3m2!1sen!2sbd!4v1634320918645!5m2!1sen!2sbd" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>
					
				</div>

				<div className="order-detail-right">
					{/* Basic Information Part */}
					<div>
						<p>From <strong>Gulshan Plaza Restaura GPR</strong></p>
						<p>Arriving in <strong>20 - 30 min</strong></p>
						<p>107 rd no 8</p>
					</div>

					<div className="ordered-item-list">

						<div className="ordered-item d-flex align-items-center gap-5">
							<div>
								<img src="https://i.ibb.co/QMNg9JH/lunch4.png" alt="" />
							</div>

							<div>
								<h5>Butter Naan</h5>
								<h3 className="fw-bold brand-text-color">$40</h3>
								<p>Delivery free</p>
							</div>

							<div className="order-quantity-contorl">
								<button>-</button>
								<input type="number" value="01" />
								<button>+</button>
							</div>
						</div>
						
						<div className="ordered-item d-flex align-items-center gap-5">
							<div>
								<img src="https://i.ibb.co/QMNg9JH/lunch4.png" alt="" />
							</div>

							<div>
								<h5>Butter Naan</h5>
								<h2 className="fw-bold brand-text-color">$40</h2>
								<p>Delivery free</p>
							</div>

							<div className="order-quantity-contorl">
								<button>-</button>
								<input type="number" value="01" />
								<button>+</button>
							</div>
						</div>

					</div>

					<div id="order-pricing">
						<table>
							<tr>
								<td>Subtotal &bullet; 4 item :</td>
								<td>$320.00</td>
							</tr>
							<tr>
								<td>Tax :</td>
								<td>$5.00</td>
							</tr>
							<tr>
								<td>Delivery fee :</td>
								<td>$2.00</td>
							</tr>
							<tr>
								<td><h4>Total :</h4></td>
								<td><h4>$327.00</h4></td>
							</tr>
						</table>
					</div>

					<button className="place-order-btn">Place Order</button>
				</div>
			</div>
		</Container>
	);
};

export default Delivered;