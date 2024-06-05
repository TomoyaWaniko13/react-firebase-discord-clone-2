import Sidebar from '@/src/components/Sidebar';
import Chat from '@/src/components/Chat';

export default function Home() {
  return (
    <div className={'flex flex-row text-white'}>
      <Sidebar />
      <main className={'w-screen'}>
        <Chat />
      </main>
    </div>
  );
}
