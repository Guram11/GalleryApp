import React from "react";
import usePhotos from "../hooks/usePhotos";
import { useAppContext } from "../Context/Context";
import Gallery from "../components/Gallery";
import Photo from "../components/Photo";
import getColumns from "../util/util";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Home: React.FC = () => {
  const { queryValue } = useAppContext();

  const { data, isLoading, isError } = usePhotos(1);

  if (isLoading) {
    return (
      <div className="fixed left-[50%] bg-white z-50 p-20 -translate-x-[50%] flex gap-5">
        <Loading />
        <span className="text-3xl">Loading...</span>
      </div>
    );
  }

  if (isError) {
    return <Error />;
  }

  const { col1, col2, col3 } = getColumns(data);

  return (
    <div className="flex justify-center">
      {queryValue ? (
        <Gallery />
      ) : (
        <div className="flex gap-5 max-[768px]:flex-col">
          <ul className="flex flex-col gap-5">
            {col1.map((photo) => (
              <Photo key={photo.id} photo={photo} />
            ))}
          </ul>
          <ul className="flex flex-col gap-5">
            {col2.map((photo) => (
              <Photo key={photo.id} photo={photo} />
            ))}
          </ul>
          <ul className="flex flex-col gap-5">
            {col3.map((photo) => (
              <Photo key={photo.id} photo={photo} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
