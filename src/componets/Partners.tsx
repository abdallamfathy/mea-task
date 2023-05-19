import partner1 from "/src/assets/partner1.png";
import clubCar from "/src/assets/club-car.png";
import robinSubaro from "/src/assets/robin-subaru.png";
import usaCars from "/src/assets/usa-cars.png";
import bigCar from "/src/assets/bigCar.png";
const Partners = () => {
  return (
    <>
    <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-40 h-full py-40 pb-64 bg-gradient-to-br from-[#870DF0] to-[#4819E2]">
      <div className="flex flex-col justify-center items-center gap-8 text-center text-white ">
        <h1 className="w-[1100px] font-semibold italic text-lg">
          We are the largest website that deals with buying & selling cars in
          the world, Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud
        </h1>
        <p className="text-sm">DAVID S, MARVIN OWNER</p>
      </div>
    </div>
      <div className="h-36 bg-white flex  justify-between mx-16 items-center">
          <div className="flex items-center justify-start gap-20">
            <img src={partner1} alt="partnerlogo" />
            <img src={clubCar} alt="club-car" />
          </div>
          <div className="flex items-center justify-start gap-20">
            <img src={robinSubaro} alt="subaro" />
            <img src={usaCars} alt="usa-car" />
          </div>
      </div>
      <div className="flex justify-center items-start">
      <img src={bigCar} alt="bigCar" className="inset-0 -translate-y-[400px] " />

      </div>
    </>
  );
};

export default Partners;