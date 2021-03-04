import React from "react";

//component
import { Navbar } from "./component/navbar";
import { Jumbotron } from "./component/jumbotron";
import { Cards } from "./component/cards";
import { Footer } from "./component/footer";

const carta = {
	image: "http://placehold.it/500x325.jpg",
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

				<div className="row">
					<div className="col">
						<Cards card={carta} />
					</div>
					<div className="col">
						<Cards card={carta} />
					</div>
					<div className="col">
						<Cards card={carta} />
					</div>
					<div className="col">
						<Cards card={carta} />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
