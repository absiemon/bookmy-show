import LastBooking from "../Components/LastBooking";
import Movie from "../Components/Movie";
import Seats from "../Components/Seats";
import Slot from "../Components/Slot";

import BookingContext from "../Context/BookingContext";
import { useContext } from "react";

const Home = (props) => {
  const context = useContext(BookingContext);
  const {
    movie,
    time,
    seats,
    handlePostBooking,
    isFetching,
    isBooking,
  } = context;

  //Validating negative seat vlaues for any seat
  const isNegativeSeat = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) < 0) {
        return true;
      }
    }
    return false;
  };

  //Validating whether all seats has value 0
  const isZeroSeat = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) > 0) {
        return false;
      }
    }
    return true;
  };

  //validating the user selection and then making post request to save the booking details
  const handleBookNow = () => {
    if (!movie) {
      window.alert("Please select  a movie!")
    } 
    else if (!time) {
      window.alert("Please select a time slot!")
    } 
    else if (
      isNegativeSeat(seats) ||
      isZeroSeat(seats)
    ) {
      window.alert("Invalid seats!")

    } else {

      //Everything is good
      handlePostBooking();
    }
  };

  return (
    <>
      <h1 className="text-2xl font-medium ">Book that show!!</h1>
      <main className="bg-white xs:block md:flex gap-3 mt-3">
        <div>
          <div className="flex overflow-visible gap-6 ">
            <div className="flex-grow">
              <Movie />
            </div>
          </div>

          <div className="relative">
            <Slot />
            <Seats />
            <button
              onClick={() => {
                handleBookNow();
              }}
              className="border border-black px-4 py-2 rounded-md hover:bg-gray-400 w-[120px]"
            >
              {isBooking ? "Booking.." : "Book now"}
            </button>
          </div>
        </div>

        <div className="xs:mt-3 md:mt-0">
          <LastBooking isFetching={isFetching}/>
        </div>
      </main>
    </>
  );
};

export default Home;
