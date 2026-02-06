import { motion } from "framer-motion";
import { Users, Target, Rocket } from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "Find Mentors",
    description:
      "Get matched with seniors who have walked your path. From branch guidance to placement prep.",
    accent: "primary",
  },
  {
    icon: Target,
    title: "Join Squads",
    description:
      "Discover clubs and peers aligned with your obsessions. Build your tribe on campus.",
    accent: "accent",
  },
  {
    icon: Rocket,
    title: "Accelerate",
    description:
      "From academic doubts to startup ideas, find your people. Level up faster together.",
    accent: "primary",
  },
];

const ValueCards = () => {
  return (
    <section className="value-cards">
      <div className="value-cards__container">
        <motion.div
          className="value-cards__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="value-cards__title">
            Why <span className="text-gradient">Grinder</span>?
          </h2>
          <p className="value-cards__subtitle">
            Everything you need to make the most of your BITS journey.
          </p>
        </motion.div>

        <div className="value-cards__grid">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                className={`value-card ${card.accent === "accent" ? "value-card--accent" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="value-card__icon-wrapper">
                  <Icon className="value-card__icon" />
                </div>
                <h3 className="value-card__title">{card.title}</h3>
                <p className="value-card__description">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueCards;
