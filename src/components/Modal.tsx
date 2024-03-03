import { useEffect } from "react";
import { useAppContext } from "../Context/Context";
import { RxCross1 } from "react-icons/rx";
import PhotoStats from "./PhotoStats";
import { GetPhotosById } from "../hooks/usePhotos";
import Error from "./Error";
import Loading from "./Loading";

export default function Modal() {
  const {
    modalOpen,
    setModalOpen,
    selectedId,
    selectedPhoto,
    setSelectedPhoto,
  } = useAppContext();

  const { isError, isLoading, data } = GetPhotosById(selectedId);

  useEffect(
    function () {
      window.addEventListener("click", function (event) {
        if (event.target === this.document.querySelector(".backdrop")) {
          setModalOpen(false);
        }
      });
    },
    [setModalOpen]
  );

  if (isLoading) {
    return (
      <div className=" flex gap-5 fixed top-[50%] left-[50%] bg-white z-50 p-20 -translate-x-[50%] -translate-y-[50%]">
        <Loading />
        <span className="text-3xl">Loading...</span>
      </div>
    );
  }

  if (isError) {
    return <Error />;
  }

  setSelectedPhoto(data);

  return (
    <div
      className={
        modalOpen
          ? "fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pt-16 max-w-[95vw] bg-white rounded-lg px-24 shadow-modal z-50 transition-all duration-500 max-[600px]:px-4"
          : "invisible opacity-0"
      }
    >
      <button
        className="fixed right-0 top-0 p-5"
        onClick={() => setModalOpen(false)}
      >
        <RxCross1 className="text-5xl" />
      </button>
      <div>
        <img
          // className="h-full w-full"
          src={selectedPhoto.urls.small}
          alt={selectedPhoto.description}
        />
      </div>
      <PhotoStats />
    </div>
  );
}
