import { Flame } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <Flame className="footer__brand-icon" />
          <span className="footer__brand-name">Grinder</span>
        </div>
        <p className="footer__copyright">
          Built by BITSians, for BITSians. © 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
