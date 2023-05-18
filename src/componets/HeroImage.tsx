
const HeroImage = () => {
  return (
    <div className="relative">
        <div className="border border-white rounded-full w-[500px] h-[500px] absolute -translate-y-2 -translate-x-5 "/>
        <div className=" bg-white rounded-full w-[480px] h-[480px] "/>
        <img src="/src/assets/red.svg" alt="redcar" className="absolute inset-0 animate-carAnimation " />
        
    </div>
  )
}

export default HeroImage