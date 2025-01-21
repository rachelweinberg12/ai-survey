import { ReactNode } from "react";
import { clsx } from "clsx";

export function H1(props: { className?: string; children?: ReactNode }) {
  return (
    <h1
      className={clsx(
        "text-4xl text-slate-900 dark:text-slate-50 font-dm-display",
        props.className
      )}
    >
      {props.children}
    </h1>
  );
}

export function H2(props: { className?: string; children?: ReactNode }) {
  return (
    <h1
      className={clsx(
        "text-2xl text-slate-900 dark:text-slate-50 font-dm-display",
        props.className
      )}
    >
      {props.children}
    </h1>
  );
}

export function H3(props: { className?: string; children?: ReactNode }) {
  return (
    <h1
      className={clsx(
        "text-lg text-slate-900 dark:text-slate-50 font-dm-display",
        props.className
      )}
    >
      {props.children}
    </h1>
  );
}
