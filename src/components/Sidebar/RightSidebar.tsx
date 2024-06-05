import { useAppSelector } from '@/src/store/hooks';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

const RightSidebar = () => {
  const user = useAppSelector((state) => state.user.user);
  console.log(user?.photo);

  return (
    <div className={'h-screen bg-gray-800 flex flex-col justify-between gap-3 p-3 '}>
      <div>
        <div>
          <span>#</span>
          <span>text</span>
        </div>
        <div>
          <span>#</span>
          <span>text</span>
        </div>
        <div>
          <button>+</button>
        </div>
      </div>
      <footer className={'flex flex-col gap-3  text-center'}>
        <img src={user?.photo} alt='user photo' className={'rounded'} />
        <span className={'text-sm font-extralight'}>{user?.displayName}</span>
      </footer>
    </div>
  );
};

export default RightSidebar;
