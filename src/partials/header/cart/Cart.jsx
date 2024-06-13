import { useState } from 'react'

import './cart.css'
import FinishCart from './FinishCart'
import ProductsCart from './fragments/ProductsCart'


function Cart({products}) {

  const [ arrProducts, setArrProducts ] =useState(products)

  let subtot = 0
  products.map( element => (
    subtot += element.price
  ))

  const [ finsh_cart , setFinishCart ] = useState(false)

  const finishCartToggle = ()=> {
    setFinishCart(!finsh_cart)
  }

  return (
    <div>
      { !finsh_cart && (
        <div className="cart-content">
        <h2 className='title-cart'>Resumo do carrinho</h2>
        <div className="cart-items">
            {
             <ProductsCart products={arrProducts} />
            }
        </div>
        <div className='cart-delivery'>
          <span>Calcular frete:</span>
          <input type="text" name='cep' placeholder='digite seu cep:'/>
        </div>
        <div className="cart-value">
            <div className='info-price'>
              <span>Subtotal</span>
              <span>R$ {subtot.toFixed(2)}</span>
            </div>
            <div className='finish-cart'>
              <span>12x sem juros R$ {(subtot.toFixed(2) / 12).toFixed(2) }</span>
              <button className='btn btn-mkmodas' onClick={finishCartToggle}>Finalizar</button>
            </div>
        </div>
      </div>
      )}
      { finsh_cart && (<FinishCart  products={arrProducts} />)}
    </div>
  )
}

export default Cart
