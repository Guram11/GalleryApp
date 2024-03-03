import React from "react";
import { useAppContext } from "../Context/Context";

const Search: React.FC = () => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  const { query, setQuery } = useAppContext();

  return (
    <form
      onSubmit={handleSubmit}
      className="search relative transition-all duration-300 flex items-center 
      focus-within:-translate-y-1 focus-within:shadow-input rounded-full "
    >
      <input
        className=" py-8 px-16 rounded-full border-0 text-3xl w-[50rem] max-[1500px]:w-[40rem] max-[1300px]:w-[35rem]
         text-[#615551] placeholder:text-[#d3c7c3] focus:outline-0  max-[800px]:text-2xl max-[800px]:px-12
          max-[800px]:w-[27rem] max-[800px]:py-6"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search over 1,000,000 photos..."
      />
    </form>
  );
};

export default Search;
