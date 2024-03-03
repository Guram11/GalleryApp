// import React from "react";
import { useAppContext } from "../Context/Context";
import { PhotoSingle } from "../interfaces/interfaces";

interface Props {
  photo: PhotoSingle;
}
const Photo: React.FC<Props> = ({ photo }) => {
  const { setModalOpen, setSelectedId } = useAppContext();

  const handleClick = () => {
    setModalOpen((prev: boolean) => !prev);
    setSelectedId(photo.id);
  };

  return (
    <li
      className="hover:opacity-80 transition duration-200 cursor-pointer list-none"
      onClick={handleClick}
    >
      <img
        className="rounded-lg"
        src={photo.urls.small_s3}
        alt={photo.description}
      />
    </li>
  );
};

export default Photo;
