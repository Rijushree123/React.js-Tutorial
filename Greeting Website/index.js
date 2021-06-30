import { constants } from 'fs';
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

let currDate = new Date();
currDate = currDate.getHours();  
let greeting= '';

const cssStyle = {};

if(currDate >= 1 && currDate<12)
{
  greeting = 'Good Morning!';
  cssStyle.color = "Yellow";
}else if(currDate >= 12 && currDate<15)
{
  greeting = 'Good Afternoon!';
  cssStyle.color = "Orange";
}else if(currDate >= 15 && currDate<20)
{
  greeting = 'Good Evening!';
  cssStyle.color = "Green";
}
else
{
  greeting = 'Good Night!';
  cssStyle.color = "Black";
}


ReactDom.render(
  <>
  <div>
  <h1>
  Hello Sir/Mam, <span style = {cssStyle}>{greeting}</span>
  </h1>
  </div>
  </>,
  document.getElementById('root')
);