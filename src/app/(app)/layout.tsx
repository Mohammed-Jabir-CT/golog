import type { Metadata } from "next";
import AppLogo from "@/components/AppLogo";
import Link from "next/link";
import Menu from "@/components/Menu";
import ThemeController from "@/components/ThemeController";

export const metadata: Metadata = {
  title: "GoloG",
  description: "Log your checkins and checkouts of the day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-5 py-3 min-h-screen flex flex-col">
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <AppLogo />
          <Menu />
        </div>
        <div className="flex items-center gap-2">
          <ThemeController/>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-sm btn-circle btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center">
        {children}
      </main>
    </div>
  );
}
