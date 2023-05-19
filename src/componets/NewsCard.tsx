import React from "react";



interface NewsCardProps {
    img: string;
    title: string | null;
    desc: string | null;
    date?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({
    img,
    title,
    date,
    desc
}) => {
  return <div className="flex flex-col">
    <img src={img} alt="newsImage" />
    <div className={`flex flex-col items-start ${date !== false? 'mt-8' : null} gap-1  `}>
       <div className="border-l-2 border-  border-gray-200 pl-4">

        {
            date && <p className="text-xs text-[#BABABA] mb-2">26/06/2017, POSTED BY <span className="text-blue-600">MOHIT SAINI</span></p>
        }
        <p className="font-bold ">{title}</p>
       </div>
        <p className="text-sm font-light text-[#6a6a6a] p-4">{desc} </p>
    </div>
  </div>;
};

export default NewsCard;
