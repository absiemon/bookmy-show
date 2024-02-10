
/* eslint-disable */
import React, { useEffect } from "react";
import { useContext } from "react";
import BookingContext from "../Context/BookingContext";
import { allSeats } from "../data";

const LastBookingDetails = ({isFetching}) => {
  const context = useContext(BookingContext);

  const { handleGetLastBooking, lastBookingDetails } = context;

  useEffect(() => {

    //Getting last booking details
    handleGetLastBooking();
  }, []);

  return (
    <main className="border border-black p-3 rounded-md md:w-[360px] h-[250px]">
      <h2 className="text-xl font-medium mb-2">Last Booking Details:</h2>
      {lastBookingDetails ? (
        <>
          <div className="flex flex-wrap mb-2">
            <p className="text-lg font-medium mb-2">Seats:</p>
            <ul className="flex flex-wrap gap-2">
              {allSeats.map((seat, index) => {
                return (
                  <li className=" bg-gray-300 px-2 py-1 rounded-md" key={index}>
                    {seat}: {Number(lastBookingDetails.seats[seat])}
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="text-lg font-medium">
            Slot: <span className="font-normal">{lastBookingDetails.slot}</span>
          </p>
          <p className="text-lg font-medium">
            Movie: <span className="font-normal">{lastBookingDetails.movie}</span>
          </p>
        </>
      ) : (
        isFetching ? 
          <p className="text-md h-full flex justify-center items-center font-medium">Getting last booking...</p>
        :
          <p className="text-md h-full flex justify-center items-center">No Previous Booking Found!</p>
      )}
    </main>
  );
};

export default LastBookingDetails;
