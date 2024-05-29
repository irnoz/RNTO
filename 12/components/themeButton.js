import { Button } from "react-native"
import { useContext } from "react"
import { useTheme } from "../context/theme.context"

const ThemeButton = () => {
    const {toggle} = useTheme()

    return  (
        <Button title="Toggle" onPress={toggle} />
    )
}

export default ThemeButton