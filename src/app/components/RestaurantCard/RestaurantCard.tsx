import { IRestaurantCard } from './IRestaurantCard';
import FoodIcon from '@/app/icons/FoodIcon';
import OpacityLayer from './OpacityLayer/OpacityLayer';
import ClosedNotice from './ClosedNotice/ClosedNotice';
import ChipGroup from './ChipsGroup/ChipGroup';
import TitleGroup from './TitleGroup/TitleGroup';
import { getRestaurantById } from '@/app/utils/functions/getRestaurantById';
import { isRestaurantCurrentlyOpen } from '@/app/utils/functions/isRestaurantCurrentlyOpen';

const RestaurantCard = async (props: IRestaurantCard) => {
  const { image_url, id, name } = props.restaurant;
  const restaurant = await getRestaurantById(id);
  if (!restaurant) {
    return <div>cant fetch</div>;
  }

  const isOpen = await isRestaurantCurrentlyOpen(restaurant.id);

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
