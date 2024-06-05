import ChatMessage from '@/src/components/Chat/ChatMessage';
import ChatInput from '@/src/components/Chat/ChatInput';
import ChatHeader from '@/src/components/Chat/ChatHeader';

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
