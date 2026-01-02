import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Film, Clapperboard, Trophy, Sparkles } from "lucide-react";

interface TimelineDay {
  day: number;
  date: string;
  title: string;
  subtitle: string;
  isDeHack?: boolean;
  isFinale?: boolean;
  icon: any;
}

const timelineData: TimelineDay[] = [
  { day: 1, date: "Feb 9", title: "Opening Night", subtitle: "The Red Carpet Premiere", icon: Film },
  { day: 2, date: "Feb 10", title: "DeHack Begins", subtitle: "Act I: The Setup", isDeHack: true, icon: Clapperboard },
  { day: 3, date: "Feb 11", title: "DeHack Day 2", subtitle: "Act II: Rising Action", isDeHack: true, icon: Clapperboard },
  { day: 4, date: "Feb 12", title: "DeHack Day 3", subtitle: "Act III: The Climax", isDeHack: true, icon: Clapperboard },
  { day: 5, date: "Feb 13", title: "DeHack Day 4", subtitle: "Act IV: The Twist", isDeHack: true, icon: Clapperboard },
  { day: 6, date: "Feb 14", title: "DeHack Finale", subtitle: "Act V: Resolution", isDeHack: true, icon: Clapperboard },
  { day: 7, date: "Feb 15", title: "BedRock", subtitle: "The Grand Finale", isFinale: true, icon: Trophy },
];

const FilmStripTimeline = () => {
  const [activeDay, setActiveDay] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="timeline" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 filmstrip-bg opacity-30" />
      <div className="absolute inset-0 curtain-bg" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="font-heading text-sm uppercase tracking-[0.3em] text-gold">
              The Screenplay
            </span>
            <Sparkles className="w-5 h-5 text-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-wide">
            7 Days of <span className="text-gold text-glow">Epic Cinema</span>
          </h2>
          <p className="font-heading text-lg text-muted-foreground">
            Every great story unfolds in acts
          </p>
        </motion.div>

        {/* Film Strip Container */}
        <div className="relative">
          {/* Film Strip Sprockets - Top */}
          <div className="flex justify-between px-4 mb-2">
            {Array.from({ length: 14 }).map((_, i) => (
              <motion.div
                key={`top-${i}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="sprocket hidden md:block"
              />
            ))}
          </div>

          {/* Scrollable Film Strip */}
          <div
            ref={scrollRef}
            className="overflow-x-auto pb-4 scrollbar-thin"
          >
            <div className="flex gap-0 min-w-max">
              {timelineData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.day}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setActiveDay(item.day)}
                    className={`relative group cursor-pointer ${
                      item.isDeHack ? "w-40 md:w-52" : item.isFinale ? "w-48 md:w-64" : "w-44 md:w-56"
                    }`}
                  >
                    {/* Film Frame */}
                    <div
                      className={`
                        relative h-64 md:h-80 border-4 transition-all duration-500
                        ${activeDay === item.day 
                          ? item.isFinale 
                            ? "border-gold shadow-glow-yellow bg-gold/5" 
                            : item.isDeHack 
                              ? "border-velvet-bright shadow-glow-red bg-velvet/10" 
                              : "border-gold shadow-glow bg-gold/5"
                          : "border-navy-mid bg-card/50"
                        }
                      `}
                    >
                      {/* Frame Number - Film Style */}
                      <div className="absolute top-2 left-2 font-display text-xs text-muted-foreground flex items-center gap-1">
                        <span className="text-gold">SCENE</span> {String(item.day).padStart(2, "0")}
                      </div>

                      {/* Frame Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                        {/* Icon */}
                        <Icon className={`w-8 h-8 mb-3 ${
                          item.isFinale ? "text-gold" : item.isDeHack ? "text-velvet-bright" : "text-gold"
                        }`} />

                        {/* Date */}
                        <span
                          className={`font-heading text-sm mb-2 uppercase tracking-wider ${
                            item.isFinale ? "text-gold" : item.isDeHack ? "text-velvet-bright" : "text-gold"
                          }`}
                        >
                          {item.date}
                        </span>

                        {/* Title */}
                        <h3
                          className={`font-display text-lg md:text-xl font-bold mb-2 transition-all duration-300 ${
                            activeDay === item.day
                              ? item.isFinale
                                ? "text-gold text-glow"
                                : item.isDeHack
                                ? "text-foreground"
                                : "text-gold text-glow"
                              : "text-foreground/80"
                          }`}
                        >
                          {item.title}
                        </h3>

                        {/* Subtitle */}
                        <p className="font-heading text-sm text-muted-foreground italic">
                          {item.subtitle}
                        </p>

                        {/* DeHack Indicator */}
                        {item.isDeHack && (
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                            <span className="px-3 py-1 bg-velvet/30 border border-velvet-bright/50 rounded-full text-xs font-heading text-velvet-bright uppercase tracking-wider">
                              Now Filming
                            </span>
                          </div>
                        )}

                        {/* Finale Indicator */}
                        {item.isFinale && (
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                            <span className="px-3 py-1 bg-gold/20 border border-gold/50 rounded-full text-xs font-heading text-gold uppercase tracking-wider">
                              Season Finale
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Connector for DeHack days */}
                      {item.isDeHack && index < timelineData.length - 1 && timelineData[index + 1].isDeHack && (
                        <div className="absolute right-0 top-1/2 w-4 h-1 bg-velvet-bright/50 translate-x-full -translate-y-1/2 z-10" />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Film Strip Sprockets - Bottom */}
          <div className="flex justify-between px-4 mt-2">
            {Array.from({ length: 14 }).map((_, i) => (
              <motion.div
                key={`bottom-${i}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="sprocket hidden md:block"
              />
            ))}
          </div>
        </div>

        {/* Scroll Hint */}
        <p className="text-center mt-8 text-muted-foreground text-sm font-heading tracking-wider">
          ← Scroll through the screenplay →
        </p>
      </div>
    </section>
  );
};

export default FilmStripTimeline;
