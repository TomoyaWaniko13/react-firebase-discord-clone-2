import { DocumentData } from '@firebase/firestore';
import { useAppDispatch } from '@/src/store/hooks';
import { setChannelInfo } from '@/src/store/slices/channelSlice';

interface Props {
  id: string;
  channel: DocumentData;
}

const SidebarChannel = ({ id, channel }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <button
      key={channel.channel.id}
      className={'flex gap-2 font-light'}
      onClick={() => dispatch(setChannelInfo({ channelId: id, channelName: channel.channel.channelName }))}
    >
      <span>#</span>
      <span>{channel.channel.channelName}</span>
    </button>
  );
};

export default SidebarChannel;
