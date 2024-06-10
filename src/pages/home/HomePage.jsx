import React from 'react'

// import jsx from page
import Carousel from './carousel/Carousel'
import ProductsCarousel from './products_carousel/ProductsCarousel'

//data images import by carousel
import images from '../../database/carousel.json'
//database products
import products from '../../database/products.json'

import './homePage.css'

function Home() {
  return (
    <main>
        <section className="carouselContainer">
          <Carousel images={images} />
        </section>
        <section className="show-products">
          <ProductsCarousel products={products} title={'Mais vendidos'}/>
        </section>
        <section className="show-products">
          <ProductsCarousel products={products} title={'Melhor avaliado'} />
        </section>
        <section className="show-products">
          <ProductsCarousel products={products} title={'Promoções'} />
        </section>
    </main>
  )
}

export default Home
