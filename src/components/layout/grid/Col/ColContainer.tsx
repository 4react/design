import styled from 'styled-components'
import Breakpoint, { minWidth } from '../../../../core/breakpoints/Breakpoint'
import { composeResponsive, ResponsiveValue } from '../../../../core/breakpoints/ResponsiveValue'

export interface ColContainerProps {
  order: ResponsiveValue<number>
  justifyContent: ResponsiveValue<string>
  alignItems: ResponsiveValue<string>
  width: ResponsiveValue<string>
  marginLeft: ResponsiveValue<string>
}

const ColContainer = styled.div.attrs<ColContainerProps, any>((p: ColContainerProps) => ({
  breakpoints: composeResponsive({
    order: p.order,
    justifyContent: p.justifyContent,
    alignItems: p.alignItems,
    width: p.width,
    marginLeft: p.marginLeft
  })
}))`
  display: flex;
  flex-direction: column;
  
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
`

export default ColContainer
