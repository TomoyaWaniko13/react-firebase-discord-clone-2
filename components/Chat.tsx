import ChatMessage from '@/components/ChatMessage';
import ChatInput from '@/components/ChatInput';
import ChatHeader from '@/components/ChatHeader';

const Chat = () => {
  return (
    <div className={'bg-gray-600 h-screen flex flex-col'}>
      <div>
        <ChatHeader />
      </div>
      <div className={'h-screen'}>
        <ChatMessage />
      </div>
      <div>
        <ChatInput />
      </div>
    </div>
  );
};

export default Chat;
