import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-sm hover:shadow-md",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:from-sky-600 hover:to-cyan-600 hover:shadow-lg hover:scale-[1.02]",
        destructive:
          "bg-gradient-to-r from-red-500 to-rose-500 text-white hover:from-red-600 hover:to-rose-600 hover:shadow-lg",
        outline:
          "border-2 border-sky-200 bg-white text-sky-700 hover:bg-sky-50 hover:border-sky-300 hover:shadow-md",
        secondary:
          "bg-gradient-to-r from-sky-50 to-cyan-50 text-sky-700 hover:from-sky-100 hover:to-cyan-100 hover:shadow-md",
        ghost: "hover:bg-sky-50 hover:text-sky-700",
        link: "text-sky-600 underline-offset-4 hover:underline hover:text-sky-700",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const buttonClasses = cn(buttonVariants({ variant, size, className }));

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<
        React.HTMLAttributes<HTMLElement>
      >;
      return React.cloneElement(child, {
        className: cn(buttonClasses, child.props?.className),
        ...child.props,
      });
    }

    return (
      <button className={buttonClasses} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
