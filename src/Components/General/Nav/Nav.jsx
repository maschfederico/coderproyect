import { MdDonutLarge} from "react-icons/md";
import {Link} from 'react-router-dom';

const Nav = ({children}) => {
    return ( 
        <nav className="lime accent-2 ">
            <a href="#!" className="brand-logo black-text"><i className="material-icons left"><MdDonutLarge/></i>Fibbo</a>
            <ul className="right hide-on-med-and-down ">
                <li>
                    <Link to={"/"} className="nav-link">
                        Productos
                    </Link>
                </li>
                
                {children}
                
         </ul>
        </nav>
        );
}
export default Nav;