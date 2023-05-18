import NavLinks from './NavLinks'
import { FiSearch } from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className='max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-40'>
        <div className='flex justify-between items-center text-white'>
        <img src="/src/assets/logo.png" alt="logo" className='w-auto '/>
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