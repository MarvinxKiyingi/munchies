import Image from 'next/image';

export type IFoodIcon = {
  image_url: string;
  name?: string;
  size?: 'small' | 'large';
  className?: string;
};
const FoodIcon = ({
  image_url,
  size = 'small',
  className,
  name,
}: IFoodIcon) => {
  const iconSize = size === 'small' ? '80' : '140';
  const imagePath = `${image_url}`;
  return (
    <Image
      src={imagePath}
      alt={`Image of ${name}`}
      width={iconSize}
      height={iconSize}
      className={className}
    />
  );
};

export default FoodIcon;
