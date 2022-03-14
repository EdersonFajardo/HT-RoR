import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Checkout from '../wizard'

document.addEventListener('DOMContentLoaded', () => {
  const node = document.querySelector('#checkout')
  if(node) {
    ReactDOM.render(
      <Checkout />,
      node
    )
  }
})
