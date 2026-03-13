import useBitbyTickerWs from "./services/byBitWebsocket";
import PriceHero from "./components/PriceHero";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard"
import TradingViewChart from "./components/TradingViewChart";
import useTheme from "./hooks/useTheme";

function App() {
  const { ticker } = useBitbyTickerWs();
  const { theme, toggleTheme } = useTheme();

  console.log(ticker);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <PriceHero ticker = {ticker} />
      <StatsCard />
      <TradingViewChart />
      {/* <div className="bg-red-500 dark:bg-blue-500 p-10">
        DARK MODE TEST
      </div> */}
    </div>
    
  )
}

export default App
