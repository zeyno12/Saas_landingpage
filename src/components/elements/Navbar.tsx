import { Container } from "../shared/Container";
import logo from "../../../public/assets/icon.svg";
import { NavItem } from "../shared/NavItem";
import { BtnLink } from "../shared/BtnLink";
import { useThemeStore } from "../../store/ThemeStore";
import { useState } from "react";

export const navItems = [
  { href: "#", text: "Home" },
  { href: "#services", text: "Services" },
  { href: "#about-us", text: "About Us" },
  { href: "#pricing", text: "Pricing" },
];

export const Navbar = () => {
  const { theme, toggleTheme } = useThemeStore();
  const [sideOpen, setSideOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6">
      <Container>
        <nav className="w-full flex justify-between gap-6 relative items-center">
          {/* Logo */}
          <div className="min-w-max inline-flex relative">
            <a href="/" className="relative flex items-center gap-3">
              <img src={logo} alt="EdgeAI Logo" className="w-10 h-10" />
              <div className="inline-flex text-lg font-semibold text-heading-1">
                EdgeAI
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-row w-full lg:justify-between lg:items-center">
            <ul className="flex flex-row gap-x-3 text-lg text-heading-2">
              {navItems.map((item, key) => (
                <NavItem href={item.href} text={item.text} key={key} />
              ))}
            </ul>
            <BtnLink text="Get Started" href="#cta" />
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="outline-hidden flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border cursor-pointer"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              )}
            </button>

            {/* Mobile Burger */}
            <button
              className={`lg:hidden p-3 rounded-full border ${theme === "dark" ? "border-white" : "border-heading-1"}`}
              onClick={() => setSideOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                className={`bi bi-list ${theme === "dark" ? "text-white" : "text-heading-1"}`}
                viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu (Aside) */}
        <div
          className={`fixed top-0 right-0 h-full w-60 bg-body text-heading-1 z-50 transition-transform duration-300 lg:hidden ${sideOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 p-2 dark:border-white"
            onClick={() => setSideOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              className={`bi bi-x ${theme === "dark" ? "text-white" : "text-heading-1"}`}

              viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </button>

          <ul className="flex flex-col mt-16 gap-4 px-6">
            {navItems.map((item, key) => (
              <NavItem href={item.href} text={item.text} key={key} />
            ))}
          </ul>

          <div className="mt-6 px-6">
            <BtnLink text="Get Started" href="#cta" className="w-full" />
          </div>
        </div>

        {/* Overlay */}
        {sideOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setSideOpen(false)}
          ></div>
        )}
      </Container>
    </header>
  );
};
