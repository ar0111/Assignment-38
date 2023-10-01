import { Link } from 'react-router-dom';
import './Home.css'
import img from '../../assets/Images/Group 12.jpg';

const Home = () => {
    return (
        <div className='pt-28 sm:container mx-auto my-14'>
            <div className='flex justify-between items-center'>
                <div className=''>
                    <h4 className='text-xl text-amber-500 mb-10'>Sale up to 70% off</h4>
                    <h1 className='text-6xl font-bold	'>New Collection For Fall</h1>
                    <h4 className='text-xl my-1'>Discover all new arrivals of ready-to-wear collection</h4>
                    <Link to="/order"><button className='mt-10 btn btn-warning'>Shop Now</button></Link>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;