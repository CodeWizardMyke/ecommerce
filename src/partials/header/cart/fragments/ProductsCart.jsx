import { useState } from 'react'

function ProductsCart({products}) {

  const [ arrProducts, setArrProducts ] =useState(products)

  const modifyProducts = () => {
    
  }

  return (
    <div>
        {
            arrProducts.map( (item, index) => (
            <div className="item" key={item.title + index}>
                <div className="item-img">
                <img src={`/images/products/product_${item.id}/1.png`} alt={item.title}/>
                </div>
                <div className="item-details">
                <span className="title">{item.title}</span>
                <span className="price">R${item.price}</span>
                <div className='price-pix-e'>
                    <span>no pix</span>
                    <span className='price-pix'> R$: {  item.price - (( item.price * 15 ) / 100 ).toFixed(2) }</span>
                </div>
                </div>
                <div className="item-price">
                <div className='last-price'>
                    <span>Valor</span>
                    <span className='val'>R${item.price}</span>
                </div>
                <div className="qtd-control">
                    <div>
                    <span>+</span>
                    <input type="number" min={1} value={1} name="qtd" id="qtd" />
                    <span>-</span>
                    </div>
                </div>
                </div>
            </div>
            ))
            }
    </div>
  )
}

export default ProductsCart
