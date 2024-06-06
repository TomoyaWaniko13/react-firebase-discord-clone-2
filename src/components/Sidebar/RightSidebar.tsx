import { useAppSelector } from '@/src/store/hooks';
import { DocumentData } from '@firebase/firestore';
import useChannels from '@/src/hooks/useChannels';

interface Channel {
  id: string;
  channel: DocumentData;
}

const RightSidebar = () => {
  const channels = useChannels();
  const user = useAppSelector((state) => state.user.user);

  return (
    <div className={'h-screen bg-gray-800 flex flex-col justify-between gap-3 p-4'}>
      <div>
        {channels.map((channel) => (
          <button key={channel.channel.id} className={'flex gap-2 font-light'}>
            <span>#</span>
            <span>{channel.channel.channelName}</span>
          </button>
        ))}
      </div>
      <footer className={'flex flex-col items-center gap-3 text-center mx-0'}>
        <img src={user?.photo} alt='user photo' className={'rounded'} width={50} />
        <span className={'text-sm font-extralight'}>{user?.displayName}</span>
      </footer>
    </div>
  );
};

export default RightSidebar;
