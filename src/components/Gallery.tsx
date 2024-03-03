import React from "react";
import Photo from "./Photo";
import { getPostsPaginated } from "../hooks/usePhotos";
import { useAppContext } from "../Context/Context";
import getColumns from "../util/util";
import { useInfiniteQuery } from "@tanstack/react-query";
import Error from "./Error";
import Loading from "./Loading";

const Gallery: React.FC = () => {
  const { queryValue } = useAppContext();

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["posts", "infinite"],
    initialPageParam: 1,
    getNextPageParam: (prevData: any) => prevData.nextPage,
    queryFn: ({ pageParam = 1 }) => getPostsPaginated(pageParam, queryValue),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  const rawData = [...data.pages.flatMap((el) => el.posts)];
  const finalData = [...rawData.flatMap((el) => el.results)];

  const { col1, col2, col3 } = getColumns(finalData);

  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <div className="flex gap-5 w-full max-[768px]:flex-col">
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
      {hasNextPage && (
        <button
          className="text-2xl font-semibold border py-8 px-16 rounded-lg bg-to hover:bg-from duration-200"
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default Gallery;
