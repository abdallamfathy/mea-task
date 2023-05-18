import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center  my-20 ">
        <HeroText />
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
