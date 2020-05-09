enum RowVAlign {
  TOP = 'top',
  MIDDLE = 'middle',
  BOTTOM = 'bottom',
  FIT = 'fit'
}

export const rowAlignItems = (vAlign: RowVAlign): string => {
  switch (vAlign) {
    case RowVAlign.TOP:
      return 'flex-start'
    case RowVAlign.MIDDLE:
      return 'center'
    case RowVAlign.BOTTOM:
      return 'flex-end'
    case RowVAlign.FIT:
      return 'stretch'
    default:
      return 'top'
  }
}

export default RowVAlign
