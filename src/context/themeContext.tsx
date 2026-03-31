import { createContext, useState, ReactNode } from "react";
import { ConfigProvider, theme } from "antd";

export interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            <ConfigProvider
                theme={{
                    algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
                }}
            >
                {children}
            </ConfigProvider>
        </ThemeContext.Provider>
    );
};
