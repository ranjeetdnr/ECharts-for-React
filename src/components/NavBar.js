import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div>
            <ul className="nav-ul">
                <li><Link to="/"><button className="link-btn">Scatter Plot</button></Link></li>
                <li><Link to="/bargraph"><button className="link-btn">Bar Graph</button></Link></li>
            </ul>
        </div>
    );
}
export default NavBar;