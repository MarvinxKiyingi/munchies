import { IClosedNotice } from './IClosedNotice';

const ClosedNotice = ({ text }: IClosedNotice) => {
  return (
    <div className='flex justify-center z-10'>
      <span className='chip-button !bg-off-white'>{text}</span>
    </div>
  );
};

export default ClosedNotice;
