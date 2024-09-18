import React, { useState } from "react";
import { cn } from "@/lib/utils";

type InputProps = {
  label: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  labelClassName?: string;
  inputClassName?: string;
};

const Input: React.FC<InputProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  type = "text",
  labelClassName = "",
  inputClassName = "",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative w-full`}>
      <label
        htmlFor={name}
        className={cn(
          `text-black/50  text-sm absolute left-3 top-2 transition-all delay-800 transform  ${
            isFocused || value ? "text-zinc-500/80 animate-pulse -translate-y-0" : ""
          } `,
          labelClassName
        )}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type={type}
        placeholder={placeholder}
        className={`w-full px-3 pt-5 border border-gray-300 rounded-lg outline-none transition-all ${inputClassName} ${
          isFocused ? "ring-gray-500 ring-1" : ""
        }`}
      />
    </div>
  );
};

export default Input;
