import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-body font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-secondary-400 text-neutral-950 hover:bg-secondary-300",
        secondary: "bg-white text-neutral-950 hover:bg-neutral-50",
        ghost: "text-white hover:text-secondary-300",
      },
      size: {
        sm: "h-[46px] px-6 text-label-m",
        md: "h-[52px] px-8 text-label-m",
        lg: "h-[56px] px-10 text-label-l",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, children, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
}
