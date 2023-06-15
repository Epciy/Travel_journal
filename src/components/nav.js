import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";

export default function Nav(){
    return (
        <nav className="nav">
            <FontAwesomeIcon icon={faEarthEurope} className="nav--logo" />
            <h1 className="nav--title">Journey of the Soul: A Traveler's Journal</h1>
            
        </nav>
        
    );
}



