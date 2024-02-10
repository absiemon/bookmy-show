import React, { useContext } from "react";
import Box from "./Box";
import { slots } from "../data";
import BookingContext from "../Context/BookingContext";

const TimeShedule = () => {
  const context = useContext(BookingContext);

  // Getting time and change changeTime components from the context.
  const { time, changeTime } = context;

  const handleChangeTime = (value) => {
    changeTime(value);

    //setting slot in localstorage
    window.localStorage.setItem("slot", value);
  };

  return (
    <>
      <main className="mb-3 border border-black p-2 rounded-md mt-3">
        <h1 className="text-xl font-medium">Select a Schedule :-</h1>
        <div className="flex flex-wrap justify-start">
          {slots.map((el, index) => {
            return (
              <Box
                text={el}
                changeSelection={handleChangeTime}
                data={time}
                key={index}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default TimeShedule;
