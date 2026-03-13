// TradingViewWidget.jsx
import { useEffect, useRef, memo } from 'react';

type Props = {
  theme: 'dark' | 'light'
}

const TradingViewWidget = ({ theme } : Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(
    () => {
      const container = containerRef.current;
      if(!container) return;

      container.innerHTML = '';

      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        allow_symbol_change: false,
        interval: "1",
        locale: "en",
        style: "1",
        symbol: "BYBIT:BTCUSDT.P",
        theme: theme, // ← now it's the actual variable
        timezone: "Etc/UTC",
        withdateranges: true,
        autosize: true,
        hide_side_toolbar: false,
      })
      container.appendChild(script);

      return () => {
        container.innerHTML = '';
      };
    },
    [theme]
  );

  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden mb-4 "
      style={{ height: 'calc(100vh - 380px)' }}
    >
      <div
        ref={containerRef}
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
}

export default memo(TradingViewWidget);
