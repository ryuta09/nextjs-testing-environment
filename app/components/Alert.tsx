import React from "react";
import { VariantProps, tv } from "tailwind-variants";
type AlertVariants = VariantProps<typeof alert>
  
  interface AlertProps extends AlertVariants {
    severity: 'error' | 'success',
    variant: 'outlined' | 'filled',
  }
const Alert = ({ severity, variant }: AlertProps) => {
  const alert = tv({
    slots: {
      root: "rounded py-3 px-5 mb-4",
      title: "font-bold mb-1",
      message: "",
    },
    variants: {
      variant: {
        outlined: {
          root: "border",
        },
        filled: {
          root: "",
        },
      },
      severity: {
        error: "",
        success: "",
      },
    },
    compoundVariants: [
      {
        variant: "outlined",
        severity: "error",
        class: {
          root: "border-red-700 dark:border-red-500",
          title: "text-red-700 dark:text-red-500",
          message: "text-red-600 dark:text-red-500",
        },
      },
      {
        variant: "outlined",
        severity: "success",
        class: {
          root: "border-green-700 dark:border-green-500",
          title: "text-green-700 dark:text-green-500",
          message: "text-green-600 dark:text-green-500",
        },
      },
      {
        variant: "filled",
        severity: "error",
        class: {
          root: "bg-red-100 dark:bg-red-800",
          title: "text-red-900 dark:text-red-50",
          message: "text-red-700 dark:text-red-200",
        },
      },
      {
        variant: "filled",
        severity: "success",
        class: {
          root: "bg-green-100 dark:bg-green-800",
          title: "text-green-900 dark:text-green-50",
          message: "text-green-700 dark:text-green-200",
        },
      },
    ],
    defaultVariants: {
      variant: "filled",
      severity: "success",
    },
  });
  
  
  const { root, message, title } = alert({ severity, variant });

  return (
    <div className={root()}>
      <div className={title()}>Oops, something went wrong</div>
      <div className={message()}>
        Something went wrong saving your changes. Try again later.
      </div>
    </div>
  );
};

export default Alert;
