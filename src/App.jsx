import React, { Fragment, useState } from 'react'
import "./../node_modules/bootstrap/dist/css/bootstrap.css"
let orders=[
  {
    id:1,
    title:'admin',
    description:'this is first order'
  },
  {
    id:2,
    title:'admin2',
    description:'this is second order'
  }
]
// npm install bootstrap 
//npm install react-bootstrap
export default function App() {
  let state=useState(0);
  console.log(state);
  // current value ,update function 

  // function increment(){
  //   setCounter(++counter)
  // }

  // function decrement(){
  //   setCounter(--counter)
  // }

  function openTestWindow() {
    const features = "width=560,height=114,left=680,top=900";
    const testWindow = window.open("about:blank", "", features);
    if (testWindow) {
      testWindow.document.write("<p>Hello, this is a test window!</p>");
    } else {
      alert("Window failed to open. Check pop-up blocker settings.");
    }
  }

  openTestWindow()

  return (
    <>
      {
        <div className="row">
          {/* <div className="col-md-6">
            <button onClick={increment} className="btn btn-info w-100 mt-5">
               Increase
            </button>
          </div>
          <div className="col-md-6 mt-5">
            <button  className="btn btn-success w-100">
              <i className="fa fa-minus"></i> {counter}
            </button>
          </div>
          <div className="col-md-6 mt-5">
          <button onClick={decrement} className="btn btn-danger w-100">
         Descrease
            </button>
          </div> */}
        </div>
        
      }
    </>
  )

}