import React from "react";

export default function Booking(){
     async function getBookings(){
      var data = await fetch("http://localhost:6060/bookings")
      var converteddata = await data.json(
        
      )
    }
    return(
    <>
    <div className="container">
        <div className="row">
            <div className ="col">
<h1></h1>
   <div className="card w-50 py-4 mx-auto my-4">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      With supporting text below as a natural lead-in to additional content.
    </p>
    <a href="#" className="btn btn-primary">
      Button
    </a>
  </div>
</div>
</div>
</div>
</div>






   </>
)
 

}