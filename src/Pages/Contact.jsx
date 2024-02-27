import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
      <section>
        <div className="container contactus">
            <h2>Get in touch.</h2>
            <div className="box">
            <div className="row contacts">
                <div className="col-lg-4">
                    <h3><i class="fa fa-map-marker" aria-hidden="true"></i></h3>
                    <h4>Address</h4>
                    <p>Kathmandu</p>
                </div>
                <div className="col-lg-4">
                    <h3><i class="fa fa-phone" aria-hidden="true"></i></h3>
                    <h4>PHONE</h4>
                    <ul>
                        <li>9837635363</li>
                        <li>01-473657</li>
                    </ul>
                </div>
                <div className="col-lg-4">
                    <h3><i class="fa fa-envelope" aria-hidden="true"></i></h3>
                    <h4>EMAIL</h4>
                    <ul className='mail'>
                        <li><Link to="mailto:subekshyakharel922@gmail.com">subekshyakharel922@gmail.com</Link></li>
                    <li><Link to="mailto:khadkaishika123@gmail.com" >khadkaishika123@gmail.com</Link></li>
                    <li><Link to="maito:krineshsuwal404@gmail.com" >krineshsuwal404@gmail.com</Link></li>
                    <li><Link to="mailto:suwalaakash1@gmail.com">suwalaakash1@gmail.com</Link></li>
                    <li><Link to="mailto:supremesuwal9@gmail.com">supremesuwal9@gmail.com</Link></li>
                    </ul>
                </div>
            </div>
                <ul className='flex social'>
                    <li><Link><i class="fa fa-instagram" aria-hidden="true"></i></Link></li>
                    <li><Link><i class="fa fa-facebook" aria-hidden="true"></i></Link></li>
                    <li><Link><i class="fa fa-whatsapp" aria-hidden="true"></i></Link></li>
                </ul>
            </div>
        </div>
      </section>
      
    </>
  )
}


export default Contact
