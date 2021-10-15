import React from 'react';
import { Card, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const rightArrow = <FontAwesomeIcon icon={faArrowAltCircleRight} />

const WhyUsCard = ({ whyCard }) => {
	const { image, title, description, icon } = whyCard;

	return (
		<div>
			<Col>
				<Card style={{border: "none"}}>
					<Card.Img variant="top" src={image} />
					<Card.Body className="d-flex">
						<div className="mx-3"><img src={icon} alt="" /></div>
						<div>
							<Card.Title className="h6 fw-bold">{title}</Card.Title>

							<Card.Text style={{fontSize: "13px"}}>{description}</Card.Text>

							<Card.Link style={{color: 'crimson'}} href="#" className="text-decoration-none fw-bold">See more <span>{rightArrow}</span></Card.Link>
						</div>
					</Card.Body>
				</Card>
			</Col>
		</div >
	);
};

export default WhyUsCard;