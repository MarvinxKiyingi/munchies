import { IRestaurantsList } from '@/app/Models/IRestaurant';

const RestaurantList = ({ restaurants }: IRestaurantsList) => {
  return (
    <div className='flex flex-col gap-5 overflow-auto no-scrollbar'>
      <h2 className='text-[20px]'>Restaurants</h2>
      <div className='flex flex-col gap-5 overflow-auto no-scrollbar'>
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <div key={restaurant.id}>
              {restaurant.name} / {restaurant.image_url} -{' '}
              {restaurant.delivery_time_minutes} mins
            </div>
          ))
        ) : (
          <p>No restaurants match your filters.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantList;
