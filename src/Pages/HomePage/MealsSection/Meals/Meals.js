import React from 'react';
import { NavLink } from "react-router-dom";
import './Meals.css';

const Meals = () => {
	// const activeStyle={
	// 	fontWeight: "bold",
	// 	color: "red"
	//   }
	return (
		<div className="meals-nav text-center my-5">
			<NavLink className="meals-nav-link mx-3 text-decoration-none fw-bold" to="/breakfast">Breakfast</NavLink>
			<NavLink className="meals-nav-link mx-3 text-decoration-none fw-bold" to="/lunch">Lunch</NavLink>
			<NavLink className="meals-nav-link mx-3 text-decoration-none fw-bold" to="/dinner">Dinner</NavLink>

		</div>
	);
};

export default Meals;