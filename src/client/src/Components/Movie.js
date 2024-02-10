import React, { useContext } from "react";
import Box from "./Box";
import { moviesList } from "../data";
import BookingContext from "../Context/BookingContext";

const SelectMovie = () => {
  const context = useContext(BookingContext);

  // Getting movie and change movie components from the context.
  const { movie, changeMovie } = context;

  const handleChangeMovie = (value) => {
    changeMovie(value);

    //setting movie in localstorage
    window.localStorage.setItem("movie", value);
  };

  return (
    <main className="border border-black rounded-md p-2">
      <h1 className="text-xl font-medium"> Select a movie!</h1>
      <div className="w-[100%] flex justify-start flex-wrap">
        {moviesList.map((el, index) => {
          return (
            <Box
              text={el}
              changeSelection={handleChangeMovie}
              data={movie}
              key={index}
            />
          );
        })}
      </div>
    </main>
  );
};

export default SelectMovie;
