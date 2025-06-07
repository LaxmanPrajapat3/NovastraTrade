import logo from '../assets/logo1.png';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';


export default function NavBar(){
    return(<>
    
<nav className=' grid grid-cols-4 '>
    <div className='grid justify-center col-span-1 '>
        <Link to={'/'}>
        
    <img src="../../src/assets/logo1.png" alt="logo" className='h-20 text-center'/>
        
        </Link>
    </div>
    <div className='grid bg-green-20 grid-cols-6 items-center col-span-3 nav-options'>
    <Link to={'/sigup'} className=''>Signup</Link>
    <Link to={'/about'} className=''>About</Link>
    <Link to={'/products'}>Products</Link>
    <Link to={'/pricing'}>Pricing</Link>
    <Link to={'support'}>Support</Link>
  <i class="fa-solid fa-bars text-xl "></i>
</div>
</nav>



    </>

    )
}
