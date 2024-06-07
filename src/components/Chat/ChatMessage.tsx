import { useAppSelector } from '@/src/store/hooks';
import { useEffect, useState } from 'react';
import { collection, onSnapshot, Timestamp } from '@firebase/firestore';
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

const ChatMessage = () => {
  const user = useAppSelector((state) => state.user.user);
  const [messages, setMessages] = useState([]);

  const channelId = useAppSelector((state) => state.channel.channelId);

  useEffect(() => {
    const collectionRef = collection(db, 'channels', String(channelId), 'messages');
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const fetchedMessages = [];
      snapshot.docs.forEach((doc) => {
        fetchedMessages.push({
          timestamp: serverTimestamp(),
          message: doc.data().message,
          user: user,
        });
      });
      setMessages(fetchedMessages);
    });
    return () => unsubscribe();
  }, [channelId]);

  messages.map((message) => console.log(message.user.photo));

  return (
    <>
      {messages.map((message, index) => (
        <div key={index} className={'p-2'}>
          <div className={'flex gap-1 items-center text-sm'}>
            <img src={message.user.photo} alt={'user photo'} width={1200} className={'rounded'} />
            <span>{message.user.displayName || 'this'}</span>
          </div>
          <span className={'text-md'}>{message.message}</span>
          {/*<span>{new Date(message.timestamp.toDate()).toLocaleString()}</span>*/}
        </div>
      ))}
    </>
  );
};

export default ChatMessage;
