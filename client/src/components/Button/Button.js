import React from 'react'
import './Button.scss'

const Button = (props) => (
  <button type="submit">
    <span>{props.name}</span>
  </button>
)

export default Button
