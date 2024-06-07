import { Timestamp } from '@firebase/firestore';
import Image from 'next/image';

type Props = {
  message: string;
  timestamp: Timestamp;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
};

const ChatMessage = ({ message, timestamp, user }: Props) => {
  const photoURL = user.photo;
  console.log(photoURL);
  return (
    <div className={'p-2 flex flex-col gap-1'}>
      <div className={'flex gap-3 font-bold  items-center'}>
        <Image src={user?.photo} alt={'user photo'} width={30} height={30} className={'rounded'} />
        <span>{user.displayName}</span>
        <span>{new Date(timestamp?.toDate()).toLocaleString('ja-jp')}</span>
      </div>
      <span className={'text-md'}>{message}</span>
    </div>
  );
};

export default ChatMessage;
