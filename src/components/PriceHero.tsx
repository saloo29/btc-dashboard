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
      <div>
        <div>
            <div>
              <div>
                <p>BTS LAST PRICE</p>
              </div>
              <div>
                <span>
                  {hasPrice ? '$' + (ticker?.lastPrice) : (
                    <span>Connecting...</span>
                  )}
                </span>
                {pctStr && (
                  <span>
                    {pctStr}
                  </span>
                )}
              </div>
              <div>

              </div>
            </div>

            <div>
              <div>
                <p>
                  Mark Price:
                </p>
                <span>
                  {hasMarkPrice ? '$' + (ticker!.markPrice) : '—'}
                </span>
              </div>
              <div>

              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default PriceHero;