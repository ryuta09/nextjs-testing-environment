import React from "react";
import { VariantProps, tv } from "tailwind-variants";

const buttonStyle = tv({
  base: "font-medium bg-blue-500 text-white rounded-full active:opacity-80",
  variants: {
    color: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-purple-500 text-white",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "px-4 py-3 text-lg",
    },
  },
  compoundVariants: [
    {
      size: ["sm", "md"],
      class: "px-3 py-1",
    },
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
const Button = ({ color, size, children }: ButtonProps) => {
  return <button className={buttonStyle({ color, size })}>{children}</button>;
};

export default Button;
