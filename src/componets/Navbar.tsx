import NavLinks from './NavLinks'
import { FiSearch } from 'react-icons/fi'
import logo from "/src/assets/logo.png";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className=''>
        <div className='flex justify-between items-center text-white'>
        <Link to='/'>
        <img src={logo} alt="logo" className='w-48 '/>
        </Link>
        <NavLinks />

        <div className='flex gap-8 items-center'>
        <FiSearch size={20} />
        <button className='rounded-full  border border-[#E8E8E8] text-[#CDCDCD] max-2xl:text-sm  px-12 py-2 hover:text-black hover:bg-white transition ease-in  duration-300'>
            Sign in
        </button>

    </div>
        </div>
    </div>
  )
}

export default Navbar