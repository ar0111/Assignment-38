import { Link } from 'react-router-dom';
import './Nothing.css'

const Nothing = () => {
    return (
        <div className="content">
            <h2>404<span> Nothing here to see</span></h2>
            <Link to='/home'><button>Back to Home Page</button></Link>
        </div>
    );
};

export default Nothing;