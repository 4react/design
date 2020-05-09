import { boolean } from '@storybook/addon-knobs'
import React from 'react'
import Container from './Container'

const ContainerStory = () => {
  const props = {
    responsive: boolean('responsive', false, 'props')
  }

  return <Container {...props} style={{ height: 100, background: '#5e87f9' }} />
}

export default ContainerStory
