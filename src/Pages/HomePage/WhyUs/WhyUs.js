import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import WhyUsCard from '../WhyUsCard/WhyUsCard';

const WhyUs = () => {
	const [whyUs, setWhyUs] = useState([]);
	useEffect(() => {
		fetch('whyUs.json')
			.then(res => res.json())
			.then(data => setWhyUs(data));
	}, []);

	return (
		<div className="container">
			<div>
				<h2>Why you choose us</h2>
				<p>But I must explain to you how all this mistaken idea of denouncing great
					<br />
					pleasure and praising pain was born and I will give you a complete</p>
			</div>

			<div>
				<Row xs={1} md={3} className="g-4">
					{
						whyUs.map(whyCard => <WhyUsCard
							key={whyCard.id}
							whyCard={whyCard}
						></WhyUsCard>)
					}
				</Row>
			</div>
		</div>
	);
};

export default WhyUs;