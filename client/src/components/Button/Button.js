import React from 'react'
import './Button.scss'

const Button = ({ name, ...restProps }) => (
  <button type="submit" {...restProps}>
    <span>{name}</span>
  </button>
)

export default Button
