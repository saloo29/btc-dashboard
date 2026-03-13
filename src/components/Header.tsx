import ThemeToggle from "./ThemeToggle";


type Props = {
  toggleTheme: () => void;
  theme: 'dark' | 'light';
}

const Header = ({ toggleTheme, theme } : Props) => {
  return (
    <>
      <header className="flex items-center justify-between pb-4 pt-4 mb-6 border-b border-black/8 dark:border-white/8">
        <div className="flex items-center gap-3.5">
          <div className="flex pl-12 justify-between gap-4">
            <div className="flex w-11 h-11 rounded-full items-center justify-center text-xl font-bold text-zinc-900 dark:text-white bg-btc">
              ₿
            </div>
            <div>
              <h1 className="font-display text-xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 bg-">
                BTC / USDT
              </h1>
              <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-900 dark:text-zinc-50">
                Live Market Dashboard
              </p>
            </div>
          </div>
          <div>
            <div>
              <p>Connected</p>
            </div>
            <div>
              <ThemeToggle toggleTheme={toggleTheme} theme={theme}/>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;