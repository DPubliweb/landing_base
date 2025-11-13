import React from "react";

export const Button = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <button
      ref__={ref}
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});
Button.displayName = "Button";