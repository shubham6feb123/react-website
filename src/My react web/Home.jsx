import { TextField } from '@material-ui/core';
import React from 'react'
import { NavLink } from 'react-router-dom';
// import Carousel from 'react-bootstrap/Carousel'
// import Carousel from 'react-elastic-carousel';
import './carousel.css'

const Home = ()=>{
  
    return (
        <>
          {/* <h1 className='text-center' style={{marginLeft:'-203px'}}>I am home page</h1> */}
        <div className='container-fluid my-3'>
        <div>
  <div className="carousel">
    <ul className="slides">
      <input type="radio" name="radio-buttons" id="img-1" checked />
      <li className="slide-container">
        <div className="slide-image">
          <img src="https://media.caradvice.com.au/image/private/c_fill,q_auto,f_auto,w_480,ar_480:240/xdvwrmdj0vhtmacuqdgk.jpg"/>
        </div>
        <div className="carousel-controls">
          <label for="img-3" className="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label for="img-2" className="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <input type="radio" name="radio-buttons" id="img-2" />
      <li className="slide-container">
        <div className="slide-image">
          <img src="https://robbreport.com/wp-content/uploads/2020/07/6-3.jpg?w=1000"/>
        </div>
        <div className="carousel-controls">
          <label for="img-1" className="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label for="img-3" className="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <input type="radio" name="radio-buttons" id="img-3" />
      <li className="slide-container">
        <div className="slide-image">
          <img src="https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg"/>
        </div>
        <div className="carousel-controls">
          <label for="img-2" className="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label for="img-1" className="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <div className="carousel-dots">
        <label for="img-1" className="carousel-dot" id="img-dot-1"></label>
        <label for="img-2" className="carousel-dot" id="img-dot-2"></label>
        <label for="img-3" className="carousel-dot" id="img-dot-3"></label>
      </div>
    </ul>
  </div>
</div> 
</div>   

<div class="container my-5 mx-auto">
  <div class="row justify-content-center">
    <div class="col-6 text-center " style={{borderBottom:'2px solid red'}}>
     <NavLink exact activeClassName='active_class' to='/' style={{color:'black'}}>Buy</NavLink> 
    </div>
    <div class="col-6 text-center " style={{borderBottom:'2px solid grey'}}>
      <NavLink activeClassName='active_class' to='/' style={{color:'grey'}} onClick={(e)=>{}}>Sell/Trade</NavLink> 
    </div>
  </div>
  <div className='row'>
    <div className='col-6'>
    <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label text-primary">Search Cars</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter make,modal or body style "/>
  <div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Find your cars</button>
</div>
</div>
    </div>
    <div className='col-6'></div>
  </div>
</div>

</>
    )
}

export default Home;