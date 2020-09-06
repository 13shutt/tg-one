import React from 'react'
import './Input.scss'

const Input = (props) => (
  <div className="form__group field">
    <input
      type={props.type}
      className="form__field"
      placeholder={props.name}
      name={props.name}
      id="name"
      required
      value={props.value}
      onChange={(e) => props.handleChange(e.target.value)}
    />
    <label for={props.name} className="form__label">
      {props.name}
    </label>
  </div>
)

export default Input
