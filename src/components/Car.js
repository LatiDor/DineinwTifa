import React from "react";


export default function Car(){
    return(
        <>
        <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="container text-center c1" > 
  <div className="row">
    <div className="col">
      <p className="ch1">Welcome to</p>
      <h1 className="ch2">DineinWtifa</h1>
      <button type="button" class="btn btn-danger mt-3 ">Make a Reservation</button>
    </div>
  </div>
</div>
    </div>
    <div className="carousel-item">
    <div className="container text-center c1" > 
  <div className="row">
    <div className="col">
      <p>Welcome to</p>
      <h1>DineinWtifa</h1>
      <button type="button" class="btn btn-danger">Make a Reservation</button>
    </div>
  </div>
</div>
    </div>
    <div className="carousel-item">
    <div className="container text-center c1" > 
  <div className="row">
    <div className="col ">
      <p>Welcome to</p>
      <h1>DineinWtifa</h1>
      <button type="button" class="btn btn-danger">Make a Reservation</button>
    </div>
  </div>
</div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleRide"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleRide"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

        
        
        
        
        </>
    )
}