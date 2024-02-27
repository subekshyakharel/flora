import React from 'react'
import im2 from '../assets/img/dye.jpeg'
import fabric from '../assets/img/Fabric-swatches.jpg'
import foto from '../assets/img/Fotolia.jpg'
import im from '../assets/img/im.jpg'
import natural from '../assets/img/natural-plant-dye.jpg'

function About() {
  return (
    <>
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
    </>
  )
}

export default About
