import React, { useState } from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';
import './Tab.css';

export default function SeatSelection({ onSelectedSeats }) {
  const [busSeatNumber, setBusSeatNumber] = useState([]);
  const [flightSeatNumber, setFlightSeatNumber] = useState([]);
  const [name, setName] = useState([]);
  const [gender, setGender] = useState([]);
  const [reservedSeats, setReservedSeats] = useState([]);
  const [arrowDown, setArrowDown] = useState(false);
  const [prevTab, setPrevTab] = useState('bus');

  const getSeatNumber = (e) => {
    const newSeat = e.target.value;
    if (reservedSeats.includes(newSeat)) {
      setReservedSeats((prevSeats) => prevSeats.filter((seat) => seat !== newSeat));
      if (busSeatNumber.includes(newSeat)) {
        setBusSeatNumber((prevSeats) => prevSeats.filter((seat) => seat !== newSeat));
      } else if (flightSeatNumber.includes(newSeat)) {
        setFlightSeatNumber((prevSeats) => prevSeats.filter((seat) => seat !== newSeat));
      }
    } else {
      setReservedSeats((prevSeats) => [...prevSeats, newSeat]);
      if (prevTab === 'bus') {
        setBusSeatNumber((prevSeats) => [...prevSeats, newSeat]);
      } else if (prevTab === 'flight') {
        setFlightSeatNumber((prevSeats) => [...prevSeats, newSeat]);
      }
    }
  };

  const handleGender = (e, seatNo) => {
    const { value } = e.target;
    setGender((prevGender) => [...prevGender, { seat: seatNo, gender: value }]);
  };

  const handlePassengerName = (e, seatNo) => {
    const value = e.target.value;
    if (!value) {
      setName((prevName) => [...prevName, { seat: seatNo, name: 'name is required' }]);
    } else {
      setName((prevName) => [...prevName, { seat: seatNo, name: value }]);
    }
  };

  const handleSubmitDetails = (e) => {
    e.preventDefault();
    setArrowDown(true);
    localStorage.setItem('reservedBusSeats', JSON.stringify(busSeatNumber));
    localStorage.setItem('reservedFlightSeats', JSON.stringify(flightSeatNumber));
    console.log(name);
    console.log(gender);
    onSelectedSeats([...busSeatNumber, ...flightSeatNumber]);
  };

  const renderPassengerData = (seatArray) => {
    return seatArray.map((seat, idx) => {
      return (
        <form key={idx} className="form seatfrm">
          <p className="text-capitalize text-center">Seat No: {seat}</p>
          <input
            className="form-control seatInp"
            onBlur={(e) => handlePassengerName(e, seat)}
            type="text"
            name="passenger-name"
            placeholder="Enter Name"
            autoComplete="off"
          />
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name={`gender-${seat}`}
              id={`male-${seat}`}
              value="Male"
              onClick={(e) => handleGender(e, seat)}
            />
            <label className="form-check-label" htmlFor={`male-${seat}`}>
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name={`gender-${seat}`}
              id={`female-${seat}`}
              value="Female"
              onClick={(e) => handleGender(e, seat)}
            />
            <label className="form-check-label" htmlFor={`female-${seat}`}>
              Female
            </label>
          </div>
        </form>
      );
    });
  };

  return (
    <div className="ss">
      <div className="row">
        <div className="column1">
          <div className="plane">
            <form onChange={getSeatNumber}>
              <ol className="cabin fuselage">
                <li className="row row--1">
                  <ol className="seats" type="A">
                    <li className="seat">
                      <input type="checkbox" value="1A" id="1A" />
                      <label htmlFor="1A">1A</label>
                    </li>
                    <li className="seat">
                      <input type="checkbox" value="1B" id="1B" />
                      <label htmlFor="1B">1B</label>
                    </li>
                    <li className="seat">
                      <input type="checkbox" value="1C" id="1C" />
                      <label htmlFor="1C">1C</label>
                    </li>
                  </ol>
                </li>
                <li className="row row--2">
                  <ol className="seats" type="A">
                    <li className="seat">
                      <input type="checkbox" value="2A" id="2A" />
                      <label htmlFor="2A">2A</label>
                    </li>
                    <li className="seat">
                      <input type="checkbox" value="2B" id="2B" />
                      <label htmlFor="2B">2B</label>
                    </li>
                    <li className="seat">
                      <input type="checkbox" value="2C" id="2C" />
                      <label htmlFor="2C">2C</label>
                    </li>
                  </ol>
                </li>
                <li className="row row--3">
                  <ol className="seats" type="A">
                    <li className="seat">
                      <input type="checkbox" value="3A" id="3A" />
                      <label htmlFor="3A">3A</label>
                    </li>
                    <li className="seat">
                      <input type="checkbox" value="3B" id="3B" />
                      <label htmlFor="3B">3B</label>
                    </li>
                    <li className="seat">
                      <input type="checkbox" value="3C" id="3C" />
                      <label htmlFor="3C">3C</label>
                    </li>
                  </ol>
                </li>
                <li className="row row--4">
                  <ol className="seats" type="A">
                    <li className="seat">
                      <input type="checkbox" value="4A" id="4A" />
                      <label htmlFor="4A">4A</label>
                    </li>
                    <li className="seat">
                      <input type="checkbox" value="4B" id="4B" />
                      <label htmlFor="4B">4B</label>
                    </li>
                    <li className="seat">
                      <input type="checkbox" value="4C" id="4C" />
                      <label htmlFor="4C">4C</label>
                    </li>
                  </ol>
                </li>
                <li className="row row--5">
                  <ol className="seats" type="A">
                    <li className="seat">
                      <input type="checkbox" value="5A" id="5A" />
                      <label htmlFor="5A">5A</label>
                    </li>
                    <li className="seat">
                      <input type="checkbox" value="5B" id="5B" />
                      <label htmlFor="5B">5B</label>
                    </li>
                    <li className="seat">
                      <input type="checkbox" value="5C" id="5C" />
                      <label htmlFor="5C">5C</label>
                    </li>
                  </ol>
                </li>
                <li className="row row--6">
                  <ol className="seats" type="A">
                    <li className="seat">
                      <input type="checkbox" value="6A" id="6A" />
                      <label htmlFor="6A">6A</label>
                    </li>
                    <li className="seat">
                      <input type="checkbox" value="6B" id="6B" />
                      <label htmlFor="6B">6B</label>
                    </li>
                    <li className="seat">
                      <input type="checkbox" value="6C" id="6C" />
                      <label htmlFor="6C">6C</label>
                    </li>
                  </ol>
                </li>
                <li className="row row--7">
                  <ol className="seats" type="A">
                    <li className="seat">
                      <input type="checkbox" value="7A" id="7A" />
                      <label htmlFor="7A">7A</label>
                    </li>
                    <li className="seat">
                      <input type="checkbox" value="7B" id="7B" />
                      <label htmlFor="7B">7B</label>
                    </li>
                    <li className="seat">
                      <input type="checkbox" value="7C" id="7C" />
                      <label htmlFor="7C">7C</label>
                    </li>
                  </ol>
                </li>
                <li className="row row--8">
                  <ol className="seats" type="A">
                    <li className="seat">
                      <input type="checkbox" value="8A" id="8A" />
                      <label htmlFor="8A">8A</label>
                    </li>
                    <li className="seat">
                      <input type="checkbox" value="8B" id="8B" />
                      <label htmlFor="8B">8B</label>
                    </li>
                    <li className="seat">
                      <input type="checkbox" value="8C" id="8C" />
                      <label htmlFor="8C">8C</label>
                    </li>
                  </ol>
                </li>
                <li className="row row--9">
                  <ol className="seats" type="A">
                    <li className="seat">
                      <input type="checkbox" value="9A" id="9A" />
                      <label htmlFor="9A">9A</label>
                    </li>
                    <li className="seat">
                      <input type="checkbox" value="9B" id="9B" />
                      <label htmlFor="9B">9B</label>
                    </li>
                    <li className="seat">
                      <input type="checkbox" value="9C" id="9C" />
                      <label htmlFor="9C">9C</label>
                    </li>
                  </ol>
                </li>
              </ol>
              <div className="exit exit--back fuselage"></div>
            </form>
          </div>
        </div>
        <div className="column2">
          <div className="flightDiv">
            <div className="front"></div>
            <div className="arrow-down">
              <FaAngleDoubleDown className={arrowDown ? 'rotate' : ''} />
            </div>
            <div className="back"></div>
            {arrowDown && (
              <div className="seatsDiv">
                <h4 className="text-center">Flight Seats</h4>
                <form onChange={getSeatNumber}>
                  <ol className="cabin fuselage">
                    <li className="row row--1">
                      <ol className="seats" type="A">
                        <li className="seat">
                          <input type="checkbox" value="1A" id="1A" />
                          <label htmlFor="1A">1A</label>
                        </li>
                        <li className="seat">
                          <input type="checkbox" value="1B" id="1B" />
                          <label htmlFor="1B">1B</label>
                        </li>
                        <li className="seat">
                          <input type="checkbox" value="1C" id="1C" />
                          <label htmlFor="1C">1C</label>
                        </li>
                      </ol>
                    </li>
                    <li className="row row--2">
                      <ol className="seats" type="A">
                        <li className="seat">
                          <input type="checkbox" value="2A" id="2A" />
                          <label htmlFor="2A">2A</label>
                        </li>
                        <li className="seat">
                          <input type="checkbox" value="2B" id="2B" />
                          <label htmlFor="2B">2B</label>
                        </li>
                        <li className="seat">
                          <input type="checkbox" value="2C" id="2C" />
                          <label htmlFor="2C">2C</label>
                        </li>
                      </ol>
                    </li>
                    <li className="row row--3">
                      <ol className="seats" type="A">
                        <li className="seat">
                          <input type="checkbox" value="3A" id="3A" />
                          <label htmlFor="3A">3A</label>
                        </li>
                        <li className="seat">
                          <input type="checkbox" value="3B" id="3B" />
                          <label htmlFor="3B">3B</label>
                        </li>
                        <li className="seat">
                          <input type="checkbox" value="3C" id="3C" />
                          <label htmlFor="3C">3C</label>
                        </li>
                      </ol>
                    </li>
                    <li className="row row--4">
                      <ol className="seats" type="A">
                        <li className="seat">
                          <input type="checkbox" value="4A" id="4A" />
                          <label htmlFor="4A">4A</label>
                        </li>
                        <li className="seat">
                          <input type="checkbox" value="4B" id="4B" />
                          <label htmlFor="4B">4B</label>
                        </li>
                        <li className="seat">
                          <input type="checkbox" value="4C" id="4C" />
                          <label htmlFor="4C">4C</label>
                        </li>
                      </ol>
                    </li>
                  </ol>
                  <div className="exit exit--front fuselage"></div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="passengerDetails">
        <h3 className="text-center">Passenger Details</h3>
        <div className="row">
          <div className="column1">
            <h4 className="text-center">Bus Seats</h4>
            {renderPassengerData(busSeatNumber)}
          </div>
          <div className="column2">
            <h4 className="text-center">Flight Seats</h4>
            {renderPassengerData(flightSeatNumber)}
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary btn-lg submitBtn"
          onClick={handleSubmitDetails}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
