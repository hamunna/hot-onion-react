import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Dinner = ({ dinner }) => {

	const { image, title, description, price, category } = dinner;		
	
	return (
		<>
			{ category === "dinner" &&
				<Col className="text-center">
					<Card className="card-self-styles">
						<Card.Img variant="top" className="w-75 mx-auto" src={image} />
						<Card.Body>
							<Card.Title>{title}</Card.Title>
							<Card.Text>{description.slice(0, 30)}</Card.Text>
							<Card.Text className="h3 fw-bold" >${price}</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			}
		</>
	);
};

export default Dinner;