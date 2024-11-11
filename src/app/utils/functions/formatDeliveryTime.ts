export const formatDeliveryTime = (time: number): string => {
  return time <= 60 ? `${time} min` : '1 hour+';
};
