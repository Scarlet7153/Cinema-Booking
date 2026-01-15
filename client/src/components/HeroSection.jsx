import React from "react";
import { assets } from "../assets/assets";
import { CalendarIcon, ClockIcon, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

    const navigate = useNavigate();

  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 py-12 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen'>
      <img
        src={assets.marvelLogo}
        alt="Marvel Logo"
        className="max-h-11 lg:h-11 mt-20"
      />
      <h1 className="text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110">
        Vệ Binh <br />
        Dải Ngân Hà
      </h1>
      <div className="flex items-center gap-4 text-gray-300">
        <span>Hành động | Phiêu lưu | Khoa học viễn tưởng </span>
        <div>
          <CalendarIcon className="flex items-center gap-1" />2018
        </div>
        <div>
          <ClockIcon className="w-4 h-4" />2 giờ 8 phút
        </div>
      </div>
      <p className="max-w-md text-gray-300">Trong một thế giới hậu tận thế nơi các thành phố di chuyển trên bánh xe và nuốt chửng lẫn nhau để tồn tại, hai người gặp nhau ở London và cố gắng ngăn chặn một âm mưu.</p>
      <button className="flex items-center gap-2 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer" onClick={() => navigate("/movies")}>
        Xem thêm
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default HeroSection;
