import React from "react";
import { VariantProps, tv } from "tailwind-variants";

const buttonStyle = tv({
  base: "font-medium bg-blue-500 text-white rounded-full active:opacity-80",
  variants: {
    color: {
      primary: "bg-blue-500 text-white hover:bg-blue-700",
      secondary: "bg-purple-500 text-white hover:bg-purple-700",
      success: "bg-green-500 hover:bg-green-700",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "px-4 py-3 text-lg",
    },
    disabled: {
      true: 'opacity-50 bg-gray-500 pointer-events-none'
    }
  },
  compoundVariants: [
    {
      size: ["sm", "md"],
      class: "px-3 py-1",
    },
    {
      color: 'success',
      disabled: true,
      class: 'bg-green-100 text-green-700 dark:text-green-800'
    },
    {
      color: ['primary', 'secondary'],
      disabled: true,
      class: 'text-slate-400 bg-slate-200 dark:bg-slate-800 opacity-100'
    }
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});
type ButtonVariants = VariantProps<typeof buttonStyle>;

interface ButtonProps extends ButtonVariants {
  children: React.ReactNode;
}
const Button = ({ color, size, disabled, children }: ButtonProps) => {
  return <button className={buttonStyle({ color, size, disabled })}>{children}</button>;
};

export default Button;
