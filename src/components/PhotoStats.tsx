import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useAppContext } from "../Context/Context";

export default function PhotoStats() {
  const { selectedPhoto } = useAppContext();

  return (
    <div className="flex gap-20 m-5 max-[400px]:gap-5">
      <div className="flex flex-col gap-6 max-[400px]:gap-3">
        <p className="text-[rgb(85,83,83)] text-3xl flex items-center gap-2 max-[600px]:text-2xl">
          <span>
            <FaEye className="text-3xl max-[600px]:text-2xl" />
          </span>
          <span>Views</span>
        </p>
        <span className="text-[#1a1a1a] font-semibold text-3xl max-[600px]:text-2xl max-[400px]:text-xl">
          {selectedPhoto.views.toLocaleString()}
        </span>
      </div>

      <div className="flex flex-col gap-6 max-[400px]:gap-3 ">
        <p className="text-[rgb(85,83,83)] text-3xl flex items-center gap-2 max-[600px]:text-2xl">
          <span>
            <MdOutlineFileDownload className="text-3xl max-[600px]:text-2xl" />
          </span>
          <span>Downloads</span>
        </p>
        <span className="text-[#1a1a1a] font-semibold text-3xl max-[600px]:text-2xl  max-[400px]:text-xl">
          {selectedPhoto.downloads.toLocaleString()}
        </span>
      </div>

      <div className="flex flex-col gap-6 max-[400px]:gap-3">
        <p className="text-[rgb(85,83,83)] text-3xl flex items-center gap-2 max-[600px]:text-2xl">
          <span>
            <IoIosHeartEmpty className="text-3xl max-[600px]:text-2xl" />
          </span>
          <span>Likes</span>
        </p>
        <span className="text-[#1a1a1a] font-semibold text-3xl max-[600px]:text-2xl  max-[400px]:text-xl">
          {selectedPhoto.likes.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
