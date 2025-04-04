import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>
);

//For searchlands
// import { useState } from 'react';
// const [query, setquery] = useState('')
// const handleChange = (e) => {
// setquery(e.target.value) }






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
