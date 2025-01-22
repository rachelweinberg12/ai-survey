import clsx from "clsx";
import { forwardRef, JSX, Ref } from "react";

export const InputOverlapLabel = forwardRef(
  (
    props: {
      label: string;
      error?: boolean;
      errorMessage?: string;
    } & JSX.IntrinsicElements["input"],
    ref: Ref<HTMLInputElement>
  ) => {
    const { label, error, errorMessage, className, id, ...rest } = props;
    return (
      <div className="relative">
        <label
          htmlFor={id}
          className="absolute -top-2 left-2 inline-block rounded-lg bg-matisse-50 dark:bg-matisse-900 px-1 text-xs font-medium text-slate-900 dark:text-slate-50"
        >
          {label}
        </label>
        <input
          ref={ref}
          className={clsx(
            "block w-full bg-transparent rounded-md px-3 py-1.5 text-base text-slate-900 outline outline-1 -outline-offset-1 outline-slate-300 focus:outline-matisse-600 placeholder:text-slate-400 focus:outline focus:outline-2 focus:-outline-offset-2  sm:text-sm/6",
            error
              ? "border-tiger-300 text-tiger-900 placeholder-tiger-300 focus:border-tiger-500 focus:ring-tiger-500" // matches invalid: styles
              : "border-slate-300 placeholder-slate-400  focus:ring-2 focus:ring-matisse-500 ",
            className
          )}
          {...rest}
        />
        {error && errorMessage && (
          <span className="text-xs text-tiger-500">{errorMessage}</span>
        )}
      </div>
    );
  }
);
