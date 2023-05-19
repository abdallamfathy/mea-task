import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className="">
      <div className="flex md:flex-row flex-col justify-between items-center max-md:gap-10 my-20 ">
        <HeroText />
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
