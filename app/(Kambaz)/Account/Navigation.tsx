"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const pathname = usePathname();

  const links = currentUser
    ? [{ href: "/Account/Profile", label: "Profile" }]
    : [
        { href: "/Account/Signin", label: "Sign In" },
        { href: "/Account/Signup", label: "Sign Up" },
      ];

  return (
    <Nav variant="pills">
      <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
        {links.map((link) => (
          <NavLink
            key={link.href}
            as={Link}
            href={link.href}
            active={pathname.endsWith(link.href.split("/").pop() || "")}
            className={`list-group-item border-0 ${
              pathname === link.href ? "active" : "text-danger"
            }`}
          >
            {link.label}
          </NavLink>
        ))}

        {currentUser && currentUser.role === "ADMIN" && (
          <NavLink
            as={Link}
            href="/Account/Users"
            active={pathname.endsWith("Users")}
          >
            Users
          </NavLink>
        )}
      </div>
    </Nav>
  );
}
