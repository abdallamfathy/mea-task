import Clients from "../componets/Clients"
import Footer from "../componets/Footer"
import Hero from "../componets/Hero"
import LatestNews from "../componets/LatestNews"
import Navbar from "../componets/Navbar"
import OurServices from "../componets/OurServices"
import Partners from "../componets/Partners"
import Vehicles from "../componets/Vehicles"

const Home = () => {
  return (
    <div>
      <div className=" max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-40 h-full py-10  bg-gradient-to-br from-[#870DF0] to-[#4819E2]">
      <Navbar/>
      <Hero/>
    </div>
    <OurServices/>
    <Partners/>
    <Vehicles/>
    <Clients/>
    <LatestNews/>
    <Footer/>
    </div>
  )
}

export default Home