import React, { Fragment } from 'react';
import Alert from 'react-s-alert';

import { Companies } from './components';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';


const App = () => (
  <Fragment>
    <Companies />
    <Alert stack />
  </Fragment>
);


export default App;
