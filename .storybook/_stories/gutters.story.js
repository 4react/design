import { select, text } from '@storybook/addon-knobs'
import React from 'react'
import Col from '../../src/components/layout/grid/Col/Col'
import Container from '../../src/components/layout/grid/Container/Container'
import Row from '../../src/components/layout/grid/Row/Row'

const styles = {
  row: { marginBottom: 8, backgroundColor: '#ECF6FE' },
  col: { height: 50, color: 'white', fontSize: 20, backgroundColor: '#5E87F9' }
}

const gutter = (name, defaultValue, groupId) => {
  const values = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }
  return select(name, values, defaultValue, groupId)
}

const GridGuttersStory = () => {
  const singleGutter = {
    gutters: gutter('all', 2, 'Single')
  }
  const twoValuesGutters = {
    gutters: [
      gutter('vertical', 2, '2 Values'),
      gutter('horizontal', 4, '2 Values')
    ]
  }
  const fourValuesGutters = {
    gutters: [
      gutter('top', 1, '4 Values'),
      gutter('left', 2, '4 Values'),
      gutter('bottom', 3, '4 Values'),
      gutter('right', 4, '4 Values')
    ]
  }
  const responsiveGutters = {
    gutters: {
      xs: gutter('xs', 0, 'Responsive'),
      sm: gutter('sm', 1, 'Responsive'),
      md: gutter('md', 2, 'Responsive'),
      lg: gutter('lg', 3, 'Responsive'),
      xl: gutter('xl', 4, 'Responsive'),
      xxl: gutter('xxl', 5, 'Responsive')
    }
  }
  const stringGutters = {
    gutters: text('all', '16px', 'String')
  }

  return (
    <Container>
      <h2>Single value</h2>
      <Row {...singleGutter} style={styles.row}>
        <Col size={12} align="center" vAlign="middle" style={styles.col} />
        <Col size={12} align="center" vAlign="middle" style={styles.col} />
      </Row>
      <h2>2 values array</h2>
      <Row {...twoValuesGutters} style={styles.row}>
        <Col size={12} align="center" vAlign="middle" style={styles.col} />
        <Col size={12} align="center" vAlign="middle" style={styles.col} />
      </Row>
      <h2>4 values array</h2>
      <Row {...fourValuesGutters} style={styles.row}>
        <Col size={12} align="center" vAlign="middle" style={styles.col} />
        <Col size={12} align="center" vAlign="middle" style={styles.col} />
      </Row>
      <h2>Responsive</h2>
      <Row {...responsiveGutters} style={styles.row}>
        <Col size={12} align="center" vAlign="middle" style={styles.col} />
        <Col size={12} align="center" vAlign="middle" style={styles.col} />
      </Row>
      <h2>String value</h2>
      <Row {...stringGutters} style={styles.row}>
        <Col size={12} align="center" vAlign="middle" style={styles.col} />
        <Col size={12} align="center" vAlign="middle" style={styles.col} />
      </Row>
    </Container>
  )
}

export default GridGuttersStory
