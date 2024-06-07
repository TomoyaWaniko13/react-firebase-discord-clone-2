import { useAppSelector } from '@/src/store/hooks';
import { addDoc, collection, DocumentData } from '@firebase/firestore';
import useChannels from '@/src/hooks/useChannels';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/firebase';
import SidebarChannel from '@/src/components/Sidebar/SidebarChannel';

interface Channel {
  id: string;
  channel: DocumentData;
}

const RightSidebar = () => {
  const channels = useChannels();
  const user = useAppSelector((state) => state.user.user);

  const addChannel = async () => {
    const channelName: string | null = prompt('create new channel');
    if (channelName) {
      const docRef = await addDoc(collection(db, 'channels'), {
        channelName: channelName,
      });
    }
  };

  return (
    <div className={'h-screen bg-gray-800 flex flex-col justify-between gap-3 p-3'}>
      <div className={'flex flex-col gap-3'}>
        {channels.map((channel) => (
          <SidebarChannel key={channel.id} id={channel.id} channel={channel} />
        ))}
        <Button size={'sm'} onClick={() => addChannel()}>
          add
        </Button>
      </div>
      <footer className={'flex flex-col items-center gap-3 text-center mx-0'}>
        <img src={user?.photo} alt='user photo' className={'rounded'} width={50} />
        <span className={'text-sm font-extralight'}>{user?.displayName}</span>
      </footer>
    </div>
  );
};

export default RightSidebar;
