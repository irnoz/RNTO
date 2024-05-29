import {createContext, useContext, useState} from 'react'
import {Appearance} from 'react-native'

const deviceTheme = Appearance.getColorScheme()
console.log(deviceTheme)
const themeConfig = {
    light: {
        color: '#047d20',
        backgroundColor: '#95c4a0'
    },
    dark: {
        color: '#95c4a0',
        backgroundColor: '#047d20'
    }
}

const ThemeContext = createContext(themeConfig[deviceTheme])

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(themeConfig[deviceTheme])

    const toggle = () => {
        setTheme((currentTheme) => currentTheme === themeConfig.light ? themeConfig.dark : themeConfig.light)
    }

    return (
        <ThemeContext.Provider value={{theme, toggle}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeContextProvider
