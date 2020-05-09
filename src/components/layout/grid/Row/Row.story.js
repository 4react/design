import { select } from '@storybook/addon-knobs'
import React from 'react'
import Row from './Row'
import RowJustify from './RowJustify'
import RowVAlign from './RowVAlign'
import Container from '../Container/Container'
import Area from '../../../../../.storybook/utils/Area'

const RowStory = () => {
  const props = {
    justify: select('justify', RowJustify, RowJustify.LEFT, 'props'),
    vAlign: select('vAlign', RowVAlign, RowVAlign.TOP, 'props'),
    gutters: select('gutters', [0, 1, 2, 3, 4, 5], 1, 'props')
  }

  return (
    <Container style={{ background: '#87a5fb' }}>
      <Row {...props} style={{ height: 100, background: '#5e87f9' }}>
        <Area size={32} />
        <Area size={32} />
        <Area size={32} />
      </Row>
    </Container>
  )
}

export default RowStory
