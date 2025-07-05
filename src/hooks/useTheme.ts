import { useContext } from "react"
import { ThemeContext, type ThemeContextType} from '../context/ThemeContext';

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme должна использоваться в ThemeProvider')
    }
    return context
}