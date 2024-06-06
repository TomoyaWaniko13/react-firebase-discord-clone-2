import { useAppSelector } from '@/src/store/hooks';
import { auth } from '@/lib/firebase';
import { Button } from '@/components/ui/button';

const ChatHeader = () => {
  return (
    <header className={'bg-gray-950 p-2 flex items-center justify-between'}>
      <div>
        <span># text</span>
      </div>
      <Button onClick={() => auth.signOut()}>logout</Button>
    </header>
  );
};

export default ChatHeader;
