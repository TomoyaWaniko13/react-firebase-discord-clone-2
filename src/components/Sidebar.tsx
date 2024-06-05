import LeftSidebar from '@/src/components/LeftSidebar';
import RightSidebar from '@/src/components/RightSidebar';

const Sidebar = () => {
  return (
    <div className={'h-screen flex'}>
      <LeftSidebar />
      <RightSidebar />
    </div>
  );
};

export default Sidebar;
