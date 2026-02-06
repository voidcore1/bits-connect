import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-section__grid-bg" />
      <div className="hero-section__gradient" />
      <div className="hero-section__content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-section__badge">
            <Zap className="hero-section__badge-icon" />
            <span className="hero-section__badge-text">
              Exclusive to BITS Pilani Students
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="hero-section__title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          Ready to <span className="text-gradient">Grind</span>
          <span className="hero-section__accent">?</span>
        </motion.h1>

        <motion.p
          className="hero-section__subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          The ultimate network for BITSians. Connect with seniors, mentors, and
          clubs that match your hustle.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <button
            onClick={() => navigate("/onboarding")}
            className="hero-section__cta"
          >
            Get Started
            <ArrowRight className="hero-section__cta-icon" />
          </button>
        </motion.div>

        <motion.p
          className="hero-section__footer-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Join 2,000+ BITSians already grinding
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
