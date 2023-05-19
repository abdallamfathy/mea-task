import blueCar from "/src/assets/blueCar.svg";
import clients from "/src/assets/clients.png";
import map from "/src/assets/map.png";
const Clients = () => {
  return (
    <div className="overflow-clip">
        <div className='flex items-center '>
            <div className='h-[705px] w-1/2 bg-gradient-to-tr from-[#870DF0] to-[#4819E2] flex items-center'>
                <img src={blueCar} alt="blueCar" />
            </div>
            <div className='w-1/2 p-20 py-36 relative'>
                <img src={clients} alt="clients" />
        <img src={map} alt="map" className="absolute translate-x-96 -translate-y-96 "/>
            </div>
        </div>
    </div>
  )
}

export default Clients