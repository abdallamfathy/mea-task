import carsSlider from '../assets/carsSlider.png'

const Vehicles = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-5 mt-64">
          <div className="flex flex-col items-center gap-4">
            <h2 className="font-bold text-4xl">Newly Listed Vehicles</h2>
            <p className="tracking-[.2rem] font-normal">Wij zijn de beste kraamzorg in uw regio!</p>
          </div>
          <div className="flex justify-center items-center gap-20">
          <img src={carsSlider} alt="carsSlider" />
          </div>
      </div>
  )
}

export default Vehicles