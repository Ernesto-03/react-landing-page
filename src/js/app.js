import React from "react";

//component
import { Navbar } from "./component/navbar";
import { Jumbotron } from "./component/jumbotron";
import { Cards } from "./component/cards";


const card = {
	image: "/workspace/react-hello/src/img/rigo-baby.jpg",
	alt: "rigo",
	title: "Hello Rigo",
	description: "kdkdleo kdklao",
	url: "http://wikipedia.com",
	button: "click here"
};

//Layout

export function App() {
	return (
		<div className="text-center">
			<Navbar />

			<div className="container">
				<Jumbotron />
				<Cards card={carta}/>
			</div>
		</div>
	);
}
