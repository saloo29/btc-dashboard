type StatsCardProp = {
  label: string;
  value: string;
  icon: string;
  info?: string;
  accent?: 'green' | 'red' | 'btc' | 'default';
};

const accentMap: Record<'green' | 'red' | 'btc' | 'default', string> =  {
  green: 'text-green-500',
  red: 'text-red-500',
  btc: 'text-btc',
  default: 'text-zinc-900 dark:text-white',
}

const StatsCard = ({ label, value, icon, info, accent = 'default' } : StatsCardProp) => {
  return (
    <>
      <div className="flex justify-between border rounded-2xl border-zinc-300 dark:border-zinc-700 cols-2 p-6 bg-white dark:bg-zinc-800">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400">{label}</p>
          <span className={`font-bold text-2xl ${accentMap[accent]}`}>
            {value}
          </span>
          <p className="text-xs tracking-[0em] text-zinc-500 dark:text-zinc-400">{info}</p>
        </div>
        <div className="text-xl tracking-[0em] text-zinc-500 dark:text-zinc-400">
          {icon}
        </div>
      </div>
    </>
  )
}

export default StatsCard;
