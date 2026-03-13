

type Props = {
  toggleTheme: () => void;
  theme: 'dark' | 'light';
}

const ThemeToggle = ({theme, toggleTheme} : Props) => {
  return (
    <button 
      onClick={toggleTheme} 
      className="
        flex items-center justify-center
        w-9 h-9 rounded-full 
        bg-zinc-100 dark:bg-zinc-800
        border border-zinc-200 dark:border-zinc-700
        hover:bg-zinc-200 dark:hover:bg-zinc-700
        "
      >
        <span>{theme === 'dark' ?  '☀️' : '🌙'}</span>
    </button>
  )

}

export default ThemeToggle;