import { Check } from "@phosphor-icons/react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { forwardRef } from "react";
import { cn } from "../../../utils";
import { Button, ButtonProps } from "../buttons/Button";

export const Checkbox = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer size-4 shrink-0 rounded border border-light_border_color w-4 h-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check size={12} weight="bold" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export const CheckButton = forwardRef<
  HTMLButtonElement,
  ButtonProps & { checked?: boolean }
>(({ children, checked, ...props }, ref) => {
  return (
    <Button {...props} className="flex items-center gap-2" ref={ref}>
      <Checkbox
        checked={checked}
        data-state={checked ? "checked" : "unchecked"}
      />
      <p
        className={cn(
          "text-sm ",
          checked ? "text-primary" : "text-secondary"
        )}
      >
        {children}
      </p>
    </Button>
  );
});
