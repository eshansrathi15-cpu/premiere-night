import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Mic, Lightbulb, Users, Clapperboard, Film, Sparkles } from "lucide-react";
interface EventPoster {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  category: "action" | "drama" | "premiere" | "coming";
  description: string;
  icon: any;
  rating?: string;
}
const events: EventPoster[] = [{
  id: 1,
  title: "DeHack",
  subtitle: "An Epic Thriller",
  date: "Feb 10-14",
  category: "action",
  description: "120 hours of non-stop innovation. Build your blockbuster from scratch.",
  icon: Clapperboard,
  rating: "PG-120hrs"
}, {
  id: 2,
  title: "BedRock",
  subtitle: "A Business Drama",
  date: "Feb 15",
  category: "drama",
  description: "The ultimate campus takeover. Profits, glory, and fierce competition.",
  icon: Users,
  rating: "R-Intense"
}, {
  id: 3,
  title: "Pitch Fest",
  subtitle: "Documentary Feature",
  date: "Feb 11",
  category: "drama",
  description: "Present your startup vision to industry titans and investors.",
  icon: Lightbulb,
  rating: "PG-Inspiring"
}, {
  id: 4,
  title: "Keynotes",
  subtitle: "Special Presentations",
  date: "Feb 9-15",
  category: "premiere",
  description: "Industry legends share their entrepreneurial journeys.",
  icon: Mic,
  rating: "G-All Ages"
}, {
  id: 5,
  title: "Coming Soon",
  subtitle: "Mystery Production",
  date: "TBA",
  category: "coming",
  description: "More exciting events to be announced. Stay tuned.",
  icon: Film
}, {
  id: 6,
  title: "More Films",
  subtitle: "In Development",
  date: "TBA",
  category: "coming",
  description: "The full festival lineup will be revealed soon.",
  icon: Sparkles
}];
const categoryColors = {
  action: {
    border: "border-velvet-bright/50",
    bg: "bg-velvet/10",
    text: "text-velvet-bright",
    shadow: "hover:shadow-glow-red",
    badge: "bg-velvet/30 text-velvet-bright border-velvet-bright/40"
  },
  drama: {
    border: "border-gold/50",
    bg: "bg-gold/10",
    text: "text-gold",
    shadow: "hover:shadow-glow",
    badge: "bg-gold/20 text-gold border-gold/40"
  },
  premiere: {
    border: "border-accent-green/50",
    bg: "bg-accent-green/10",
    text: "text-accent-green",
    shadow: "hover:shadow-glow-green",
    badge: "bg-accent-green/20 text-accent-green border-accent-green/40"
  },
  coming: {
    border: "border-muted-foreground/30",
    bg: "bg-muted/30",
    text: "text-muted-foreground",
    shadow: "hover:shadow-none",
    badge: "bg-muted text-muted-foreground border-muted-foreground/30"
  }
};
const EventsGrid = () => {
  return <section id="events" className="py-24 bg-card/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 filmstrip-bg opacity-20" />
      <div className="absolute inset-0 curtain-bg" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <div className="flex justify-center gap-2 mb-4">
            <Film className="w-5 h-5 text-gold" />
            <span className="font-heading text-sm uppercase tracking-[0.3em] text-gold">
              Now Showing
            </span>
            <Film className="w-5 h-5 text-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-wide">
            The <span className="text-gold ">Festival Lineup</span>
          </h2>
          <p className="font-heading text-lg text-muted-foreground max-w-2xl mx-auto">
            Your all-access pass to the biggest entrepreneurial festival of 2026
          </p>
        </motion.div>

        {/* Category Legend */}
        <motion.div initial={{
        opacity: 0,
        y: 10
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="flex flex-wrap justify-center gap-6 mb-12">
          <LegendItem color="bg-velvet-bright" label="Action/Thriller" />
          <LegendItem color="bg-gold" label="Drama/Business" />
          <LegendItem color="bg-accent-green" label="Special Feature" />
        </motion.div>

        {/* Events Grid - Movie Poster Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => <motion.div key={event.id} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1,
          duration: 0.5
        }}>
              <EventCard event={event} />
            </motion.div>)}
        </div>
      </div>
    </section>;
};
const EventCard = ({
  event
}: {
  event: EventPoster;
}) => {
  const colors = categoryColors[event.category];
  const Icon = event.icon;
  return <div className={`
        group relative h-full bg-card/80 backdrop-blur-sm rounded-lg border-2 overflow-hidden
        ${colors.border} ${colors.shadow}
        transition-all duration-300 hover:scale-[1.02] cursor-pointer
      `}>
      {/* Poster Header */}
      <div className={`p-6 ${colors.bg} border-b border-border/50`}>
        <div className="flex items-start justify-between">
          <div className={`
              w-14 h-14 rounded-lg ${colors.bg} ${colors.text}
              flex items-center justify-center border ${colors.border}
            `}>
            <Icon className="w-7 h-7" />
          </div>
          {event.rating && <span className={`text-xs font-heading uppercase tracking-wider px-2 py-1 rounded border ${colors.badge}`}>
              {event.rating}
            </span>}
        </div>
      </div>

      {/* Poster Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className={`font-display text-2xl font-bold mb-1 ${colors.text}`}>
          {event.title}
        </h3>
        <p className="font-heading text-lg text-foreground/80 italic mb-3">
          {event.subtitle}
        </p>

        {/* Date */}
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <span className="font-heading text-sm text-muted-foreground uppercase tracking-wider">
            {event.date}
          </span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed font-heading">
          {event.description}
        </p>

        {/* CTA */}
        {event.category !== "coming" && <Button variant={event.category === "action" ? "premiere" : event.category === "drama" ? "golden" : "green"} size="sm" className="w-full group/btn">
            Get Tickets
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>}

        {event.category === "coming" && <div className="text-center py-2 text-muted-foreground font-heading text-sm italic">
            Coming to theaters soon...
          </div>}
      </div>
    </div>;
};
const LegendItem = ({
  color,
  label
}: {
  color: string;
  label: string;
}) => <div className="flex items-center gap-2">
    <div className={`w-3 h-3 rounded-full ${color}`} />
    <span className="font-heading text-sm text-muted-foreground">{label}</span>
  </div>;
export default EventsGrid;