import React from 'react'
import Background24Cols from '../utils/Background24Cols'
import Col from '../../src/components/layout/grid/Col/Col'
import Container from '../../src/components/layout/grid/Container/Container'
import Row from '../../src/components/layout/grid/Row/Row'

const styles = {
  row: { marginBottom: 8 },
  col: {
    height: 50,
    color: 'white',
    fontSize: 14,
    backgroundColor: '#5E87F9'
  }
}

const GridOffsetStory = () => (
  <>
    <h2>{'<Col size={} offset={} />'}</h2>
    <Container style={{ position: 'relative' }}>
      <Row style={styles.row}>
        <Col size={8} align="center" vAlign="middle" style={styles.col}>size 8</Col>
        <Col size={8} offset={8} align="center" vAlign="middle" style={styles.col}>size 8 offset 8</Col>
      </Row>
      <Row style={styles.row}>
        <Col size={6} offset={6} align="center" vAlign="middle" style={styles.col}>size 6 offset 6</Col>
        <Col size={6} offset={6} align="center" vAlign="middle" style={styles.col}>size 6 offset 6</Col>
      </Row>
      <Row style={styles.row}>
        <Col size={12} offset={6} align="center" vAlign="middle" style={styles.col}>size 12 offset 6</Col>
      </Row>
      <Background24Cols />
    </Container>
  </>
)

export default GridOffsetStory
