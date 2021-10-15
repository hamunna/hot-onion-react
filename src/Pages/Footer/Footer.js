import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../images/logo.png';

const Footer = () => {
	return (
		<div style={{ backgroundColor: "#323232", heigh: "300px" }}>
			<Container>

				
				<div>
					<Row xs={1} md={8} className="g-4">
						<Col>
							<img src={logo} alt="" />
						</Col>
					</Row>
				</div>

				<div></div>
			</Container>
		</div>
	);
};

export default Footer;