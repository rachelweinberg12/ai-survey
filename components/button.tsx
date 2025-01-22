import clsx from "clsx";
import { forwardRef, JSX, ReactNode, Ref } from "react";

export type SizeType = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type RoleType = "primary" | "secondary" | "soft" | "highlight";

const sizeClasses = {
  "2xs": "px-2 py-1 text-xs rounded",
  xs: "px-2 py-1 text-sm rounded",
  sm: "px-2.5 py-1.5 text-sm rounded",
  md: "px-3 py-2 text-sm rounded-md",
  lg: "px-3.5 py-2.5 text-sm rounded-md",
  xl: "px-6 py-2.5 text-base rounded-md",
  "2xl": "px-6 py-3 text-xl rounded-md",
};

export function buttonClass(size: SizeType, role?: RoleType) {
  return clsx(
    "font-semibold inline-flex items-center justify-center rounded-md shadow-sm disabled:cursor-not-allowed text-center",
    sizeClasses[size],
    role === "primary" &&
      "bg-matisse-600 text-white hover:bg-matisse-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-matisse-600 dark:bg-matisse-500 dark:hover:bg-indigo-400 focus-visible:outline-matisse-500",
    role === "secondary" &&
      "bg-white text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:text-white dark:hover:bg-white/20",
    role === "soft" &&
      "rounded bg-matisse-100 px-2 py-1 text-xs font-semibold text-matisse-600 shadow-sm hover:bg-matisse-200",
    role === "highlight" &&
      "rounded bg-gradient-to-r from-matisse-950 via-matisse-500 to-sage-300 text-white hover:via-matisse-700 hover:to-sage-500"
  );
}

export const Button = forwardRef(function Button(
  props: {
    size?: SizeType;
    role?: RoleType;
    children: ReactNode;
  } & JSX.IntrinsicElements["button"],
  ref: Ref<HTMLButtonElement>
) {
  const { size = "md", role = "primary", children, className, ...rest } = props;
  return (
    <button
      ref={ref}
      className={clsx(buttonClass(size, role), className)}
      {...rest}
    >
      {children}
    </button>
  );
});
