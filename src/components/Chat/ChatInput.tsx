import { useState } from 'react';
import { useAppSelector } from '@/src/store/hooks';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '@/lib/firebase';
import { serverTimestamp } from '@firebase/database';

const ChatInput = () => {
  const [inputText, setInputText] = useState<string>('');
  const channelName = useAppSelector((state) => state.channel.channelName);
  const channelId = useAppSelector((state) => state.channel.channelId);
  const user = useAppSelector((state) => state.user.user);

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.trim() === '') return; // prevent empty messages

    const collectionRef = collection(db, 'channels', String(channelId), 'messages');

    await addDoc(collectionRef, {
      message: inputText,
      timestamp: serverTimestamp(),
      user: user,
    });

    // Reset the input field
    setInputText('');
  };

  return (
    <form className={'bg-gray-950 p-4'} onSubmit={sendMessage}>
      <div className={'flex font-extralight'}>
        <input
          type='text'
          className={'bg-transparent w-full outline-none'}
          placeholder={'Message #text'}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type={'submit'} className={'bg-white rounded text-black p-1 font-extralight'}>
          send
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
