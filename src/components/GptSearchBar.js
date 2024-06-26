import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang)

  return (
    <div className="pt-[15%] flex justify-center">
      <form className="w-8/12 bg-black grid grid-cols-12">
        <input
          type="text"
          className="col-span-9 p-4 m-4"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 py-2 px-4 m-4 bg-red-700 rounded-lg text-white">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
