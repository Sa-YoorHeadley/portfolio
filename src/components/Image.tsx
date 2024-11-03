import { ImageProps } from "./Component.types";

export const Image = ({ imageUrl, title }: ImageProps) => {
  const imageSrc = new URL(imageUrl, import.meta.url).href;
  return (
    <img
      className="cursor-pointer rounded-lg border-1 border-lightGray dark:border-superDarkGray drop-shadow-lg"
      src={imageSrc}
      alt={title}
    />
  );
};
