import blueCar from "/src/assets/blueCar.svg";
import clients from "/src/assets/clients.png";
import map from "/src/assets/map.png";
const Clients = () => {
  return (
    <div className="overflow-clip ">
        <div className='flex md:flex-row flex-col items-center '>
            <div className='md:h-[705px] md:w-1/2 bg-gradient-to-tr from-[#870DF0] to-[#4819E2] flex items-center'>
                <img src={blueCar} alt="blueCar" />
            </div>
            <div className='md:w-1/2 p-7 md:p-20 md:py-36 relative'>
                <img src={clients} alt="clients" />
        <img src={map} alt="map" className="absolute translate-x-[550px] inset-0 translate-y-56  "/>
            </div>
        </div>
    </div>
  )
}

export default Clients