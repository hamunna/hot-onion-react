import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import './Home.css';

import Meals from '../MealsSection/Meals/Meals';
import Breakfasts from '../../HomePage/MealsSection/BreakfastSection/Breakfasts/Breakfasts';
import Dinners from '../../HomePage/MealsSection/DinnerSection/Dinners/Dinners';
import Lunches from '../../HomePage/MealsSection/LunchSection/Lunches/Lunches';

const Home = () => {
	return (
		<div>
			<div id="hero-section" className="d-flex justify-content-center">

				<div>
					<h1 className="mb-4">Best food waiting for your belly</h1>

					<div id="search-box" className="d-flex justify-content-center">
						<input id="search-input" type="search" placeholder="Search food items" className="p-3" />
						<button id="search-btn">Search</button>
					</div>
				</div>
			</div>

			{/* Meals Section */}
			<div>
				<Router>
					<Meals></Meals>
					<Switch>

						<Route exact path="/">
							<Lunches></Lunches>
						</Route>

						<Route path="/breakfast">
							<Breakfasts></Breakfasts>
						</Route>

						<Route path="/lunch">
							<Lunches></Lunches>
						</Route>

						<Route path="/dinner">
							<Dinners></Dinners>
						</Route>
					</Switch>
					<div className="text-center my-5">
					<button className="btn btn-warning">Checkout Your Food</button>
					</div>
				</Router>
			</div>
		</div>
	);
};

export default Home;