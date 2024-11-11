import { IRestaurantCard } from './IRestaurantCard';
import FoodIcon from '@/app/icons/FoodIcon';
import OpacityLayer from './OpacityLayer/OpacityLayer';
import ClosedNotice from './ClosedNotice/ClosedNotice';
import ChipGroup from './ChipsGroup/ChipGroup';
import TitleGroup from './TitleGroup/TitleGroup';
import { getRestaurantById } from '@/app/utils/functions/getRestaurantById';

const RestaurantCard = async ({
  image_url,
  id,
  name,
  isOpen,
}: IRestaurantCard) => {
  const restaurant = await getRestaurantById(id);
  if (!restaurant) {
    console.error('No restaurants available.');
    return <div>No restaurants available. Please try again later.</div>;
  }

  return (
    <div className='relative'>
      <div className='relative flex flex-col justify-between gap-4 w-full h-[202px] border-0.6 border-stroke rounded p-16 bg-white overflow-hidden'>
        <FoodIcon
          image_url={image_url}
          size='large'
          className={`absolute top-[-30px] right-[-30px]`}
        />

        <ChipGroup
          isOpen={isOpen}
          deliveryTime={restaurant.delivery_time_minutes}
        />

        {!isOpen?.is_open && <ClosedNotice text='Opens tomorrow at 12 pm' />}

        <TitleGroup name={name} />
      </div>

      {!isOpen?.is_open && <OpacityLayer />}
    </div>
  );
};

export default RestaurantCard;
