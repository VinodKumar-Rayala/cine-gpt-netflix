import React, { useRef } from "react";
import { BG_IMG_URL } from "./constants";
import { useSelector } from "react-redux";
import lang from "./languageConstant";
import openAi from "../utils/openAI";

const GPTSearch = () => {
  const configStore = useSelector((store) => store.config);
  const searchField = useRef(null);

  const handleGptSearchClick = async () => {
    console.log(searchField.current.value, "WSETHKIJO");
    const gptQuery =
      "Act as a movie recommondation system and suggest some movies for query:" +
      searchField.current.value +
      "only give me names of 5 movies comma seperated like the example result given ahead exam result:Jalsa,Don,Pushpa,Bahubali,koi mil gaya";
    const gptResults = await openAi.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
  };

  return (
    <>
      <div className="absolute -z-50">
        <img src={BG_IMG_URL} alt="bg-img" />
      </div>
      <div className="pt-52 flex justify-center">
        <form
          className="bg-black w-1/2 grid grid-cols-12 rounded-lg "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="grid col-span-9 m-4 rounded-lg p-2"
            placeholder={
              lang[configStore.selectedLanguage].gptSearchPlaceHolder
            }
            ref={searchField}
          />
          <button
            className="bg-red-600 border rounded-lg text-white font-medium p-2 grid col-span-3 m-4"
            onClick={handleGptSearchClick}
          >
            {lang[configStore.selectedLanguage].search}
          </button>
        </form>
      </div>
    </>
  );
};

export default GPTSearch;
