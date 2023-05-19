import arrow from "/src/assets/arrow.png";
const HeroText = () => {
  return (
    <div className="flex flex-col md:items-start items-center max-md:text-center gap-8 max-w-[516px] text-white">
      <h1 className="font-bold md:text-6xl text-5xl leading-normal">Fast Cash For Slow Cars</h1>
      <p className="max-w-[320px] md:text-xl text-[#FFE0ED]">
        Wij zijn zeer vertrouwde specialisten op het gebied van kraamzorg
      </p>

      <div className="flex md:flex-row flex-col md:items-center gap-6">
        <button className="flex justify-between items-center text-black rounded-full bg-white px-10 py-1">
          <p>Get an instant offer </p>
          <img
            src={arrow}
            alt="arrow"
            className="w-1/5 h-1/4  transition animate-spin -translate-x-4 duration-1000 self-end"
          />
        </button>
        <button className="border border-white rounded-full px-10 py-[10px]">
          Tell Me More
        </button>
      </div>
    </div>
  );
};

export default HeroText;
