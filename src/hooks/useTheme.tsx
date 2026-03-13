import { useEffect, useState } from "react";


const useTheme = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(
    () => (localStorage.getItem('theme') as 'dark' | 'light') || 'dark'
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme == 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme  = () => 
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  
  return {theme, toggleTheme}
}

export default useTheme;