"use client";

import { buttonClass } from "@/components/button";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  HomeIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/solid";
import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavItem = {
  name: string;
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
};
const navigation = [
  { name: "Summary", href: "/", icon: HomeIcon },
  {
    name: "Browse",
    href: "/browse",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "About",
    href: "/about",
    icon: InformationCircleIcon,
  },
] as NavItem[];

export function MobileNav(props: { className?: string }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={props.className}>
      <Dialog
        open={sidebarOpen}
        onClose={setSidebarOpen}
        className="relative z-50"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-slate-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <TransitionChild>
              <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="-m-2.5 p-2.5"
                >
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                </button>
              </div>
            </TransitionChild>
            <SideBar />
          </DialogPanel>
        </div>
      </Dialog>

      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-slate-900 px-4 py-4 shadow-sm sm:px-6">
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="-m-2.5 p-2.5 text-slate-400 lg:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon aria-hidden="true" className="size-6" />
        </button>
        <div className="flex-1 text-sm/6 font-semibold text-white">
          Dashboard
        </div>
        <a href="#">
          <span className="sr-only">Your profile</span>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="size-8 rounded-full bg-slate-800"
          />
        </a>
      </div>
    </div>
  );
}

export function SideBar(props: { className?: string }) {
  return (
    <div
      className={clsx(
        "flex grow flex-col gap-y-12 overflow-y-auto bg-slate-900 p-6",
        props.className
      )}
    >
      <div className="flex h-16 shrink-0 items-center">
        <ChartBarIcon className="h-12 w-auto text-matisse-400" />
      </div>
      <nav className="flex flex-1 flex-col mt-5">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <SideBarItem navItem={item} key={item.name} />
              ))}
            </ul>
          </li>
        </ul>
      </nav>
      <Link
        href="/survey"
        className={clsx(buttonClass("xl", "highlight"), "mt-10")}
      >
        Take the survey
      </Link>
    </div>
  );
}

function SideBarItem(props: { navItem: NavItem }) {
  const { navItem } = props;
  const isCurrentPage = navItem.href === usePathname();
  return (
    <li>
      <a
        href={navItem.href}
        className={clsx(
          isCurrentPage
            ? "bg-slate-800 text-white"
            : "text-slate-400 hover:bg-slate-800 hover:text-white",
          "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
        )}
      >
        <navItem.icon aria-hidden="true" className="size-6 shrink-0 stroke-2" />
        {navItem.name}
      </a>
    </li>
  );
}
