import './Header.css';
import Logo from '../../assets/Logo.png';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/UseContext';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = ()=>{
        logOut()
        .then(()=>{

        })
        .catch((error)=>{

        })
    }

    return (
        <div className="header">
            <div className="container">
                <div className='header-logo'>
                    <Link to="/"><img src={Logo}/></Link>
                </div>
                <div className='header-links'>
                    <ul>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/order">Order</NavLink></li>
                        <li><NavLink to="/cart">Order Review</NavLink></li>
                        <li><NavLink to="/register">Sign Up</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/profile">Profile</NavLink></li>
                        {
                            user?.uid? <li><button className='text-neutral-50 ms-5 font-bold' onClick={handleLogOut}
                            >Log Out</button></li>: undefined
                        }
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Header;