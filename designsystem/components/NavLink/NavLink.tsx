import React from "react";
import "./NavLink.css";

export interface NavLinkProps {
  label: string;
  href: string;
  active?: boolean;
  className?: string;
}

/**
 * NavLink
 *
 * Navigation item used in the site header.
 * Active state renders in text-primary; inactive in text-secondary.
 *
 * @example
 * <NavLink label="Projects" href="/" active />
 * <NavLink label="Info" href="/info" />
 */
export const NavLink: React.FC<NavLinkProps> = ({
  label,
  href,
  active = false,
  className = "",
}) => {
  return (
    <a
      className={`ds-nav-link ${active ? "ds-nav-link--active" : ""} ${className}`.trim()}
      href={href}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </a>
  );
};

export default NavLink;
