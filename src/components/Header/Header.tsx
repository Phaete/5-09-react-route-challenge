import {Link} from "react-router-dom";

export default function Header () {

	return (
		<div className="header">
			<h1>Rick and Morty</h1>
			<p>
				Navigation:
				<p>
					<Link to={"/"}><button>Homepage</button></Link>
					<Link to={"/characters"}><button>Characters</button></Link>
					<Link to={"/characters/creator"}><button>Character Creator</button></Link>
				</p>
			</p>
		</div>
	);
}