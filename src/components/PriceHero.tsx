import type { BtcTickerType } from "../types/ticker";

type Props = {
  ticker: BtcTickerType | null;
}

const PriceHero = ({ ticker } :  Props) => {

  const lastPrice = parseFloat(ticker?.lastPrice ?? "0");
  const markPrice = parseFloat(ticker ?.markPrice ?? "0");
  const pct =  parseFloat(ticker?.price24hPcnt ?? "0") * 100;
  const isPositive = pct >= 0;

  const hasPrice = ticker !== null && lastPrice > 0;
  const hasMarkPrice = ticker !==null && markPrice > 0;
  const pctStr = ticker ? (isPositive ? '+' : '') + pct.toFixed(2) + '%' : null;

  return (
    <>
      <div className="
        relative overflow-hidden
        rounded-2xl border border-zinc-200 dark:border-zinc-700
        bg-white dark:bg-zinc-800
        backdrop-blur-sm p-7
        mb-4 flex flex-col gap-3
      ">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400 mb-2 font-mono">
            BTC Last Price
          </p>
          <div className="flex items-baseline gap-4">
            <span className={`text-5xl sm:text-6xl font-extrabold text-zinc-800 dark:text-zinc-200`}>
              {hasPrice ? '$' + lastPrice.toLocaleString() : (
                <span className="text-zinc-500 dark:text-zinc-600 text-3xl animate-pulse">Connecting...</span>
              )}
            </span>
            {pctStr && (
              <span className={`text-lg font-bold px-2 py-1 rounded-xl text-zinc ${isPositive ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'} transition-all duration-300` }>
                {pctStr}
              </span>
            )}
          </div>
        </div>
        
          <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
            Mark Price: <span className="text-btc font-bold text-lg">
              {hasMarkPrice ? '$' + markPrice.toLocaleString() : '—'}
            </span>
          </p>
          
          
      </div>
    </>
  );
}

export default PriceHero;