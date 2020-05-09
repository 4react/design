import React from 'react'
import Col from '../../src/components/layout/grid/Col/Col'
import Container from '../../src/components/layout/grid/Container/Container'
import Row from '../../src/components/layout/grid/Row/Row'

const styles = {
  container: { opacity: 0.5, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  row: { height: '100%' },
  colAzure: { height: 50, color: 'white', fontSize: 20, backgroundColor: '#87A5FB' },
  colBlue: { height: 50, color: 'white', fontSize: 20, backgroundColor: '#5E87F9' }
}

const Background24Cols = () => (
  <Container style={styles.container}>
    <Row vAlign="fit" style={styles.row}>
      <Col vAlign="stretch" size={1} style={styles.colAzure} />
      <Col size={1} style={styles.colBlue} />
      <Col size={1} style={styles.colAzure} />
      <Col size={1} style={styles.colBlue} />
      <Col size={1} style={styles.colAzure} />
      <Col size={1} style={styles.colBlue} />
      <Col size={1} style={styles.colAzure} />
      <Col size={1} style={styles.colBlue} />
      <Col size={1} style={styles.colAzure} />
      <Col size={1} style={styles.colBlue} />
      <Col size={1} style={styles.colAzure} />
      <Col size={1} style={styles.colBlue} />
      <Col size={1} style={styles.colAzure} />
      <Col size={1} style={styles.colBlue} />
      <Col size={1} style={styles.colAzure} />
      <Col size={1} style={styles.colBlue} />
      <Col size={1} style={styles.colAzure} />
      <Col size={1} style={styles.colBlue} />
      <Col size={1} style={styles.colAzure} />
      <Col size={1} style={styles.colBlue} />
      <Col size={1} style={styles.colAzure} />
      <Col size={1} style={styles.colBlue} />
      <Col size={1} style={styles.colAzure} />
      <Col size={1} style={styles.colBlue} />
    </Row>
  </Container>
)

export default Background24Cols
