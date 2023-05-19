import footerLogo from '/src/assets/footerLogo.png'
import footerArrow from '/src/assets/footerArrow.png'
import { FiCodesandbox, FiMail, FiMapPin, FiPhoneCall, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  return (
    <div className="bg-black  relative mt-36">
        <div className="footer-canvas ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
            
          <path
            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
            className="shape-fill"></path>
        </svg>
      </div>
      <div className="2xl:px-80 px-44 pt-52 pb-36 text-[#8C8C8C] flex  gap-10 h-full">
        <section className='h-full w-1/4'>
            <div className="flex flex-col gap-8 items-start">
                <img src={footerLogo} alt="footerLogo" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    <span className="text-white font-semibold">
                incididunt ut labore </span>et dolore magna aliqua. Ut enim ad minim veniam</p>
                <div className="flex flex-col gap-2">
                    <p className="font-bold text-white">OPENING HOURS</p>
                    <p className="text-sm">Mon-Sat: 07.00am - 18.00pm
                    <br/>
Sunday is closed</p>
                </div>
            </div>
        </section>

        <section className='h-full w-1/4'>
            <div className="flex flex-col gap-8 items-center">
                <h2 className='text-white font-bold text-lg pl-3 border-l-4 border-purple-600'>
                LATEST VEHICLES
                </h2>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 items-center'>
                        <img src={footerArrow} alt="arrow"  className='h-full'/>
                        <p>Audi Model RX-7</p>
                    </div>
                    <div className='flex gap-2 items-center text-white font-semibold h-full'>
                        <img src={footerArrow} alt="arrow" className='h-full' />
                        <p>Audi Model RX-7</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src={footerArrow} alt="arrow" className='h-full' />
                        <p>Audi Model RX-7</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src={footerArrow} alt="arrow" className='h-full' />
                        <p>Audi Model RX-7</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src={footerArrow} alt="arrow" className='h-full' />
                        <p>Audi Model RX-7</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src={footerArrow} alt="arrow" className='h-full' />
                        <p>Audi Model RX-7</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src={footerArrow} alt="arrow" className='h-full' />
                        <p>Audi Model RX-7</p>
                    </div>
                </div>
            </div>
        </section>
        <section className='h-full w-1/4'>
            <div className="flex flex-col gap-8 items-start">
                <h2 className='text-white font-bold text-lg pl-3 border-l-4 border-purple-600'>
                LATEST NEWS
                </h2>
                <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-2 border-gray-200/50 border-b pb-8'>
                    <div className='flex gap-2'>
                        <FiTwitter className='text-white text-4xl fill-white'/>
                        <p><span className='text-blue-600'>@Mohit</span>, Lorem impum dolora
sitamet consectuerer delgado</p>


                    </div>
                    <p className='ml-7'>5mins ago</p>
                </div><div className='flex flex-col gap-2  pb-8'>
                    <div className='flex gap-2'>
                        <FiTwitter className='text-white text-4xl fill-white'/>
                        <p><span className='text-blue-600'>@Mohit</span>, Lorem impum dolora
sitamet consectuerer delgado</p>


                    </div>
                    <p className='ml-7'>5mins ago</p>
                </div>
                </div>
                
            </div>
        </section>
        <section className='h-full w-1/4'>
            <div className="flex flex-col gap-8 items-start">
                <h2 className='text-white font-bold text-lg pl-3 border-l-4 border-purple-600'>
                CONTACT US
                </h2>
                <div className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                <FiMapPin className="text-4xl"/>
                <p>Market St, 128 Loma Town, Florida
California 1367 USA</p>
                </div>
                <div className='flex gap-4 items-start'>
                <FiPhoneCall className="text-2xl"/>
                <p>Phone : 1 - 877 - 3453 - 3726</p>
                </div>
                <div className='flex gap-4'>
                <FiCodesandbox className="text-2xl"/>
                <p>FAX : 1 - 877 - 2341 - 1283</p>
                </div>
                <div className='flex gap-4'>
                <FiMail className="text-2xl"/>
                <p>Email : info@marvin.com</p>
                </div>
                </div>
                
            </div>
        </section>
      </div>
      <div className='2xl:px-80 px-44 pb-20 text-[#8C8C8C] flex justify-between'>
            <div>
            Copyright <span className='text-blue-500'>@Zizcash 2023</span> Made with love by Mohit
            </div>
            <div className='flex gap-2'>
                <p>FACEBOOK</p>
                <p className='text-blue-500'>TWITTER</p>
                <p>INSTAGRAM</p>
                <p>PINTEREST</p>
            </div>
      </div>
    </div>
  )
}

export default Footer