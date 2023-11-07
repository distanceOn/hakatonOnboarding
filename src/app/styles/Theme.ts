export const Theme = {
  colors: {},
}

type ColorKey = keyof typeof Theme.colors

export const getColor = (colorName: ColorKey) =>
  Theme.colors[colorName] || 'inherit'
