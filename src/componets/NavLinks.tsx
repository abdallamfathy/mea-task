import { NavLink } from 'react-router-dom'

const Navs = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'How It Works',
        link: '/how-it-works'
    },
    {
        title: 'About Us',
        link: '/about'
    },
    {
        title: 'Help Center',
        link: '/help-center'
    
    }
]

const NavLinks = () => {
  return (
    <div className='flex md:flex-row flex-col gap-4 md:gap-8 max-md:absolute max-md:right-3 max-md:bg-purple-100 max-md:rounded-md max-md:top-[70px] max-md:text-gray-800 max-md:font-semibold max-md:p-4 transition duration-300'>
        {Navs.map((nav, index) => (
                <NavLink to={nav.link} key={index} className='md:text-[#CDCDCD]  max-2xl:text-sm   hover:text-white '>
                {nav.title}
            </NavLink>
        ))}
    </div>
  )
}

export default NavLinks