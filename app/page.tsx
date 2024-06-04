import Sidebar from '@/components/Sidebar';
import Chat from '@/components/Chat';

export default function Home() {
  return (
    <div className={'flex flex-row text-white'}>
      <Sidebar />
      <div className={'w-screen'}>
        <Chat />
      </div>
    </div>
  );
}
