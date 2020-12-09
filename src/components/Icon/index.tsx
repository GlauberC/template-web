import React from 'react';
import {
  MdHome,
  MdPeople,
  MdWork,
  MdHttp,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md';

interface IconProps {
  size: number;
  color: string;
  name: string;
}

const Icon: React.FC<IconProps> = ({ size, color, name }) => {
  switch (name) {
    case 'keyboard-arrow-left':
      return <MdKeyboardArrowLeft size={size} color={color} />;
    case 'keyboard-arrow-right':
      return <MdKeyboardArrowRight size={size} color={color} />;
    case 'home':
      return <MdHome size={size} color={color} />;
    case 'people':
      return <MdPeople size={size} color={color} />;
    case 'work':
      return <MdWork size={size} color={color} />;
    default:
      return <MdHttp size={size} color={color} />;
  }
};

export default Icon;
