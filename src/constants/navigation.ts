export const menuLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Room", href: "/room" },
  { name: "Contact", href: "/contact" },
  { name: "My Reservation", href: "/my-reservation", protected: true },
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    protected: true,
    role: "admin",
  },
  { name: "Manage Room", href: "/admin/room", protected: true, role: "admin" },
];

export const menuLinksFooter = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Room", href: "/room" },
  { name: "Contact", href: "/contact" },
];
export const policyLinksFooter = [
  { name: "Legal", href: "#" },
  { name: "Term & Condition", href: "#" },
  { name: "Payment Method", href: "/#" },
  { name: "Privacy Policy", href: "/#" },
];
