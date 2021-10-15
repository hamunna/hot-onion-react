import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Breakfast from '../Breakfast/Breakfast';

const Breakfasts = () => {
	const [breakfasts, setBreakfasts] = useState([]);
	useEffect(() => {
		fetch('meals.json')
			.then(res => res.json())
			.then(data => setBreakfasts(data));
	}, []);

	return (
		<div className="container my-5">
			<Row xs={1} md={3} className="g-4">

				{
					breakfasts.map(breakfast => <Breakfast key={breakfast.id}
						breakfast={breakfast}
					></Breakfast>)
				}
			</Row>

		</div>
	);
};

export default Breakfasts;