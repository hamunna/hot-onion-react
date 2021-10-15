import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />

const Header = () => {
	return (
		<div>

			<Navbar collapseOnSelect expand="lg">
				<Container>
					<Navbar.Brand href="#home"><img className="w-25" src={logo} alt="" /></Navbar.Brand>

					<Navbar.Toggle aria-controls="responsive-navbar-nav" className="ms-auto md-d-flex align-items-center"/>
					<Navbar.Collapse id="responsive-navbar-nav">
						
						
						<Nav className="ms-auto d-flex align-items-center">

							<span>{shoppingCart}</span>

							<Nav.Link href="/login" className="fw-bold mx-4">Login</Nav.Link>

							<Nav.Link href="/signup">
								<button className="btn btn-danger rounded-pill fw-bold">Sign up</button>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>


		</div>
	);
};

export default Header;