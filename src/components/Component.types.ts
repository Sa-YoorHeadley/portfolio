export type FormFields = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};
export type FormErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
};
export type Message = {
  type: "valid" | "invalid" | "none" | "success" | "error";
  messages: string[];
};

export type ThemeProps = {
  theme: "light" | "dark" | string;
  themeToggle?: () => void;
};

export type HeaderProps = ThemeProps;

export type TileProps = {
  name: string;
  icon: string;
  height: number;
  width: number;
};

export type ImageProps = {
  title: string;
  imageUrl: string;
};
