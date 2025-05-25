import logo from '../assets/logo1.png';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';


export default function NavBar(){
    return(<>
    
<nav className=' grid grid-cols-4 '>
    <div className='grid justify-center col-span-1 '>
    <img src="../../src/assets/logo1.png" alt="logo" className='h-20 text-center'/>
    </div>
    <div className='grid bg-green-20 grid-cols-6 items-center col-span-3 nav-options'>
    <a href="#" className=''>Signup</a>
    <a href="" className=''>About</a>
    <a href="">Products</a>
    <a href="">Pricing</a>
    <a href="">Support</a>
  <i class="fa-solid fa-bars text-xl "></i>
</div>
</nav>



    </>

    )
}
