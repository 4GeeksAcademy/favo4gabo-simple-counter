import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="d-flex justify-content-center">
			<h1 className="p-3 bg-dark text-white border border-secondary">{props.four}</h1>
			<h1 className="p-3 bg-dark text-white border border-secondary">{props.three}</h1>
			<h1 className="p-3 bg-dark text-white border border-secondary">{props.two}</h1>
			<h1 className="p-3 bg-dark text-white border border-secondary">{props.one}</h1>						
		</div>
	);
};

export default Home;
