import React, { ReactNode } from "react";

type variant = "primary" | "secondary" | "warning";
type buttonType = "button" | "submit";

type Props = {
  children: ReactNode;
  variant?: variant;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: buttonType;
};

const Button = ({ variant = "primary", children, onClick, type="button" }: Props) => {
  return <button type={type} onClick={onClick} className={`btn btn-${variant}`}>{children}</button>;
};

export default Button;
