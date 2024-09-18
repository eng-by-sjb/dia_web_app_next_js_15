// import React, { ChangeEvent, useState } from "react";

// type TextAreaProps = {
//   label: string;
//   name: string;
//   rows?: number;
//   cols?: number;
//   value: string;
//   maxLength?: number;
//   updateFormState: (key: keyof FormState, value: string | File[] | File) => void;
//   placeholder?: string;
//   type?: string;
//   labelClassName?: string;
//   textareaClassName?: string;
// };

// export default function TextArea({
//   label,
//   name,
//   value,
//   updateFormState,
//   placeholder = "",
//   rows,
//   cols,
//   maxLength,
//   labelClassName = "",
//   textareaClassName = "",
// }: TextAreaProps) {
//   const [isFocused, setIsFocused] = useState(false);

//   function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
//     updateFormState;
//   }

//   return (
//     <div className={`relative w-full`}>
//       <div className="bg-white/95 w-full h-[25%] py-2 px-3 absolute left-0 top-0 flex items-center border-t border-x backdrop-blur-sm rounded-t-lg">
//         <label
//           htmlFor={name}
//           className={`text-black/50 text-sm transition-all delay-800 transform ${labelClassName} ${
//             isFocused || value ? "text-zinc-500 animate-pulse -translate-y-0" : ""
//           }`}>
//           {label}
//         </label>
//       </div>
//       <textarea
//         id={name}
//         name={name}
//         value={value}
//         onChange={(e: ChangeEvent<HTMLTextAreaElement>) => { updateFormState()}}
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//         rows={rows}
//         cols={cols}
//         maxLength={maxLength}
//         placeholder={placeholder}
//         className={`w-full px-3 pt-7 border resize-none border-gray-300 rounded-lg outline-none transition-all ${textareaClassName} ${
//           isFocused ? "ring-gray-500 ring-1" : ""
//         }`}
//       />
//       <span className="block w-full px-[0.875rem] text-xs text-gray-500/50 text-right">{`${value?.length}/${maxLength}`}</span>
//     </div>
//   );
// }
