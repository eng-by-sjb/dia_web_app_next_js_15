import * as React from "react";

import { cn } from "@/lib/utils";
import { Magnifer } from "solar-icon-set";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isShortcutKey?: Boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isShortcutKey, ...props }, ref) => {
    return (
      <div className="bg-neutral-100 text-sm shadow-sm px-4 flex w-56 items-center gap-4 rounded-lg border">
        <div className="flex items-center justify-center">
          <Magnifer size={24} />
          <input
            type={type}
            className={cn(
              "ml-0 flex h-9 w-full rounded-md border border-none bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            // className={cn(
            //   "ml-0 flex h-9 w-full rounded-md border border-none bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            //   className
            // )}
            ref={ref}
            {...props}
          />
        </div>

        {isShortcutKey ? (
          <div className="text-neutral-600 flex items-center justify-center gap-2">
            <span className="h-5 w-5 text-sm text-neutral-600/85 font-semibold rounded-sm bg-neutral-200 flex items-center justify-center">
              ⌘
            </span>
            <span className="h-5 w-5 text-sm text-neutral-600/85 font-semibold rounded-sm bg-neutral-200 text-center">
              F
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
