import './cart.css'

function Cart({products}) {

  let subtot = 0
  products.map( element => (
    subtot += element.price
  ))

  return (
    <div>
      <div className="cart-content">
        <h2 className='title-cart'>Resumo do carrinho</h2>
        <div className="cart-items">
            {
              products.map( (item, index) => (
                <div className="item">
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
              <button className='btn btn-mkmodas'>Finalizar</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
