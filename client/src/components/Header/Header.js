import React from 'react'
import logo from '../../assets/tg-icon.png'
import './Header.scss'

const Header = () => (
  <header>
    <div>
      <img src={logo} alt="logo" />
      <h1>tg-one</h1>
    </div>
    <h2>*(definitely not a telegram)</h2>
  </header>
)

export default Header
