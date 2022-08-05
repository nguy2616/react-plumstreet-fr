import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import View from './components/Layout/View';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import * as constant from './utils/constants'

const token = 'jwt token'
axios.defaults.baseURL = constant.baseURL
axios.defaults.headers.common['Authorization'] = token
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use(req => {
  console.log(req, 'req');
  return req
}, err => {
  console.log(err)
  return Promise.reject(err)
})
axios.interceptors.response.use(res => {
  console.log(res, 'res')
  return res
}, err => {
  console.log(err)
  return Promise.reject(err)
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <View />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
