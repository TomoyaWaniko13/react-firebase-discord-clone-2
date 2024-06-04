const ChatInput = () => {
  return (
    <form className={'bg-gray-950 p-4'}>
      <div className={'flex'}>
        <input type='text' className={'bg-transparent w-full outline-none'} placeholder={'Message #text'} />
        <button type={'submit'} className={'bg-white rounded text-black p-1'}>
          send
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
