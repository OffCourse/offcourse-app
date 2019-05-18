type Avatar = {
  svg: string;
  dimensions: {
    width: number;
    height: number;
  };
  background: string;
};

type Colors = {
  primary: string;
  black: string;
  white: string;
};

type GrayScale = string[];

type Theme = {
  colors: Colors;
  grayScale: GrayScale;
  avatars: { [error: string]: Avatar };
};

export default Theme;
