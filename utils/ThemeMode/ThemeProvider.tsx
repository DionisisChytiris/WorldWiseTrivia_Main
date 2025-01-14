import { lightColors, darkColors } from "../../Colors/Colors";
import { ColorSchemeName, useColorScheme } from "react-native";
import React, {createContext, useContext, useEffect, useState} from 'react'

export const ThemeContext = createContext({
    dark: false,
    colors: lightColors,
    setScheme: (scheme?: string)=>{}
})

export const ThemeProvider= (props:any)=>{
    // const colorScheme = useColorScheme(colorScheme == 'dark')
    // const colorScheme: ColorSchemeName = useColorScheme()
    // const [isDark, setIsDark] = useState(colorScheme =='dark')
    const [isDark, setIsDark] = useState(false);

    const defaultTheme:any = {
        dark: isDark,
        colors: isDark ? darkColors : lightColors,
        setScheme: (scheme:any)=> setIsDark(scheme == 'dark')
    }

    // useEffect(()=>{
    //     setIsDark(colorScheme=='dark')
    // }, [colorScheme])

    return (
        <ThemeContext.Provider value={defaultTheme}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export const useTheme = ()=>useContext(ThemeContext)