type SVG = {
  svg: string;
  dimensions: {
    width: number;
    height: number;
  };
  background: string;
};

type Logo = SVG;
type Avatar = SVG;

type Colors = {
  primary: string;
  disabled: string;
  black: string;
  white: string;
};

type GrayScale = string[];

type Theme = {
  colors: Colors;
  grayScale: GrayScale;
  avatars: { [error: string]: Avatar };
  logo: Logo;
  fonts: { [fontName: string]: string };
  space: string[];
  fontSizes: string[];
  lineHeights: string[];
  borders: string[];
};

export default Theme;
