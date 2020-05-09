import styled, { css } from 'styled-components'
import Breakpoint, { minWidth } from '../../../../core/breakpoints/Breakpoint'
import { ResponsiveValue } from '../../../../core/breakpoints/ResponsiveValue'
import { size } from '../../../../core/size'

export interface ContainerContainerProps {
  responsive: boolean
}

export const ResponsiveContainerWidths: Omit<ResponsiveValue<number>, 'xs'> = {
  [Breakpoint.SM]: 480,
  [Breakpoint.MD]: 600,
  [Breakpoint.LG]: 900,
  [Breakpoint.XL]: 1100,
  [Breakpoint.XXL]: 1200
}

const responsiveStyle = css`
  width: 100%;
  @media screen and (min-width: ${minWidth(Breakpoint.SM)}px) {
    width: ${size(ResponsiveContainerWidths[Breakpoint.SM])};
  }
  @media screen and (min-width: ${minWidth(Breakpoint.MD)}px) {
    width: ${size(ResponsiveContainerWidths[Breakpoint.MD])};
  }
  @media screen and (min-width: ${minWidth(Breakpoint.LG)}px) {
    width: ${size(ResponsiveContainerWidths[Breakpoint.LG])};
  }
  @media screen and (min-width: ${minWidth(Breakpoint.XL)}px) {
    width: ${size(ResponsiveContainerWidths[Breakpoint.XL])};
  }
  @media screen and (min-width: ${minWidth(Breakpoint.XXL)}px) {
    width: ${size(ResponsiveContainerWidths[Breakpoint.XXL])};
  }
`

const fluidStyle = css`
  width: 100%;
`

export const Container = styled.div<ContainerContainerProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding-left: ${size(24)};
  padding-right: ${size(24)};
  margin: auto;
  
  ${p => (p.responsive ? responsiveStyle : fluidStyle)}
`
