import { useEffect, useState } from 'react'

import response from '../../../database/userdb.json'
import products from '../../../database/products.json'


import menuIcon from '../icons/menu.png'
import logoIcon from '../icons/logo.png'
import shopping from '../icons/shopping.png'

import '../css/mobile.css'
import MobileMenu from './MobileMenu'
import Cart from '../cart/Cart'

function Mobile() {

  const [ showMenu, setShowMenu] = useState(false)
  const [ showCart, setShowCArt] = useState(false)

  const toggleMenu = () => {
    setShowCArt(false)
    setShowMenu(!showMenu)
  }

  const toggleCart = () => {
    setShowMenu(false)
    setShowCArt(!showCart)
  }

  return (
    <>
      <div className='mobile_bar'>
        <div className="icon_container btn">
          <img src={menuIcon} alt="Menu page" onClick={ toggleMenu }/>
        </div>
        <div className="logo_container btn">
          <img src={logoIcon} alt="Logo page" />
          <span>Modas.</span>
        </div>
        <div className="icon_container btn">
          <img src={shopping} alt="Shopping cart icon" onClick={ toggleCart } />
        </div>
      </div>
      <div className="search">
        <input type="search" name="search" placeholder='Pesquise um produto'/>
      </div>
      <div className='showMenu'>
        { showMenu && ( <MobileMenu user={ response } /> )}
      </div>
      <div className="showCart">
        { showCart && ( <Cart products={ products } /> ) }
      </div>
    </>
  )
}

export default Mobile