import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Dinner from '../Dinner/Dinner';

const Dinners = () => {
	const [dinners, setDinners] = useState([]);
	useEffect(() => {
		fetch('meals.json')
			.then(res => res.json())
			.then(data => setDinners(data));
	}, []);

	return (
		<div className="container my-5">
			<Row xs={1} md={3} className="g-4">
				{
					dinners.map(dinner => <Dinner
						key={dinner.id}
						dinner={dinner}
					></Dinner>)
				}
			</Row>

		</div>
	);
};

export default Dinners;