import React from 'react';
import './Button.css'

export default function Button({btnClass, text}) {
  return (
    <button className={btnClass}>{text}</button>
  )
}
