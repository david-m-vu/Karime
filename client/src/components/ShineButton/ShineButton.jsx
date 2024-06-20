import "./ShineButton.css";
import { Link } from "react-router-dom"
function Button() {
    return (
        <main id="shimmy" className="land">
            <Link to="/play">
            <button className="landButton">
                <span className="text">ENTER THE KARIMEVERSE</span>
                <span className="shimmer"/>
            </button>
           </Link>
        </main>
    );
}

export default Button;
