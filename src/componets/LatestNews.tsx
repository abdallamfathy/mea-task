import NewsCard from './NewsCard'
import news1 from '/src/assets/news1.png'
import news2 from '/src/assets/news2.png'
import news3 from '/src/assets/news3.png'
import news4 from '/src/assets/news4.png'
import news5 from '/src/assets/news5.png'



const LatestNews = () => {
  return (
    <div className='mx-96'>
        <div className="flex flex-col justify-between items-center gap-20 mt-36">
          <div className="flex flex-col items-center gap-4">
            <h2 className="font-bold text-4xl">Latest News      </h2>
            <p className="tracking-[.2rem] font-normal">Wij zijn de beste kraamzorg in uw regio!</p>
          </div>


          <div className='flex gap-10'>
            <div className='w-2/3 flex flex-col gap-10'>
                <div>
                <NewsCard 
                    title="THE BEST SPECIFICATION CAR 2017"
                    desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud `}
                    img={news5}
                    date
                    />
                </div>
                <div className='flex justify-between gap-6'>
                    <NewsCard 
                    title="VIDEO POST"
                    desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor `}
                    img={news1}
                    date
                    />
                    <NewsCard 
                    title="PROFESSIONAL BIDDING"
                    desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor `}
                    img={news2}
                    date
                    />
                </div>
            </div>
            <div className='w-1/3 flex flex-col gap-4'>
            <NewsCard
                    title=""
                    desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna `}
                    img={news3}
                    date={false}
                    /><NewsCard 
                    date
                    title="ADVANCED INTERIOR"
                    desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna `}
                    img={news4}
                    />
            </div>
          </div>
      </div>
    </div>
  )
}

export default LatestNews