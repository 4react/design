import React from 'react'
import Col from '../../src/components/layout/grid/Col/Col'
import Container from '../../src/components/layout/grid/Container/Container'
import Row from '../../src/components/layout/grid/Row/Row'

const styles = {
  row: { marginBottom: 8 },
  colAzure: { height: 50, color: 'white', fontSize: 20, backgroundColor: '#87A5FB' },
  colBlue: { height: 50, color: 'white', fontSize: 20, backgroundColor: '#5E87F9' }
}

const GridSizeStory = () => (
  <Container>
    <Row style={styles.row}>
      <Col size={24} align="center" vAlign="middle" style={styles.colAzure}>size 24</Col>
    </Row>
    <Row style={styles.row}>
      <Col size={12} align="center" vAlign="middle" style={styles.colAzure}>size 12</Col>
      <Col size={12} align="center" vAlign="middle" style={styles.colBlue}>size 12</Col>
    </Row>
    <Row style={styles.row}>
      <Col size={8} align="center" vAlign="middle" style={styles.colAzure}>size 8</Col>
      <Col size={8} align="center" vAlign="middle" style={styles.colBlue}>size 8</Col>
      <Col size={8} align="center" vAlign="middle" style={styles.colAzure}>size 8</Col>
    </Row>
    <Row style={styles.row}>
      <Col size={6} align="center" vAlign="middle" style={styles.colAzure}>size 6</Col>
      <Col size={6} align="center" vAlign="middle" style={styles.colBlue}>size 6</Col>
      <Col size={6} align="center" vAlign="middle" style={styles.colAzure}>size 6</Col>
      <Col size={6} align="center" vAlign="middle" style={styles.colBlue}>size 6</Col>
    </Row>
    <Row style={styles.row}>
      <Col size={4} align="center" vAlign="middle" style={styles.colAzure}>size 4</Col>
      <Col size={4} align="center" vAlign="middle" style={styles.colBlue}>size 4</Col>
      <Col size={4} align="center" vAlign="middle" style={styles.colAzure}>size 4</Col>
      <Col size={4} align="center" vAlign="middle" style={styles.colBlue}>size 4</Col>
      <Col size={4} align="center" vAlign="middle" style={styles.colAzure}>size 4</Col>
      <Col size={4} align="center" vAlign="middle" style={styles.colBlue}>size 4</Col>
    </Row>
    <Row style={styles.row}>
      <Col size={3} align="center" vAlign="middle" style={styles.colAzure}>size 3</Col>
      <Col size={3} align="center" vAlign="middle" style={styles.colBlue}>size 3</Col>
      <Col size={3} align="center" vAlign="middle" style={styles.colAzure}>size 3</Col>
      <Col size={3} align="center" vAlign="middle" style={styles.colBlue}>size 3</Col>
      <Col size={3} align="center" vAlign="middle" style={styles.colAzure}>size 3</Col>
      <Col size={3} align="center" vAlign="middle" style={styles.colBlue}>size 3</Col>
      <Col size={3} align="center" vAlign="middle" style={styles.colAzure}>size 3</Col>
      <Col size={3} align="center" vAlign="middle" style={styles.colBlue}>size 3</Col>
    </Row>
  </Container>
)

export default GridSizeStory
