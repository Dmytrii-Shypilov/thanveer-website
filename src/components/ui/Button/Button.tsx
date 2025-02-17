"use client";

import s from "./button.module.scss";



type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  linkTo?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | "download";
  disabled?: boolean;
  icon?: React.ReactNode | undefined;
};

const Button: React.FC<ButtonProps> = ({ children}) => {
  return (
    <button type="button" className={s.btn} >
     {children}
    </button>
  );
};

export default Button;
