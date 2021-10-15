import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Lunch from '../Lunch/Lunch';

const Lunches = () => {
	const [lunches, setLunches] = useState([]);
	useEffect(() => {
		fetch('meals.json')
			.then(res => res.json())
			.then(data => setLunches(data));
	}, []);

	return (
		<div className="container my-5">
			<Row xs={1} md={3} className="g-4">
				{
					lunches.map(lunch => <Lunch
						key={lunch.id}
						lunch={lunch}
					></Lunch>)
				}
			</Row>

		</div>
	);
};

export default Lunches;