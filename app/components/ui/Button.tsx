import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}