type Tag = {
  children: string;
  className?: string;
  href?: string;
  onClick?: (opts: { tag: string }) => void;
};

export default Tag;
