import React, { useState } from 'react';
import './Routeselector.css';
import * as apiCall from './routeApifunc';
import BusList from '../BusList/BusList';
import SeatSelection from '../SeatSelection/SeatSelection';
import PaymentTab from '../PaymentTab/PaymentTab';

export default function Routeselector() {
  const [dataInp, setData] = useState('');
  const [startCity, setStartCity] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [activeTab, setActiveTab] = useState('home');
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleToCity = (e) => {
    e.preventDefault();
    setDestination(e.target.value);
    localStorage.setItem('destination', e.target.value);
  };

  const renderBusList = (dataInp) => {
    if (Object.keys(dataInp).length > 0) {
      return <BusList value={dataInp} />;
    }
  };

  const handleFromCity = (e) => {
    e.preventDefault();
    setStartCity(e.target.value);
    localStorage.setItem('start', e.target.value);
  };

  const handleDate = (e) => {
    e.preventDefault();
    setDate(e.target.value);
    localStorage.setItem('date', e.target.value);
  };

  const getRoutes = (e) => {
    e.preventDefault();
    if (startCity && destination && date) {
      apiCall
        .getRoutesFromApi(startCity, destination)
        .then((response) => response.data)
        .then((data) => {
          setData(data.bus);
          setActiveTab('menu1');
        });
    }
  };

  const handleSelectedSeats = (seats) => {
    setSelectedSeats(seats);
    setActiveTab('menu2');
  };

  return (
    <div className="rdc">
      <div className="form-group inline"></div>
      <div className="main-container">
        <form className="form-inline" onSubmit={getRoutes}>
          <select
            name="ad_account_selected"
            data-style="btn-new"
            className="selectpicker"
            onChange={handleFromCity}
          >
            <option>FROM</option>
            <option>kathamandu</option>
            <option>pokhara</option>
            <option>jhapa</option>
          </select>
          <select
            name="ad_account_selected"
            data-style="btn-new"
            className="selectpicker"
            onChange={handleToCity}
          >
            <option>TO</option>
            <option>kathamandu</option>
            <option>pokhara</option>
            <option>dhangadi</option>
            <option>chitwan</option>
          </select>
          <input type="date" onChange={handleDate}></input>
          <input type="submit" className="btn btn-primary btn-md getRoute" />
        </form>

        {activeTab === 'menu1' && (
          <SeatSelection onSelectedSeats={handleSelectedSeats} />
        )}

        {activeTab === 'menu2' && (
          <PaymentTab selectedSeats={selectedSeats} />
        )}
      </div>
    </div>
  );
}
