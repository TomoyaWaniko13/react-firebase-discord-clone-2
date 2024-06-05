import { useAppSelector } from '@/src/store/hooks';

const RightSidebar = () => {
  const user = useAppSelector((state) => state.user.user);
  return (
    <div className={'h-screen bg-gray-800 flex flex-col gap-3 p-3 '}>
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
      <footer>
        <img src={user?.photo} alt='' />
      </footer>
    </div>
  );
};

export default RightSidebar;
