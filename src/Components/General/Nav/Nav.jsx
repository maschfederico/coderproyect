import { MdDonutLarge} from "react-icons/md";
import CartWidget from '../Cart/CartWidget'
const Nav = () => {
    return ( 
        <nav className="lime accent-2 ">
            <a href="#!" className="brand-logo black-text"><i class="material-icons left"><MdDonutLarge/></i>Fibbo</a>
            <ul className="right hide-on-med-and-down ">
                <li><a href="#top" className="black-text">Verduras</a></li>
                <li><a href="#top" className="black-text">Lácteos</a></li>
                <li><a href="#top" className="black-text">Bedidas</a></li>
                <li><a href="#top" className="black-text"><CartWidget/></a></li>
         </ul>
        </nav>
        );
}
export default Nav;