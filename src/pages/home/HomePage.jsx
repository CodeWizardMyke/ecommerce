import React from 'react'

import Carousel from './carousel/Carousel'

//data images import by carousel
import images from '../../database/carousel.json'

function Home() {
  return (
    <section>
        <div className="carouselContainer">
          <Carousel images={images} />
        </div>
    </section>
  )
}

export default Home
