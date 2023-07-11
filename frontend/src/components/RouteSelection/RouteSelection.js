import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import RouteSelector from '../routeSelector/Routeselector';
import SeatSelection from '../SeatSelection/SeatSelection';
import PaymentTab from '../PaymentTab/PaymentTab';

export default function RouteSelection() {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState('home');

  const handleUserIcon = (e) => {
    e.preventDefault();
    history.push('/profile');
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    sessionStorage.removeItem('authToken');
    localStorage.removeItem('reservedSeats');
    localStorage.removeItem('nameData');
    localStorage.clear();
    history.push('/');
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    history.push('/routes');
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/SeatSelection');
  };

  return (
    <div className="container">
      <div>
        <nav className="mb-4 navbar navbar-expand-lg navbar-dark bg-unique hm-gradient">
          <a href="/#" className="navbar-brand Company-Log" onClick={handleLogoClick}>
            UT
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent-3"
            aria-controls="navbarSupportedContent-3"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent-3">
            <ul className="navbar-nav ml-auto nav-flex-icons ic">
              <li className="nav-item">
                <a href="/#" className="nav-link waves-effect waves-light" onClick={handleUserIcon}>
                  <i className="fa fa-user user"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link waves-effect waves-light" onClick={handleSignOut}>
                  Sign-Out
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
              data-toggle="pill"
              href="#home"
              onClick={() => handleTabChange('home')}
            >
              Select Bus
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'flight' ? 'active' : ''}`}
              data-toggle="pill"
              href="#flight"
              onClick={() => handleTabChange('flight')}
            >
              Select Flight
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'menu2' ? 'active' : ''}`}
              data-toggle="pill"
              href="#menu2"
              onClick={() => handleTabChange('menu2')}
            >
              Payment
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div className={`tab-pane container ${activeTab === 'home' ? 'active' : ''} mn-box`} id="home">
            <RouteSelector onSubmit={handleSubmit} />
          </div>
          <div className={`tab-pane container ${activeTab === 'flight' ? 'active' : ''} mn-box`} id="flight">
            <RouteSelector onSubmit={handleSubmit} />
          </div>
          <div className={`tab-pane container ${activeTab === 'menu2' ? 'active' : ''} mn-box`} id="menu2">
            <PaymentTab />
          </div>
        </div>
      </div>
    </div>
  );
}
