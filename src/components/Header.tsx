import ThemeToggle from "./ThemeToggle";
import type { WebscoketStatus } from '../services/byBitWebsocket'
import StatusBadge from './StatusBadge';

type Props = {
  toggleTheme: () => void;
  theme: 'dark' | 'light';
  status: WebscoketStatus
}

const Header = ({ toggleTheme, theme, status } : Props) => {
  return (
    <>
      <header className="flex items-center justify-between pb-4 pt-4 pr-20 mb-6 border-b border-black/8 dark:border-white/8">
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
          <div className="flex items-center gap-3">
            <StatusBadge status={status}/>
            <ThemeToggle toggleTheme={toggleTheme} theme={theme}/>
          </div>
      </header>
    </>
  )
}

export default Header;