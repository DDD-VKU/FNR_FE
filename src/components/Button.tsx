import React from 'react';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text = "Add To Cart", onClick }) => {
  return (
    <button
      className="bg-[#b48629] text-white py-3 px-6 rounded }"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
