import NavLinks from './NavLinks'
import { FiSearch } from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className=''>
        <div className='flex justify-between items-center text-white'>
        <img src="/src/assets/logo.png" alt="logo" className='w-48 '/>
        <NavLinks />

        <div className='flex gap-8 items-center'>
        <FiSearch size={20} />
        <button className='rounded-full  border border-[#E8E8E8] text-[#CDCDCD] max-2xl:text-sm  px-12 py-2'>
            Sign in
        </button>

    </div>
        </div>
    </div>
  )
}

export default Navbar