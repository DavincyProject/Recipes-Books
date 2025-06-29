import { FaBook } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { PiForkKnifeFill } from "react-icons/pi";
import { LuCakeSlice } from "react-icons/lu";

const MiniDashboard = () => {
  return (
    <div className="py-5">
      <div className="stats shadow border border-gray-800 w-full stats-vertical lg:stats-horizontal">
        <div className="stat">
          <div className="stat-title text-xl font-bold text-white">
            Resep Tersedia
          </div>
          <div className="stat-value text-white flex items-center gap-3">
            <FaBook />5
          </div>
        </div>

        <div className="stat">
          <div className="stat-title text-xl font-bold text-white">Favorit</div>
          <div className="stat-value text-white flex items-center gap-3">
            <MdFavoriteBorder />5
          </div>
        </div>

        <div className="stat">
          <div className="stat-title text-xl font-bold text-white">
            Main Course
          </div>
          <div className="stat-value text-white flex items-center gap-3">
            <PiForkKnifeFill />3
          </div>
        </div>

        <div className="stat">
          <div className="stat-title text-xl font-bold text-white">Desert</div>
          <div className="stat-value text-white flex items-center gap-3">
            <LuCakeSlice />2
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniDashboard;
