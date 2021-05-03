import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { RENDER } from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./bll/store";
function RenderAll(){
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}><App/></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);}
RenderAll()
RENDER(RenderAll)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
