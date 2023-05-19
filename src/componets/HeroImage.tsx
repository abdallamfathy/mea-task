import redCar from "/src/assets/red.svg"
const HeroImage = () => {
  return (
<div className="">
        <div className="border border-white rounded-full md:w-[500px] w-44 h-44 md:h-[500px] absolute -translate md:-translate-y-2 -translate-x-2 md:-translate-x-5 "/>
<div className="relative overflow-hidden">
        <div className=" bg-white rounded-full md:w-[480px] md:h-[480px]  w-44 h-44 "/>
        <img src={redCar} alt="redcar" className="absolute inset-0  animate-carAnimation " />
        
    </div>

</div>  )
}

export default HeroImage