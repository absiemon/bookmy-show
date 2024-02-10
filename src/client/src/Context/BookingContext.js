import { createContext, useState, useEffect} from "react";
import axios from 'axios'

// Creating a new context.
const BookingContext = createContext({});

export const BookingProvider = ({ children }) => {

  const apiUrl = 'http://localhost:8080'
  const [time, changeTime] = useState("");  //time slot state
  const [movie, changeMovie] = useState("");  //Movie state
  const [isBooking, setIsBooking]  = useState(false)  // loading state for api call
  const [isFetching, setIsFetching]  = useState(false)  // loading state for fetching movie

  //Seat state
  const [seats, setSeats] = useState({
    A1: "",
    A2: "",
    A3: "",
    A4: "",
    D1: "",
    D2: "",
  });

  const [lastBookingDetails, setLastBookingDetails] = useState(null);  //Last movie state

  //Post request to save booking details on the backend
  const handlePostBooking = async () => {

    setIsBooking(true)

    await axios.post(`${apiUrl}/api/booking`, 
      { movie: movie, slot: time, seats: seats }
    )
    .then((response)=>{
      //On successfull response
      setIsBooking(false)
      window.alert("Booking sucessfull!!"); 
      setLastBookingDetails(response.data?.data);
      changeTime("");
      changeMovie("");
      setSeats({
        A1: "",
        A2: "",
        A3: "",
        A4: "",
        D1: "",
        D2: "",
      });
      //clearing the local storage when booking is successfull
      window.localStorage.clear();
    })
    .catch((err)=>{
      // If error occurred
      window.alert("Some error occurred!!"); 

    })
  };


  //Get request to get the last booking details from backend
  const handleGetLastBooking = async () => {

    setIsFetching(true)

    await axios.get(`${apiUrl}/api/booking`)
    .then((response)=>{
      //on successfull get request
      setIsFetching(false)
      setLastBookingDetails(response.data?.data);

    })
    .catch((err)=>{
      //If some error occurred
      window.alert("Some error occurred!!"); 
    })

  };

  useEffect(() => {
    //getting movies, slot and seats from localstorage and updating state (useful when page refreshes)
    const movie = window.localStorage.getItem("movie");
    const slot = window.localStorage.getItem("slot");
    const seats = JSON.parse(window.localStorage.getItem("seats"));

    if(movie){
      changeMovie(movie);
    }
    if(slot){
      changeTime(slot);
    }
    if(seats){
      setSeats(seats);
    }
  }, []);

  return (
    // providing all the required data to app
    <BookingContext.Provider
      value={{
        handlePostBooking,
        handleGetLastBooking,
        movie,
        changeMovie,
        time,
        changeTime,
        seats,
        setSeats,
        lastBookingDetails,
        isBooking,
        isFetching
       
      }}>
      {children}
    </BookingContext.Provider>
  );
}


export default BookingContext;