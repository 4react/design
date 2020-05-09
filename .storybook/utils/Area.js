import styled from 'styled-components'

const Area = styled.div`
  display: block;
  min-width: ${p => p.width || p.size}px;
  min-height: ${p => p.height || p.size}px;
  background: ${p => p.color || '#d44c5c'};
  border: 4px solid #6068b3;
`

export default Area
