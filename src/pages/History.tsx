import React, { useEffect, useState } from "react";
import { useAppContext } from "../Context/Context";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { getPostsPaginated } from "../hooks/usePhotos";
import { RxCross1 } from "react-icons/rx";
import Photo from "../components/Photo";
import getColumns from "../util/util";
import { useInfiniteQuery } from "@tanstack/react-query";
import Error from "../components/Error";
import Loading from "../components/Loading";

const History: React.FC = () => {
  const { queryHistory, handleDeleteFromHistory } = useAppContext();
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = [...new Set(queryHistory)].reverse();
  const [rawData, setRawData] = useState<any[]>([]);

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["posts", selectedCategory],
    initialPageParam: 1,
    getNextPageParam: (prevData: any) => prevData.nextPage,
    queryFn: ({ pageParam = 1 }) =>
      getPostsPaginated(pageParam, selectedCategory),
  });

  useEffect(() => {
    if (data) {
      setRawData([...data.pages.flatMap((el) => el.posts)]);
    }
  }, [isLoading, data]);

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

  // const rawData = [...data.pages.flatMap((el) => el.posts)];
  const finalData = [...rawData.flatMap((el) => el.results)];

  const { col1, col2, col3 } = getColumns(finalData);

  return (
    <>
      {categories.length === 0 ? (
        <div className="flex justify-center items-center">
          <p className="text-3xl font-semibold pt-10 flex items-center gap-4">
            <HiOutlineFaceSmile className="w-20 h-20 text-to items-start gap-4" />
            Start by searching for a photo, Have fun!
          </p>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-20">
          <div className="flex flex-col gap-10 justify-center items-center ">
            <ul className="flex justify-center gap-10 max-w-[80%] flex-wrap">
              {categories.map((query: any) => (
                <div
                  className="flex"
                  key={query}
                  onClick={() => {
                    setSelectedCategory(query);
                  }}
                >
                  <span className="border p-8 rounded-full text-3xl bg-slate-200 cursor-pointer hover:-translate-y-1 transition-all duration-200">
                    {query}
                  </span>
                  <RxCross1
                    onClick={() => handleDeleteFromHistory(query)}
                    className="text-3xl cursor-pointer text-red-500"
                  />
                </div>
              ))}
            </ul>
            <div className="flex gap-5 w-full max-[768px]:flex-col max-[768px]:items-center">
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
      )}
    </>
  );
};

export default History;
