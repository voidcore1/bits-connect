import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-primary" />
          <span className="font-bold text-lg">Grinder</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Built by BITSians, for BITSians. © 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
