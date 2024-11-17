import { IFiltersList } from '@/app/Models/IFilter';
import { IRestaurantWithOpenStatus } from '@/app/Models/IRestaurantWithOpenStatus';

export type IRestaurantCard = IRestaurantWithOpenStatus & IFiltersList;
