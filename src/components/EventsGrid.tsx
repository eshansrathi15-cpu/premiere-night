import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Mic, Lightbulb, Users, Rocket } from "lucide-react";

interface EventPoster {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  category: "tech" | "business" | "main" | "coming";
  description: string;
  icon: any;
}

const events: EventPoster[] = [
  {
    id: 1,
    title: "DeHack",
    subtitle: "120-Hour Hackathon",
    date: "Feb 10-14",
    category: "tech",
    description: "Build innovative solutions from scratch. No scripts allowed.",
    icon: Rocket,
  },
  {
    id: 2,
    title: "BedRock",
    subtitle: "Campus Takeover",
    date: "Feb 15",
    category: "business",
    description: "Operate restaurants and compete for maximum profits.",
    icon: Users,
  },
  {
    id: 3,
    title: "Startup Pitch Fest",
    subtitle: "Pitch Your Vision",
    date: "Feb 11",
    category: "business",
    description: "Present your startup ideas to industry leaders and investors.",
    icon: Lightbulb,
  },
  {
    id: 4,
    title: "Keynote Sessions",
    subtitle: "Industry Experts",
    date: "Feb 9-15",
    category: "main",
    description: "Learn from the pioneers of entrepreneurship and innovation.",
    icon: Mic,
  },
  {
    id: 5,
    title: "Coming Soon",
    subtitle: "Mystery Event",
    date: "TBA",
    category: "coming",
    description: "Stay tuned for more exciting events and competitions.",
    icon: Calendar,
  },
  {
    id: 6,
    title: "More Events",
    subtitle: "To Be Announced",
    date: "TBA",
    category: "coming",
    description: "The full schedule will be revealed closer to E-Week.",
    icon: Calendar,
  },
];

const categoryColors = {
  tech: {
    border: "border-cyan-glow/50",
    bg: "bg-cyan-glow/10",
    text: "text-cyan-glow",
    shadow: "hover:shadow-glow",
    badge: "bg-cyan-glow/20 text-cyan-glow border-cyan-glow/30",
  },
  business: {
    border: "border-accent-red/50",
    bg: "bg-accent-red/10",
    text: "text-accent-red",
    shadow: "hover:shadow-glow-red",
    badge: "bg-accent-red/20 text-accent-red border-accent-red/30",
  },
  main: {
    border: "border-accent-yellow/50",
    bg: "bg-accent-yellow/10",
    text: "text-accent-yellow",
    shadow: "hover:shadow-glow-yellow",
    badge: "bg-accent-yellow/20 text-accent-yellow border-accent-yellow/30",
  },
  coming: {
    border: "border-muted-foreground/30",
    bg: "bg-muted/30",
    text: "text-muted-foreground",
    shadow: "hover:shadow-none",
    badge: "bg-muted text-muted-foreground border-muted-foreground/30",
  },
};

const EventsGrid = () => {
  return (
    <section id="events" className="py-24 bg-card/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-bg opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Coming <span className="text-accent-yellow">Attractions</span>
          </h2>
          <p className="font-heading text-xl text-muted-foreground max-w-2xl mx-auto">
            Your all-access pass to the biggest entrepreneurial events of 2026
          </p>
        </motion.div>

        {/* Category Legend */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <LegendItem color="bg-cyan-glow" label="Technical" />
          <LegendItem color="bg-accent-red" label="Business" />
          <LegendItem color="bg-accent-yellow" label="Featured" />
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EventCard = ({ event }: { event: EventPoster }) => {
  const colors = categoryColors[event.category];
  const Icon = event.icon;

  return (
    <div
      className={`
        group relative h-full p-6 bg-card/80 backdrop-blur-sm rounded-lg border-2
        ${colors.border} ${colors.shadow}
        transition-all duration-300 hover:scale-[1.02] cursor-pointer
      `}
    >
      {/* Icon */}
      <div
        className={`
          w-12 h-12 rounded-lg ${colors.bg} ${colors.text}
          flex items-center justify-center mb-4
        `}
      >
        <Icon className="w-6 h-6" />
      </div>

      {/* Category Badge */}
      <span
        className={`
          inline-block px-3 py-1 text-xs font-heading uppercase tracking-wider
          rounded-full border mb-4 ${colors.badge}
        `}
      >
        {event.category === "coming" ? "Coming Soon" : event.category}
      </span>

      {/* Title */}
      <h3 className={`font-display text-2xl font-bold mb-1 ${colors.text}`}>
        {event.title}
      </h3>
      <p className="font-heading text-lg text-foreground/80 mb-2">
        {event.subtitle}
      </p>

      {/* Date */}
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-4 h-4 text-muted-foreground" />
        <span className="font-heading text-sm text-muted-foreground">
          {event.date}
        </span>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
        {event.description}
      </p>

      {/* CTA */}
      {event.category !== "coming" && (
        <Button
          variant={event.category === "tech" ? "glitch" : event.category === "business" ? "premiere" : "golden"}
          size="sm"
          className="w-full group/btn"
        >
          View Details
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      )}

      {event.category === "coming" && (
        <div className="text-center py-2 text-muted-foreground font-heading text-sm">
          Details coming soon...
        </div>
      )}
    </div>
  );
};

const LegendItem = ({ color, label }: { color: string; label: string }) => (
  <div className="flex items-center gap-2">
    <div className={`w-3 h-3 rounded-full ${color}`} />
    <span className="font-heading text-sm text-muted-foreground">{label}</span>
  </div>
);

export default EventsGrid;
