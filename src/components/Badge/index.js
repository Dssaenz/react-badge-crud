import React from 'react';
import './styles.css';
import logo from '../../resources/images/badge-header.svg';
import avatar from '../../resources/images/avatar.jpg';

function Badge(props) {
  return (
    <div className="Badge">
      <div className="Badge__header">
        <img src={logo} alt="Logo de la conferencia" />
      </div>

      <div className="Badge__section-name">
        <img
          className="Badge__avatar"
          src={avatar}
          alt="Avatar"
        />
        <h1>
          {props.firstName} <br /> {props.lastName}
        </h1>
      </div>

      <div className="Badge__section-info">
        <h3>{props.jobTitle}</h3>
        <div>@{props.twitter}</div>
      </div>

      <div className="Badge__footer">#develop</div>
    </div>
  );
}

export default Badge;
