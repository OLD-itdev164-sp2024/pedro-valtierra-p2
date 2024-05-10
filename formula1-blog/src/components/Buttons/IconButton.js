import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MainButton } from './MainButton'

const ModifiedButton = styled(MainButton)`
  ${({ theme, variant }) => theme.variants.iconButton[variant || 'primary']}
`

export const IconButton = styled(({ icon, ...rest }) => {
  let clone = React.cloneElement(icon, rest)
  return <ModifiedButton {...rest} className={rest.className}>{clone}</ModifiedButton>
})`
`

IconButton.defaultProps = {
  size: 24

}

IconButton.propTypes = {
  icon: PropTypes.node.isRequired
}