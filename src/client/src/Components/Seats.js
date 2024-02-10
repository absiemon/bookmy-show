import React, { useState, useContext } from "react";
import { allSeats } from "../data";
import BookingContext from "../Context/BookingContext";
import SeatsInput from "./SeatsInput";

const SelectSeats = () => {
  const [seat, changeSeats] = useState([]);
  const context = useContext(BookingContext);
  const { seats, setSeats } = context;

  return (
    <>
      <main className="mb-3 border border-black p-2 rounded-md">
        <h1 className="text-xl font-medium">Select Seats :-</h1>
        <div className="flex flex-wrap justify-start ">
          {allSeats.map((el, index) => {
            return (
              <SeatsInput
                seat={seat}
                key={index}
                index={index}
                changeSeats={changeSeats}
                seats={seats}
                text={el}
                setSeats={setSeats}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default SelectSeats;
