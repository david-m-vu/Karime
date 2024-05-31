import { useEffect } from "react";


import "./Button.css";

function Button() {
    return (
        <main id="shimmy" className="sButton">
            <button>
                <span className="text">ENTER THE KARIMEVERSE</span>
                <span className="shimmer"></span>
            </button>
        </main>
    );
}

export default Button;