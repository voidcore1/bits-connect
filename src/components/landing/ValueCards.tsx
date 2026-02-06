import { motion } from "framer-motion";
import { Users, Target, Rocket } from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "Find Mentors",
    description:
      "Get matched with seniors who have walked your path. From branch guidance to placement prep.",
    accent: "primary" as const,
  },
  {
    icon: Target,
    title: "Join Squads",
    description:
      "Discover clubs and peers aligned with your obsessions. Build your tribe on campus.",
    accent: "accent" as const,
  },
  {
    icon: Rocket,
    title: "Accelerate",
    description:
      "From academic doubts to startup ideas, find your people. Level up faster together.",
    accent: "primary" as const,
  },
];

const ValueCards = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why <span className="text-gradient">Grinder</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Everything you need to make the most of your BITS journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="group relative p-8 rounded-2xl bg-card border border-border card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  card.accent === "accent"
                    ? "bg-accent/10"
                    : "bg-primary/10"
                }`}
              >
                <card.icon
                  className={`w-6 h-6 ${
                    card.accent === "accent"
                      ? "text-accent"
                      : "text-primary"
                  }`}
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueCards;
