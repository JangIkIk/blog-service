import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../lib/cn";

const buttonVariants = cva(["w-full font-bold cursor-pointer rounded-lg"], {
  variants: {
    intent: {
      default: ["theme-text-2"],
      simple: ["theme-bg-2 theme-text-2 opacity-90"],
      soft: ["bg-brand-soft text-brand-white opacity-90"],
      strong: ["bg-brand-main text-brand-white opacity-90"],
    },
    size: {
      default: ["clamp-sm px-3 py-2"],
      sm: ["text-sm px-3 py-2"],
      md: ["text-base px-3 py-2"],
      lg: ["text-lg px-3 py-2"],
      xl: ["text-xl px-3 py-2"],
    },
    disabled: {
      false: null,
      true: [
        "cursor-not-allowed bg-gray-300 text-gray-100 opacity-100 hover:text-gray-100",
      ],
    },
  },
  compoundVariants: [
    {
      intent: "default",
      disabled: false,
      className: "hover:theme-text-1",
    },
    {
      intent: "simple",
      disabled: false,
      className: "hover:opacity-100 hover:theme-text-3",
    },
    {
      intent: "soft",
      disabled: false,
      className: "hover:opacity-100",
    },
    {
      intent: "strong",
      disabled: false,
      className: "hover:opacity-100",
    },
  ],
  defaultVariants: {
    intent: "default",
    size: "default",
    disabled: false,
  },
});

type AsChildProps = {
  asChild?: boolean;
} & VariantProps<typeof buttonVariants> &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, AsChildProps>((props, ref) => {
  const {
    className,
    intent,
    size,
    asChild = false,
    disabled,
    ...defaultOptions
  } = props;
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ intent, size, className, disabled }))}
      ref={ref}
      disabled={disabled}
      {...defaultOptions}
    />
  );
});

export default Button;
