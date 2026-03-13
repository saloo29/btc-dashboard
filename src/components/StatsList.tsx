import StatsCard from "./StatsCard";
import type { BtcTickerType } from "../types/ticker"

type StatsListProps = {
  ticker: BtcTickerType | null;
}

const formatTurnover = (n: number): string => {
  if (n >= 1e9) return '$' + (n / 1e9).toFixed(2) + 'B';
  if (n >= 1e6) return '$' + (n / 1e6).toFixed(2) + 'M';
  if (n >= 1e3) return '$' + (n / 1e3).toFixed(2) + 'K';
  return '$' + n.toFixed(2);
};

const formatVolume = (n: number): string => {
  if (n >= 1e6) return (n / 1e6).toFixed(2) + 'M BTC';
  if (n >= 1e3) return (n / 1e3).toFixed(2) + 'K BTC';
  return n.toFixed(2) + ' BTC';
};

const StatsList = ({ ticker } : StatsListProps) => {
  const high = parseFloat(ticker?.highPrice24h ?? "0");
  const low = parseFloat(ticker?.lowPrice24h ?? "0");
  const turnover = parseFloat(ticker?.turnover24h ?? "0");
  const volume = parseFloat(ticker?.volume24h ?? "0");


  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <StatsCard label="24H High" value={high > 0 ? '$' + high.toLocaleString() : '—'} info={"Daily maximum"} accent="green" icon="↑" />
      <StatsCard label="24H Low" value={low > 0 ? '$' + low.toLocaleString() : '—'} info={"Daily minimum"} accent="red" icon="↓" />
      <StatsCard label="24H Turnover" value={turnover > 0 ? formatTurnover(turnover) : '—'} info={"USDT volume"} accent="btc" icon="◈" />
      <StatsCard label="24H Volume" value={volume > 0 ? '$' + formatVolume(volume) : '—'} info={"BTC traded"} accent="default" icon="⟳" />
    </div>
  )
}

export default StatsList;