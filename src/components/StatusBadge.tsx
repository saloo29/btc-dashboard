import type { WebscoketStatus } from "../services/byBitWebsocket";

type Props = {
  status: WebscoketStatus;
}

const statusConfig = {
  connected: {
    dotClass: 'bg-green-500 animate-pulse',
    label: 'CONNECTED',
    containerClass: 'border-green-500/20 bg-green-500/10 text-green-500',
  },
  connecting: {
    dotClass: 'bg-orange-400 animate-pulse',
    label: 'CONNECTING',
    containerClass: 'border-orange-500/20 bg-orange-500/10 text-orange-400',
  },
  disconnected: {
    dotClass: 'bg-red-500',
    label: 'DISCONNECTED',
    containerClass: 'border-red-500/20 bg-red-500/10 text-red-500',
  },
}

const StatusBadge = ({status} : Props) => {
 const { dotClass, label, containerClass } = statusConfig[status];
 return (
  <>
    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono ${containerClass}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`}/>
      <span>{label}</span>
    </div>
  </>
 );
}

export default StatusBadge;