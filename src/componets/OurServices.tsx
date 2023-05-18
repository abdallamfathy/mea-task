import ServiceCard from "./ServiceCard";
import key from "/src/assets/key.png";
import handKey from "/src/assets/hand-key.png";
import broker from "/src/assets/broker.png";


const OurServices = () => {
  return (
    <div className="bg-white relative py-20">
      <div className="top-canvas ">
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

      <div className="flex flex-col justify-between items-center gap-32">
          <div className="flex flex-col items-center gap-4">
            <h2 className="font-bold text-4xl">Our Services</h2>
            <p className="tracking-[.2rem] font-normal">Wij zijn de beste kraamzorg in uw regio!</p>
          </div>
          <div className="flex justify-center items-center gap-20">
          <ServiceCard 
          title="BUY NEW CAR"
          about="Ruim 50.000 moeders gingen jou
          voor  blij met onze professionele
          kraamzorg"
          Icon={key}
          />
          <ServiceCard 
          title="Sell your car"
          about="Ze worden onderwezen in onze
          eigen Kraamschool, door nze
          eigen vakmensen"
          Icon={handKey}
          />
          <ServiceCard 
          title="Sell as broker"
          about="Voor het begeleiden van moeders
          tijdens borstvoedingsmomenten
          zijn zij WHO-gecertificeerd"
          Icon={broker}
          />
          </div>
      </div>

      <div className="bottom-canvas ">
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
    </div>
  );
};

export default OurServices;
