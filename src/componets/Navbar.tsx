import NavLinks from './NavLinks'
import { FiSearch } from 'react-icons/fi'
import logo from "/src/assets/logo.png";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa'


const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <div className=''>
        <div className='flex justify-between items-center text-white'>
        <Link to='/'>
        <img src={logo} alt="logo" className='md:w-48 w-36 '/>
        </Link>
        {
          show && (
            <div className='    transition delay-700 duration-300'>
              <NavLinks />
            </div>
          )
        }

        <div className='flex gap-8 items-center'>
        <FiSearch size={20} />
        <button className='rounded-full  border border-[#E8E8E8] text-[#CDCDCD] max-2xl:text-sm  px-12 py-2 hover:text-black hover:bg-white transition ease-in  duration-300 max-md:hidden'>
            Sign in
        </button>
        <FaBars size={20} onClick={() => setShow(!show)} />

    </div>
        </div>
    </div>
  )
}

export default Navbar