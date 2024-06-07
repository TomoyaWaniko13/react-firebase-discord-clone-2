import ChatMessage from '@/src/components/Chat/ChatMessage';
import ChatInput from '@/src/components/Chat/ChatInput';
import ChatHeader from '@/src/components/Chat/ChatHeader';
import { collection, onSnapshot, orderBy, query, Timestamp } from '@firebase/firestore';
import { useAppSelector } from '@/src/store/hooks';
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { serverTimestamp } from '@firebase/database';

interface Messages {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

const Chat = () => {
  const user = useAppSelector((state) => state.user.user);
  const [messages, setMessages] = useState<Messages[]>([]);

  const channelId = useAppSelector((state) => state.channel.channelId);

  const collectionRef = collection(db, 'channels', String(channelId), 'messages');
  const collectionRefOrderBy = query(collectionRef, orderBy('timestamp'));

  useEffect(() => {
    const unsubscribe = onSnapshot(collectionRefOrderBy, (snapshot) => {
      const fetchedMessages: Messages[] = [];
      snapshot.docs.forEach((doc) => {
        fetchedMessages.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setMessages(fetchedMessages);
    });
    return () => unsubscribe();
  }, [channelId]);

  return (
    <div className={'bg-gray-600 h-screen flex flex-col'}>
      <ChatHeader />
      <div className={'h-screen flex-1 overflow-y-scroll'}>
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message.message} timestamp={message.timestamp} user={message.user} />
        ))}
      </div>
      <ChatInput />
    </div>
  );
};

export default Chat;
