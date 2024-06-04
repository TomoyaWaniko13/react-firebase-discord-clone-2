import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const LeftSidebar = () => {
  return (
    <div className={'h-screen bg-gray-950 p-2 flex flex-col gap-3'}>
      <Avatar>
        <AvatarImage src='https://github.com/shadcn.png' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src='https://github.com/shadcn.png' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src='https://github.com/shadcn.png' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default LeftSidebar;
