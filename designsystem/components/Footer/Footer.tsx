import React from "react";
import { SocialIcon, SocialPlatform } from "../SocialIcon/SocialIcon";
import "./Footer.css";

export interface FooterSocialLink {
  platform: SocialPlatform;
  href: string;
  icon: React.ReactNode;
}

export interface FooterProps {
  copyright?: string;
  quote?: string;
  socialLinks?: FooterSocialLink[];
  className?: string;
}

/**
 * Footer
 *
 * Three-column footer with copyright on the left, a quote in the center,
 * and social icon buttons on the right.
 *
 * @example
 * <Footer
 *   copyright="© 2026 Abhishek Dhane • Built with framer"
 *   quote="If it looks simple, I fought for it."
 *   socialLinks={[
 *     { platform: "linkedin", href: "https://linkedin.com/in/...", icon: <img src={li} /> },
 *   ]}
 * />
 */
export const Footer: React.FC<FooterProps> = ({
  copyright = "© 2026 Abhishek Dhane • Built with framer",
  quote = "If it looks simple, I fought for it.",
  socialLinks = [],
  className = "",
}) => {
  return (
    <footer className={`ds-footer ${className}`.trim()} role="contentinfo">
      <div className="ds-footer__inner">
        <div className="ds-footer__col ds-footer__col--left">
          <span className="ds-footer__copyright">{copyright}</span>
        </div>

        <div className="ds-footer__col ds-footer__col--center">
          <span className="ds-footer__quote">{quote}</span>
        </div>

        <div className="ds-footer__col ds-footer__col--right">
          <div className="ds-footer__social">
            {socialLinks.map((link) => (
              <SocialIcon
                key={link.platform}
                platform={link.platform}
                href={link.href}
              >
                {link.icon}
              </SocialIcon>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
