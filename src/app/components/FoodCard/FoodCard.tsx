import { IFoodCard } from './IFoodCard';
import FoodIcon from '@/app/icons/FoodIcon';

const FoodCard = ({ title, image_url, name }: IFoodCard) => {
  return (
    <button className='relative flex w-[160px] h-[80px]l min-h-[80px] bg-white border-0.6 border-stroke rounded'>
      <span className='relative flex-wrap w-full max-w-[55%] h-fit py-16 pl-12 text-title overflow-wrap break-word'>
        {title}
      </span>
      <FoodIcon
        image_url={image_url}
        name={name}
        className={'absolute right-[-10.5px]'}
      />
    </button>
  );
};

export default FoodCard;
