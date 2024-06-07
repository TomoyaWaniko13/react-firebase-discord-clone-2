import { useAppSelector } from '@/src/store/hooks';
import { auth } from '@/lib/firebase';
import { Button } from '@/components/ui/button';

const ChatHeader = () => {
  const channelName = useAppSelector((state) => state.channel.channelName);
  return (
    <header className={'bg-gray-950 p-2 flex items-center justify-between text-sm'}>
      <div>
        <span># {channelName}</span>
      </div>
      <Button onClick={() => auth.signOut()}>logout</Button>
    </header>
  );
};

export default ChatHeader;
