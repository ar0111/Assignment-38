import './Header.css';
import Logo from '../../assets/Logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className='header-logo'>
                    <img src={Logo}/>
                </div>
                <div className='header-links'>
                    <ul>
                        <li><a href="#">Order</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Order Review</a></li>
                        <li><a href="#">Manage Inventory</a></li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Header;