"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function AccountNavigation() {
  const pathname = usePathname();

  const links = [
    { href: "Sigin", label: "SignIn" },
    { href: "Signup", label: "SignUp" },
    { href: "Profile", label: "Profile" },
  ];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`list-group-item border-0 ${
              isActive ? "active" : "text-danger"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
