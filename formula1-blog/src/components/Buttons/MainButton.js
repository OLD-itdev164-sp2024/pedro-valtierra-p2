import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'rebass'
import styled from 'styled-components'

const Reset = styled(Button)`
  
  
  box-shadow: none;
  font-weight: normal;
  border-radius:0;
  cursor: pointer;
  background-color: black !important;
`

export const MainButton = ({ children, ...rest}) => 
  <Reset {...rest}>{children}</Reset>

MainButton.propTypes = {
  children: PropTypes.node.isRequired
}