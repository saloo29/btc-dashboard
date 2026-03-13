import type { BtcTickerType } from "../types/ticker";
import { useEffect, useState } from 'react';

export type WebscoketStatus = 'connecting' | 'connected' | 'disconnected';

const useBitbyTickerWs = () => {
  const [ticker, setTicker] = useState<BtcTickerType | null>(null);
  const [status, setStatus] = useState<WebscoketStatus>('connecting');
  const [sparkData, setSparkData] = useState<number[]>([]);

  useEffect(() => {
    const socket = new WebSocket("wss://stream.bybit.com/v5/public/linear");

    socket.onopen = () => {
      console.log("Connected to ByBit WebSocket");
      setStatus('connected');

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

        const price = parseFloat(newFields.lastPrice ?? "0");

        setTicker((prev) => ({
          ...prev,
          ...newFields,
        }));

        setSparkData(prev => {
          if(isNaN(price) || price === 0) return prev;
          const next = [...prev, price];
          return next.length > 60 ? next.slice(-60) : next;
        });
      };
    };

    socket.onerror = (error) => {
      console.log("error is ", error);

      setStatus('disconnected');

    };

    socket.onclose = () => {
      console.log("websocket closed.")

      setStatus('disconnected');
    };

    return () => socket.close();
  }, []);

  return { ticker, status, sparkData };
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