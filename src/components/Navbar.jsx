import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faCakeCandles } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
    return (
        <nav>
            <section className='links'>
                <FontAwesomeIcon icon={faHouse} /><Link to="/" className="text-white ms-3 text-decoration-none">Home</Link>
                <FontAwesomeIcon icon={faBook} /><Link to="/contacto" className="text-white ms-3 text-decoration-none">Contacto</Link>
            </section>
            <section className='logo'>
                <h2>Happy Cake</h2><FontAwesomeIcon icon={faCakeCandles} />
            </section>
        </nav>
    );
}

export default Navbar;
