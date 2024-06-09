import { useEffect, useState } from 'react'

import response from '../../../database/userdb.json'

import menuIcon from '../icons/menu.png'
import logoIcon from '../icons/logo.png'
import shopping from '../icons/shopping.png'

import '../css/mobile.css'
import MobileMenu from './MobileMenu'

function Mobile() {

  const [ stateMenu, setStateMenu] = useState(false)

  const toggleMenu = () => {
    setStateMenu(!stateMenu)
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
          <img src={shopping} alt="Shopping cart icon" />
          <div className='shopp_cart'></div>
        </div>
      </div>
      <div className="search">
        <input type="search" name="search" placeholder='Pesquise um produto'/>
      </div>
      <div className='showMenu'>
        { stateMenu && ( <MobileMenu user={ response } /> )}
      </div>
      <div className="showCart"></div>
    </>
  )
}

export default Mobile