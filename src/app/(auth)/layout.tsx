"use client";
import Link from "next/link";
//this import is for to style active link
import { usePathname } from "next/navigation";
import "./style.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks = [
    { name: "register", href: "/register" },
    { name: "login", href: "/login" },
    { name: "forgotpassword", href: "/forgotpassword" },
  ];
  const pathname = usePathname();

  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
