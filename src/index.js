// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();

 import { BrowserRouter , Route , Routes} from "react-router-dom"

import Home from "./Pages/Home";

import React from 'react';
import {createRoot} from 'react-dom/client';
import  Experience from "./Pages/Experience"
import Contact from "./Pages/Contact";
import Mywork from "./Pages/Mywork";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="mywork" element={<Mywork />} />
      <Route path="experience" element={<Experience/>}/>
      </Routes>
    </BrowserRouter>
  )
}


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);