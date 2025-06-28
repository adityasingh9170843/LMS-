"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "My Journey", href: "/my-journey" },
  { label: "Companions", href: "/companions" },
];

function NavItems() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-4">
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={"" + cn(
            pathname === item.href ? "text-primary font-semibold" : ""
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export default NavItems;
