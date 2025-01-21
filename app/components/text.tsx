import { forwardRef, JSX, ReactNode, Ref } from "react";
import { clsx } from "clsx";
import Link from "next/link";

export function P(props: { className: string; children: ReactNode }) {
  return (
    <h1
      className={clsx(
        "text-sm text-slate-900 dark:text-slate-50",
        props.className
      )}
    >
      {props.children}
    </h1>
  );
}

export const A = forwardRef(
  (
    props: { href: string } & JSX.IntrinsicElements["a"],
    ref: Ref<HTMLAnchorElement>
  ) => {
    const { children, className, href, ...rest } = props;
    return (
      <Link
        ref={ref}
        className={clsx(
          "text-inherit text-matisse-700 dark:text-matisse-300 hover:underline",
          className
        )}
        href={href}
        {...rest}
      >
        {children}
      </Link>
    );
  }
);
