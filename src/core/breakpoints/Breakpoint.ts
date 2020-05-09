enum Breakpoint {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl'
}

export const minWidth = (breakpoint: Breakpoint) => {
  switch (breakpoint) {
    case Breakpoint.XS:
      return undefined
    case Breakpoint.SM:
      return 480
    case Breakpoint.MD:
      return 768
    case Breakpoint.LG:
      return 992
    case Breakpoint.XL:
      return 1200
    case Breakpoint.XXL:
      return 1600
    default:
      return undefined
  }
}

export const maxWidth = (breakpoint: Breakpoint) => {
  switch (breakpoint) {
    case Breakpoint.XS:
      return 479
    case Breakpoint.SM:
      return 767
    case Breakpoint.MD:
      return 991
    case Breakpoint.LG:
      return 1199
    case Breakpoint.XL:
      return 1199
    case Breakpoint.XXL:
    default:
      return undefined
  }
}

export default Breakpoint
