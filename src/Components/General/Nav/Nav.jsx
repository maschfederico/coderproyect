import './Nav.css';
import logo from './logo.svg'
function Nav() {
   
    return (
        <header>
            <div className="container">
            <img src={logo} className="Nav-logo" alt="logo" />
                <h1>Fibbo</h1>
                <nav>
                    <ul>
                        <li>
                        <a href="#top">Vegetales</a>
                        </li>
                        <li>
                        <a href="#top">Lacteos</a>
                        </li>
                        <li>
                        <a href="#top">Bebidas</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Nav;