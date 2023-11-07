const white_primary = '#fff'
const blue_primary = '#0d82ff'
const grey_primary = '#5a7494'

export const Theme = {
  colors: {
    main_text: '#000',
    second_text: '#84858A',
    bg: white_primary,
    accent_color: blue_primary,
    sidebar_hover: '#F3F5F9',
    sidebar_icon_bg: '#eff6fe',
    sidebar_icon_fill: white_primary,
    sidebar_exit_main: '#E52216',
    sidebar_exit_bg: '#FBF3F2',
    auth_input_border: '#d2d8e2',
    auth_input_color: '#111924',
    entry_button_text: white_primary,
    auth_input_label: grey_primary,
    auth_remember_link: blue_primary,
    auth_socials_title: grey_primary,
    trylink_bg: blue_primary,
    trylink_container: white_primary,
    trylink_title: white_primary,
    trylink_span: white_primary,
    trylink_svg: white_primary,
    page_login_bg: '#f1f2f4',
    widget_auth_block_bg: white_primary,
    widget_auth_title: '#0a0a0a',
    feat_auth_button_svg: blue_primary,
    auth_input_help: 'red',
  },
}

type ColorKey = keyof typeof Theme.colors

export const getColor = (colorName: ColorKey) =>
  Theme.colors[colorName] || 'inherit'
