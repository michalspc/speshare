type Sizes = 'xs' | 'sm' | 'md' | 'lg';

export default function getBgBySize(size: Sizes) {
  const sizes = {
    xs: 'linear-gradient(95deg, #B100FF 0%, #5C40DD 100%)',
    sm: 'linear-gradient(88deg, #B100FF 0%, #282FE5 100%)',
    md: 'linear-gradient(101deg, #B100FF 0%, #5C40DD 100%)',
    lg: 'linear-gradient(88deg, #B100FF 0%, #282FE5 100%)',
  };

  return sizes[size];
}
