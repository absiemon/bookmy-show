import React from "react";
import "../Css/SeatsInput.css";

const SeatsInput = ({
  seats, setSeats,
  changeSeats,
  seat,
  text,
  index,
}) => {
  //changing the seats according to user input
  const change_seats = (e) => {
    setSeats({ ...seats, [e.target.name]: Number(e.target.value) });

    //setting seats in localsorage
    let value;
    if(Number(e.target.value) === 0){
      value = ""
    }
    else{
      value = Number(e.target.value)
    }
    
    window.localStorage.setItem(
      "seats",
      JSON.stringify({
        ...seats,
        [e.target.name]: value,
      })
    );
  };

  //highlighting the seat
  const handleChecked = (text) => {
    changeSeats(text);
  };

  return (
    <div
      name={text}
      className={`form-check-label max-w-fit ${
        seat === text ? "active" : "inactive"
      }`}
      id={`${index}text`}
      onClick={() => {
        handleChecked(text, index);
      }}
    >
      <span className={"text"}>{text}</span>
      <input
        type="number"
        className="seats-input"
        placeholder="0"
        name={text}
        min="0"
        id={`${index}input`}
        max="30"
        onChange={change_seats}
        value={seats[text]}
      />
    </div>
  );
};

export default SeatsInput;
