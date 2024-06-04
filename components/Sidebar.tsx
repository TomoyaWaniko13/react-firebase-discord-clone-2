import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';

const Sidebar = () => {
  return (
    <div className={'h-screen flex'}>
      <LeftSidebar />
      <RightSidebar />
    </div>
  );
};

export default Sidebar;
