import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type ThemeMode = 'dark' | 'light' | 'industrial';

export const THEME_OPTIONS: Array<{
  mode: ThemeMode;
  icon: string;
  metaThemeColor: string;
  preview: [string, string, string];
}> = [
  {
    mode: 'dark',
    icon: 'fa-moon',
    metaThemeColor: '#0a0a0a',
    preview: ['#0a0a0a', '#00f0ff', '#ff0066'],
  },
  {
    mode: 'light',
    icon: 'fa-sun',
    metaThemeColor: '#f5efe6',
    preview: ['#f8f3ec', '#406ff9', '#d46a43'],
  },
  {
    mode: 'industrial',
    icon: 'fa-industry',
    metaThemeColor: '#111111',
    preview: ['#111111', '#f6be00', '#5e5e5e'],
  },
];

type ThemeContextValue = {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
};

const THEME_STORAGE_KEY = 'i-design-theme';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const getSavedTheme = (): ThemeMode => {
  if (typeof window === 'undefined') {
    return 'industrial';
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return THEME_OPTIONS.some(({ mode }) => mode === savedTheme)
    ? (savedTheme as ThemeMode)
    : 'industrial';
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => getSavedTheme());

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
    document.documentElement.classList.toggle('industrial', theme === 'industrial');
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute(
        'content',
        THEME_OPTIONS.find(({ mode }) => mode === theme)?.metaThemeColor ?? '#111111'
      );
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme: (nextTheme) => setThemeState(nextTheme),
      toggleTheme: () =>
        setThemeState((currentTheme) => {
          const currentIndex = THEME_OPTIONS.findIndex(({ mode }) => mode === currentTheme);
          return THEME_OPTIONS[(currentIndex + 1) % THEME_OPTIONS.length].mode;
        }),
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
};
