import React from 'react';
import ReactDOM from 'react-dom';
import Image from './images/avatar.jpg';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(
  <Badge
    firstName="Darwin"
    lastName="Sáenz"
    avatar={Image}
    jobTitle="Frontend Developer"
    github="Dssaenz"
  />,
  container
);
