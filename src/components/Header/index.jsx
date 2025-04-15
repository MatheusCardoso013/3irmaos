import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="titulo">
                <h1 className="titulo__principal">PESCADOS TRÊS IRMÃOS</h1>
                <p className="slogan">Qualidade e tradição desde 1989</p>
            </div>
        </header>
    );
};

export default Header;
