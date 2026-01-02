import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Ticket, Calendar } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Animated Light Leaks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-glow/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-yellow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 border border-cyan-glow/30 rounded-full text-cyan-glow font-heading text-sm uppercase tracking-widest bg-background/30 backdrop-blur-sm">
            BITS Pilani's Entrepreneurial Blockbuster
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-4 text-glow-strong"
        >
          <span className="text-cyan-glow">E-WEEK</span>{" "}
          <span className="text-foreground">2026</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-display text-2xl md:text-3xl text-foreground/80 mb-8"
        >
          The Director's Cut
        </motion.p>

        {/* Date - Movie Release Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="inline-flex items-center gap-4 mb-12 px-8 py-4 border-2 border-cyan-glow/50 rounded-lg bg-background/40 backdrop-blur-md"
        >
          <Calendar className="w-6 h-6 text-cyan-glow" />
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <span className="font-display text-xl md:text-2xl text-foreground font-bold">
              FEBRUARY 9 - 15
            </span>
            <span className="hidden md:block w-1 h-1 bg-cyan-glow rounded-full" />
            <span className="font-display text-xl md:text-2xl text-cyan-glow font-bold">
              2026
            </span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="premiere" size="xl" className="w-full sm:w-auto">
            <Ticket className="w-5 h-5" />
            Get Premiere Tickets
          </Button>
          <Button variant="neon" size="xl" className="w-full sm:w-auto">
            View Schedule
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-muted-foreground text-xs font-heading uppercase tracking-widest">
            Scroll to Explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyan-glow/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-cyan-glow rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
