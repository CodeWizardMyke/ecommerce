import { useState } from 'react'

//header partials imported
import Mobile from './header_mobile/Mobile'
import Desktop from './header_desktop/Desktop'

//function imported
import CheckDevice from '../../functions/CheckDevice'


function Header_main() {

  const [device] = useState(CheckDevice)

  return (
    <header>
      { device && ( <Mobile/> )}
      { !device && ( <Desktop/> )}
    </header>
  )
}

export default Header_main
