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
    <div className='flex gap-8'>
        {Navs.map((nav, index) => (
                <NavLink to={nav.link} key={index} className='text-[#CDCDCD]  max-2xl:text-sm   hover:text-white '>
                {nav.title}
            </NavLink>
        ))}
    </div>
  )
}

export default NavLinks