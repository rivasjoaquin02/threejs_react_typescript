import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="box-border flex items-center justify-between p-4 text-secondary-100">
            <h1 className="text-xl">
                <Link to="/">WebPage Title</Link>
            </h1>
            <ul className="flex">
                <li className="mx-4 border-b font-semibold hover:text-gray-200">
                    <Link to="/">Inicio</Link>
                </li>
                <li className="mx-4 border-b font-semibold hover:text-gray-200">
                    <Link to="/monopolies">Monopolios</Link>
                </li>
                <li className="mx-4 border-b font-semibold hover:text-gray-200">
                    <Link to="/credits">Creditos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
