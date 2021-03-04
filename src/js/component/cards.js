import React from "react";

//const card = {
//	image: "src/img/rigo-baby.jpg",
//	alt: "rigo",
//	title: "Hello Rigo",
//	description: "kdkdleo kdklao",
//	url: "http://wikipedia.com",
//	button: "click here"
//};


//header
export function Cards(card) {
	return (
		<div className="col">
			<div className="card" style="width: 18rem;">
				<img className="card-img-top" src={image} alt={alt} />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">
						{description}> Some quick example text to build on the
						card title and make up the bulk of the card's content.
					</p>
					<a href={url} className="btn btn-primary">
						{button}
					</a>
				</div>
			</div>
		</div>
	);
}
