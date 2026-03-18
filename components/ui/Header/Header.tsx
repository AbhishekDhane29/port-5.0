import React from "react";
import { NavLink } from "../NavLink/NavLink";
import { StatusIndicator } from "../StatusIndicator/StatusIndicator";
import "./Header.css";

export interface HeaderNavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface HeaderProps {
  navItems?: HeaderNavItem[];
  statusLabel?: string;
  showStatus?: boolean;
  className?: string;
}

/**
 * Header
 *
 * Fixed top header containing navigation links on the left
 * and an availability status indicator on the right.
 *
 * @example
 * <Header
 *   navItems={[
 *     { label: "Projects", href: "/", active: true },
 *     { label: "Info", href: "/info" },
 *   ]}
 *   statusLabel="Available for hire"
 * />
 */
export const Header: React.FC<HeaderProps> = ({
  navItems = [
    { label: "Projects", href: "/", active: false },
    { label: "Info", href: "/info", active: true },
  ],
  statusLabel = "Available for hire",
  showStatus = true,
  className = "",
}) => {
  return (
    <header className={`ds-header ${className}`.trim()} role="banner">
      <div className="ds-header__inner">
        <nav className="ds-header__nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              label={item.label}
              href={item.href}
              active={item.active}
            />
          ))}
        </nav>

        {showStatus && (
          <div className="ds-header__status">
            <StatusIndicator label={statusLabel} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
