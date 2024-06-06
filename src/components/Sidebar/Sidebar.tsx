import LeftSidebar from '@/src/components/Sidebar/LeftSidebar';
import RightSidebar from '@/src/components/Sidebar/RightSidebar';

const Sidebar = () => {
  return (
    <div className={'h-screen flex'}>
      <LeftSidebar />
      <RightSidebar />
    </div>
  );
};

export default Sidebar;
