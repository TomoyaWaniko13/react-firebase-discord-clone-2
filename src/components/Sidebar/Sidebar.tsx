import LeftSidebar from '@/src/components/Sidebar/LeftSidebar';
import RightSidebar from '@/src/components/Sidebar/RightSidebar';
import { useAppSelector } from '@/src/store/hooks';
import { db } from '@/lib/firebase';
import { collection } from '@firebase/firestore';

const Sidebar = () => {
  return (
    <div className={'h-screen flex'}>
      <LeftSidebar />
      <RightSidebar />
    </div>
  );
};

export default Sidebar;
