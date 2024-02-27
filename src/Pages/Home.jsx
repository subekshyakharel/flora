import React from 'react'
import im1 from '../assets/img/slideshow_6.webp'
import im2 from '../assets/img/dye.jpeg'
import fabric from '../assets/img/Fabric-swatches.jpg'
import foto from '../assets/img/Fotolia.jpg'
import im from '../assets/img/im.jpg'
import natural from '../assets/img/natural-plant-dye.jpg'
import coming from'../assets/img/coming-soon.jpg'
import naturaldye from '../assets/img/natural-dye.png'
import image from '../assets/img/blog_183.jpg'


function Home() {
  return (
    <>
    <section className='firsttop container'>
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={naturaldye} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={image} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</section>

<section className="top">
  <div className=" flex">
    <div className="container">
      <h2>What is Floral Fusion About?</h2>
      <p>
        Picture a world where colors are not just vibrant expressions of beuty but also sustainable
        Symbols of our Commitment of the planet. Floral Fusion offers precisely that an eco-friendly
        alternative to synthetic dyes, assisting in a future where fashoin, textiles , and various industries can thrive without harming the enviroment.
      </p>
      <div className="f">
        <img src={fabric} alt />
        <img src={foto} alt />
        <img src={im} alt />
        <img src={im2} alt />
      </div>
    </div>
    <div>
      <img src={natural} alt />
    </div>
  </div>
</section>

<section className='shopbtn'>
  <button>Shop Now</button>
</section>

<section className='shop'>
  <div className="container">
    <div className="row gutter g-3">
      <div className="col-lg-3  box1">
        <img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div>
      </div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
    </div>
  </div>
</section>

<section className='shop'>
  <div className="container">
    <div className="row gutter g-3">
      <div className="col-lg-3  box1">
        <img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div>
      </div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
    </div>
  </div>
</section>


<section className='shop'>
  <div className="container">
    <div className="row gutter g-3">
      <div className="col-lg-3  box1">
        <img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div>
      </div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
    </div>
  </div>
</section>

<section className='shop'>
  <div className="container">
    <div className="row gutter g-3">
      <div className="col-lg-3  box1">
        <img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div>
      </div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
    </div>
  </div>
</section>

<section className='shop'>
  <div className="container">
    <div className="row gutter g-3">
      <div className="col-lg-3  box1">
        <img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div>
      </div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
    </div>
  </div>
</section>

<section className='shop'>
  <div className="container">
    <div className="row gutter g-3">
      <div className="col-lg-3  box1">
        <img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div>
      </div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
    </div>
  </div>
</section>

<section className='shop'>
  <div className="container">
    <div className="row gutter g-3">
      <div className="col-lg-3  box1">
        <img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div>
      </div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
    </div>
  </div>
</section>

<section className='shop'>
  <div className="container">
    <div className="row gutter g-3">
      <div className="col-lg-3  box1">
        <img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div>
      </div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
    </div>
  </div>
</section>

<section className='shop'>
  <div className="container">
    <div className="row gutter g-3">
      <div className="col-lg-3  box1">
        <img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div>
      </div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
    </div>
  </div>
</section>

<section className='shop'>
  <div className="container">
    <div className="row gutter g-3">
      <div className="col-lg-3  box1">
        <img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div>
      </div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
      <div className="col-lg-3 box1"><img src={coming} alt="" />
        <hr />
        <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
        
        <h5>Fabric scarf</h5>
        <h4>Rs.0000</h4>
        {/* <p>description......................................................................<br/>.......................</p> */}
        <div className='flex'>
        <div>
          <button>-</button> <span>1</span> <button>+</button>
        </div>
        <div>
        <button className='btn'>Add to cart</button>
        </div>
        </div></div>
    </div>
  </div>
</section>



<footer>
        <div className="foot">
         <p> ______________________________________________________________________________________________________________________________________________________________________________________________</p>
         <p><i class="fa fa-copyright" aria-hidden="true"></i>Copyright All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Home
