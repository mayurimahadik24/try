import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';


// import Menu from '../src/component/Menu';
// import {Link} from 'react-router-dom';



// import{
//   createBrowserRouter,
//   RouterProvider,
  

// } from "react-router-dom";

// const router =createBrowserRouter([
//   {
//     path: "menu",
//     element: <Menu/>
//   }
// ])


const root = ReactDOM.createRoot(document.getElementById('root'));
const name="manas";
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString();
const img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69F8NQy5ZbnWf3J5DJ4Ig_41a5B1GZJhAdqYslAilAQ&s"
const link1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn9oG4QiD9DEO387aKUr3Fg6xA5FnRddq_2FVi-5_eLQ&s'

//root.render(
// <h1>jhjdhjh</h1>
//);
 //ReactDOM.render(React.createElement("h1",
//null,
//"mahadik"),
//document.getElementById("root"));

// ReactDOM.render(
//  <div>
//      <h1> mayuri mahdik </h1>
//      <p> djfhfhgkh </p>
//  </div>,
//    document.getElementById("root")
   
// );


// root.render(
 
//     <>
//     <h1> mayuri mahdik Techanical </h1>
//     <p> here are the list of {man} series </p>
//     <ol>
//       <li>Dark</li>
//       <li>mans</li>
//       <li>nita</li>
//     </ol>
    
//     </>


 
     
// );

root.render(
  <>
  <h1 contentEditable="true">Hello my name is {name}</h1>
  <p className="pr">Current date is= {currDate}</p>
  <p>Current time is= {currTime}</p>
  <img src={img1} alt="rosepic"></img>
  <p></p>
  <img src={img1} alt="rosepic"></img>
  <a href={link1} target="blank">
<h1>Menu
</h1>
  </a>
  {/* <RouterProvider router={router}></RouterProvider> */}
  </>

);
  
// var h1=document.createElement('h1');
// h1.innerHTML="mayuri";
// document.getElementById("root").appendChild(h1);


// var h2=document.createElement('h2');
// h2.innerHTML="may";
// document.getElementById("root").appendChild(h2);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
