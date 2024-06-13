import React from 'react'

function FinishCart({products}) {

    let subtot = 0
    products.map( element => (
      subtot += element.price
    ))
  

  return (
    <div>
      <div className="cart-content">
        <div>
          <h2 className='title-cart'>Finalizar carrinho</h2>

        </div>
        <div className="cart-items">
            {
             // <FinishCart products={products} />
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
              <button className='btn btn-mkmodas' >Finalizar</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FinishCart
