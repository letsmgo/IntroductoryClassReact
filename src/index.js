import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from './components/FirstComponent';
import ComponentWithProps from './components/ComponentWithProps';
import './index.css';

ReactDOM.render(
  <div>
    <ComponentWithProps nome="André" cargo="Instrutor"/>
    <ComponentWithProps nome="Vini" cargo="Instrutor"/>
    <ComponentWithProps nome="Maga" cargo="GP"/>
    <ComponentWithProps nome="Gi" cargo="GP"/>
  </div>

,document.getElementById('root')
);
 
