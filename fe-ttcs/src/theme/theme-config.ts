import type { ThemeConfig } from 'antd'

const theme: ThemeConfig = {
    token: {
        colorPrimary: '#FFFFFF',
        borderRadius: 2,
    },
    components: {
        Typography: {
            colorText: 'rgba(0, 0, 0,0.85)',
            colorTextHeading: 'rgba(0,0,0,0.85)',
        },
        Menu: {
            itemBorderRadius: 0,
            itemMarginInline: 0,
        },
    },
}

export default theme
