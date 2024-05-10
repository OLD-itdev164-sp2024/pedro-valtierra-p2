import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass'

export const BContainer = ({ children, flex = false, ...rest }) => {
  let Component = flex ? Flex : Box
  return <Component {...rest}>{children}</Component>
}

BContainer.propTypes = {
  flex: PropTypes.bool,
  as: PropTypes.string,
  children: PropTypes.node.isRequired
}