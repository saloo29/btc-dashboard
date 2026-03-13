import type { BtcTickerType } from "../types/ticker";
import { useEffect, useState } from 'react';

const useBitbyTickerWs = () => {
  const [ticker, setTicker] = useState<BtcTickerType | null>(null);

  useEffect(() => {
    const socket = new WebSocket("wss://stream.bybit.com/v5/public/linear");

    socket.onopen = () => {
      console.log("Connected to ByBit WebSocket");

      socket.send(
        JSON.stringify({
          op:"subscribe",
          args: ["tickers.BTCUSDT"]
        })
      );
    };

    socket.onmessage = (event) => {
      const msg =  JSON.parse(event.data);

      if(msg.topic === "tickers.BTCUSDT") {
        const newFields = msg.data;

        setTicker((prev) => ({
          ...prev,
          ...newFields,
        }));
      };
    };

    socket.onerror = (error) => {
      console.log("error is ", error);
    };

    socket.onclose = () => {
      console.log("websocket closed.")
    };

    return () => socket.close();
  }, []);

  return { ticker };
}

export default useBitbyTickerWs;


/**
 * data.
 * lastPrice
 * markPrice
 * highPrice24h
 * lowPrice24h
 * volume24h
 * turnover24h
 * prevPrice24h
 * price24hPcnt
 */