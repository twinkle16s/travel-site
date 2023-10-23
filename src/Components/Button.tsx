import React from 'react';
import './Button.css';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="btn">{text}</button>
  );
};

export default Button;