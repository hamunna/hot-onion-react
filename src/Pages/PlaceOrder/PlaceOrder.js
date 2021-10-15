import React from 'react';
import { Container } from 'react-bootstrap';
import './PlaceOrder.css';

const PlaceOrder = () => {
	return (
		<Container className="mt-5">
			<div className="d-flex justify-content-between">
				<div id="delivery-detail-form">
					<h4>Edit Delivery Details</h4>

					<form>
						<input type="text" placeholder="Delivery to..." />
						<input type="text" placeholder="Street" />
						<input type="text" placeholder="Flat, suit or floor" />
						<input type="text" placeholder="Business Name" />
						<textarea placeholder="Add delivery instruction"></textarea>
						<button>Save &amp; Continue</button>
					</form>
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

export default PlaceOrder;