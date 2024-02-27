import React from 'react'
import CatData from '../Data/CatData'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import floral from '../assets/img/floral.png'
import About from '../Pages/About'
import Wishlist from '../Pages/Wishlist'
import Cart from '../Pages/Cart'
import Contact from '../Pages/Contact'

function Header() {
  return (
    <>
      <header>
        <div className="container flex">
          <div>
            <img src={floral} alt="" />
          </div>
          <div>
            <ul className='f'>
              <li><Link to={`/`}>Home</Link></li>
              {CatData.map((a)=>(
                <li><Link to={`/${a}/`}>{a}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <ul className='f'>
              <li><Link to={`wish`}><i class="fa fa-heart" aria-hidden="true"></i> <span> Wishlist</span></Link></li>
              <li><Link to={`cart`}><i class="fa fa-shopping-cart" aria-hidden="true"></i> <span> Cart</span></Link></li>
            </ul>
          </div>
        </div>
      </header>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/About/' element={<About/>}/>
  <Route path='wish' element={<Wishlist/>}/>
  <Route path='cart' element={<Cart/>}/>
  <Route path='/Contact us/' element= {<Contact/>}/>
</Routes>
    </>
  )
}

export default Header
