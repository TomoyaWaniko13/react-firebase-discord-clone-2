import { useAppSelector } from '@/src/store/hooks';
import { auth } from '@/lib/firebase';

const ChatHeader = () => {
  return (
    <header className={'bg-gray-950 p-3 flex justify-between'}>
      <div>
        <span># text</span>
      </div>
      <button onClick={() => auth.signOut()} className={'p-1 bg-white rounded text-black'}>
        logout
      </button>
    </header>
  );
};

export default ChatHeader;
