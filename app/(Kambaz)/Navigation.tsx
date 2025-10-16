"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AiOutlineDashboard, AiOutlineCalendar } from "react-icons/ai";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function KambazNavigation() {
  const pathname = usePathname();
  // Define all sidebar links here
  const links = [
    { href: "/Account", label: "Account", icon: <FaRegCircleUser /> },
    { href: "/Courses", label: "Dashboard", icon: <AiOutlineDashboard /> },
    { href: "/Courses", label: "Courses", icon: <LiaBookSolid /> },
    { href: "/Calendar", label: "Calendar", icon: <AiOutlineCalendar /> },
    { href: "/Inbox", label: "Inbox", icon: <FaInbox /> },
    { href: "/Labs", label: "Labs", icon: <LiaCogSolid /> },
  ];
  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 110 }}
      id="wd-kambaz-navigation"
    >
      <ListGroupItem
        className="bg-black border-0 text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/nulogo.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>

      {/* Account */}
      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Account"
          id="wd-account-link"
          className="text-white text-decoration-none"
        >
          <FaRegCircleUser className="fs-1 text-white" />
          <br />
          Account
        </Link>
      </ListGroupItem>

      <ListGroupItem
        className={`border-0 text-center ${
          pathname === "/Dashboard" ? "bg-white" : "bg-black"
        }`}
      >
        <Link
          href="/Dashboard"
          id="wd-dashboard-link"
          className={`text-decoration-none ${
            pathname === "/Dashboard" ? "text-danger" : "text-white"
          }`}
        >
          <AiOutlineDashboard className="fs-1 text-danger" />
          <br />
          Dashboard
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Dashboard"
          id="wd-courses-link"
          className="text-white text-decoration-none"
        >
          <LiaBookSolid className="fs-1 text-danger" />
          <br />
          Courses
        </Link>
      </ListGroupItem>

      <ListGroupItem
        className={`border-0 text-center ${
          pathname === "/Calendar" ? "bg-white" : "bg-black"
        }`}
      >
        <Link
          href="/Calendar"
          id="wd-calendar-link"
          className={`text-decoration-none ${
            pathname === "/Calendar" ? "text-danger" : "text-white"
          }`}
        >
          <AiOutlineCalendar className="fs-1 text-danger" />
          <br />
          Calendar
        </Link>
      </ListGroupItem>

      <ListGroupItem
        className={`border-0 text-center ${
          pathname === "/Inbox" ? "bg-white" : "bg-black"
        }`}
      >
        <Link
          href="/Inbox"
          id="wd-inbox-link"
          className={`text-decoration-none ${
            pathname === "/Inbox" ? "text-danger" : "text-white"
          }`}
        >
          <FaInbox className="fs-1 text-danger" />
          <br />
          Inbox
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Labs"
          id="wd-labs-link"
          className="text-white text-decoration-none"
        >
          <LiaCogSolid className="fs-1 text-danger" />
          <br />
          Labs
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}
