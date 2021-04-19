import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import FormLogin from './FormLogin';



function Corpo() {
  return (
    <div>
      <Header />,
      <FormLogin />
    </div>
  );
}


ReactDOM.render(
  <Corpo />,
 
  document.getElementById('root')
  
);


