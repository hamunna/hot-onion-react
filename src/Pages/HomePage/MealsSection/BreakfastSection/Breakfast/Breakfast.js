import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Breakfast.css';

const Breakfast = ({ breakfast }) => {

	const { image, title, description, price, category } = breakfast;

	return (
		<>
			{category === "breakfast" &&
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

export default Breakfast;