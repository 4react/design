enum RowJustify {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
  SPACE_BETWEEN = 'space-between',
  SPACE_AROUND = 'space-around'
}

export const rowJustifyContent = (rowJustify: RowJustify): string => {
  switch (rowJustify) {
    case RowJustify.LEFT:
      return 'flex-start'
    case RowJustify.RIGHT:
      return 'flex-end'
    case RowJustify.CENTER:
      return 'center'
    case RowJustify.SPACE_BETWEEN:
      return 'space-between'
    case RowJustify.SPACE_AROUND:
      return 'space-around'
    default:
      return 'flex-start'
  }
}

export default RowJustify
