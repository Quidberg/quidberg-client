import * as DialogPrimitives from "@radix-ui/react-dialog";
import { forwardRef } from "react";
import { cn } from "../../../utils";

export const DialogRoot = DialogPrimitives.Root;
export const DialogTrigger = forwardRef<
  React.ElementRef<typeof DialogPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Trigger>
>(({ className, children, ...props }, ref) => {
  return (
    <DialogPrimitives.Trigger
      ref={ref}
      className={cn(
        "flex h-9 w-full items-center justify-between rounded border border-border bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-secondary-foreground focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitives.Trigger>
  );
});

export const DialogPortal = forwardRef<
  React.ElementRef<typeof DialogPrimitives.Portal>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Portal>
>(({ children, ...props }, ref) => (
  <DialogPortal ref={ref} {...props}>
    {children}
  </DialogPortal>
));

export const DialogOverlay = forwardRef<
  React.ElementRef<typeof DialogPrimitives.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Overlay>
>(({ ...props }, ref) => <DialogOverlay ref={ref} {...props} />);

export const DialogContent = forwardRef<
  React.ElementRef<typeof DialogPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Content>
>(({ children, ...props }, ref) => (
  <DialogContent ref={ref} {...props}>
    {children}
  </DialogContent>
));
