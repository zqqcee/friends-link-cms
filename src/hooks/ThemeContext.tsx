'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({ theme: 'dark', toggleTheme: () => { } })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light')
    // 初始化主题
    useEffect(() => {
        // 检查本地存储
        const savedTheme = localStorage.getItem('cms-theme') as Theme
        // 检查系统主题偏好
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

        const initialTheme = savedTheme || systemTheme
        setTheme(initialTheme)
        // 应用主题
        if (initialTheme === 'dark') {
            document.documentElement.classList.add('dark')
        }
    }, [])

    // 切换主题
    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light'
            localStorage.setItem('cms-theme', newTheme)
            document.documentElement.classList.remove(prevTheme)
            document.documentElement.classList.add(newTheme)
            return newTheme
        })
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// 自定义 hook
export function useTheme() {
    const context = useContext(ThemeContext)
    return context
}