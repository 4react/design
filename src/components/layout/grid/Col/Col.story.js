import { number, select } from '@storybook/addon-knobs'
import React from 'react'
import Col from './Col'
import { ColAlignValue } from './ColAlign'
import { ColVAlignValue } from './ColVAlign'
import Area from '../../../../../.storybook/utils/Area'
import Container from '../Container/Container'
import Row from '../Row/Row'

const ColStory = () => {
  const props = {
    size: number('size', 12, { min: 0, max: 24 }, 'props'),
    offset: number('offset', 6, { min: 0, max: 24 }, 'props'),
    align: select('align', ColAlignValue, ColAlignValue.CENTER, 'props'),
    vAlign: select('vAlign', ColVAlignValue, ColVAlignValue.TOP, 'props')
  }

  return (
    <Container style={{ background: '#87a5fb' }}>
      <Row>
        <Col {...props} style={{ height: 100, background: '#5e87f9' }}>
          <Area size={32} />
        </Col>
      </Row>
    </Container>
  )
}

export default ColStory
