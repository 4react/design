import { motion } from 'framer-motion'
import styled from 'styled-components'

// $zindex-dropdown:          1000 !default;
// $zindex-sticky:            1020 !default;
// $zindex-fixed:             1030 !default;
// $zindex-modal-backdrop:    1040 !default;
// $zindex-modal:             1050 !default;
// $zindex-popover:           1060 !default;
// $zindex-tooltip:           1070 !default;

export interface LayoutContainerProps {
  // empty
}

const LayoutContainer = styled(motion.div)<LayoutContainerProps>`
  position: absolute;
  width: 100%;
  height: 100%;
`

export default LayoutContainer
