import useBitbyTickerWs from "./services/byBitWebsocket";
import PriceHero from "./components/PriceHero";
import Header from "./components/Header";
import TradingViewChart from "./components/TradingViewChart";
import StatsList from "./components/StatsList";
import useTheme from "./hooks/useTheme";

function App() {
  const { ticker, status, sparkData } = useBitbyTickerWs();
  const { theme, toggleTheme } = useTheme();

  console.log(ticker);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">
      <div className="max-w-screen-xl mx-auto px-6 py-6">
        <Header toggleTheme={toggleTheme} theme={theme} status={status} />
        <PriceHero ticker = {ticker} sparkData={sparkData}/>
        <StatsList ticker={ticker} />
        <TradingViewChart theme={theme}/>
      </div>
      
      {/* <div className="bg-red-500 dark:bg-blue-500 p-10">
        DARK MODE TEST
      </div> */}
    </div>
    
  )
}

export default App
