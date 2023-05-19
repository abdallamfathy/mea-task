import carsSlider from '/src/assets/carsSlider.png'
import carMob from '/src/assets/carMob3.png'

const Vehicles = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-5 md:mt-64 mt-28">
          <div className="flex flex-col items-center gap-4">
            <h2 className="font-bold text-2xl md:text-4xl">Newly Listed Vehicles</h2>
            <p className="tracking-[.2rem] font-normal max-md:text-sm max-md:text-center">Wij zijn de beste kraamzorg in uw regio!</p>
          </div>
          <div className="flex justify-center items-center md:gap-20">
          <img src={carsSlider} alt="carsSlider" className='max-md:hidden'/>
          <img src={carMob} alt="carsSlider" className='md:hidden'/>
          </div>
      </div>
  )
}

export default Vehicles