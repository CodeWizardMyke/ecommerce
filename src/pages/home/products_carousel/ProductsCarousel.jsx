import { useState } from 'react'
import './productsCarousel.css'

function ProductsCarousel({products, title}) {
   const [cartItem, setCartItem] = useState([])

   const insertItemCart =(item)=>{
    const {id, title, images, price} = item
    const handdlerItem = {id:id, title:title, images:images, price:price}

  }
  console.log(cartItem)
  return (
    <>
     <div className='title-sales'>
      <h2>{title}</h2>
     </div>
      <div className='prod-content'>
          {
            products.map( (item, index) => (
                <div key={item.title}  className='prod-item'>
                  <div className="prod-image">
                    <img src={`/images/products/product_${item.id}/1.png`} alt={item.title} />
                  </div>
                  <div className="prod-detail">
                    <span>{item.title}</span>
                    <div className='score'></div>
                    <span className="prod-price">R$: {item.price.toFixed(2)}</span>
                    <div className='text-price'>
                      <img src="/images/icons/pix.png" alt="iconPix"  className='pix-icon' />
                      <span className='product-price-pix'>R$: ${  item.price - (( item.price * 15 ) / 100 ).toFixed(2) }</span>
                      <span className='text-pix'>no Pix.</span>
                    </div>
                    <button className='btn btn-success'>Comprar</button>
                    <button className='btn btn-outline-dark' onClick={()=>insertItemCart(item)} >Carrinho</button>
                  </div>
                </div>
            ))
          }
      </div>
     </>
  ) 
}

export default ProductsCarousel
