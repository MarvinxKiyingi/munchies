import Arrow from '@/app/icons/Arrow';

const TitleGroup = ({ title }: { title: string }) => {
  return (
    <div className='flex justify-between gap-4'>
      <h3 className='text-h1 leading-[normal]'>{title}</h3>
      <div className='flex justify-center items-center bg-green rounded-full w-8 h-8'>
        <Arrow />
      </div>
    </div>
  );
};

export default TitleGroup;
