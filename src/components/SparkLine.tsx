import { Sparklines, SparklinesLine } from "react-sparklines";


type Props = {
  data: number[];
};

const Sparkline = ({ data } : Props) => {
  if(data.length < 2) return null;

  const isUp = data[data.length - 1] >= data[0];

  return(
     <Sparklines data={data} width={160} height={48}>
      <SparklinesLine 
        color={isUp ? '#22c55e' : '#ef4444'} 
        style={{ fill: 'none', strokeWidth: 2 }} 
      />
    </Sparklines>
  );
}

export default Sparkline;