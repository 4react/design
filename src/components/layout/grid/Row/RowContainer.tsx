import styled from 'styled-components'
import Breakpoint, { minWidth } from '../../../../core/breakpoints/Breakpoint'
import { composeResponsive, ResponsiveValue } from '../../../../core/breakpoints/ResponsiveValue'

export interface RowContainerProps {
  justifyContent: string
  alignItems: string
  marginTop: ResponsiveValue<string>
  marginLeft: ResponsiveValue<string>
  marginRight: ResponsiveValue<string>
  marginBottom: ResponsiveValue<string>
}

const RowContainer = styled.div.attrs<RowContainerProps, any>((p: RowContainerProps) => ({
  breakpoints: composeResponsive({
    marginTop: p.marginTop,
    marginLeft: p.marginLeft,
    marginRight: p.marginRight,
    marginBottom: p.marginBottom
  })
}))`
  display: flex;
  flex-direction: row;
  justify-content: ${p => p.justifyContent};
  align-items: ${p => p.alignItems};
  
  & > div {
    ${p => p.breakpoints[Breakpoint.XS]};
    
    @media screen and (min-width: ${minWidth(Breakpoint.SM)}px) {
      ${p => p.breakpoints[Breakpoint.SM]};
    }
    @media screen and (min-width: ${minWidth(Breakpoint.MD)}px) {
      ${p => p.breakpoints[Breakpoint.MD]};
    }
    @media screen and (min-width: ${minWidth(Breakpoint.LG)}px) {
      ${p => p.breakpoints[Breakpoint.LG]};
    }
    @media screen and (min-width: ${minWidth(Breakpoint.XL)}px) {
      ${p => p.breakpoints[Breakpoint.XL]};
    }
    @media screen and (min-width: ${minWidth(Breakpoint.XXL)}px) {
      ${p => p.breakpoints[Breakpoint.XXL]};
    }
  }
`

export default RowContainer
