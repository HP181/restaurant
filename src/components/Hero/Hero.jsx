import React from 'react';
import './Hero.css';
import banner from '../../assets/bannerbackground.png';
import { useFoodCartContext } from '../../context/RedOnionContext';
const Hero = () => {
	
	return (
		<section className="hero">
			<img src="https://i.pinimg.com/originals/f0/98/b1/f098b1474bc51d35964b6faa032605dd.jpg" alt="" className="banner" />
			<div className="banner-info">
				<h1>Enjoy The Delicious Test Of Our Restaurant</h1>
				<div className="search-food">
					<input type="text" name="" id="search" placeholder='Search food items...'
			
					/>
					<button className="search-btn">Search</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
