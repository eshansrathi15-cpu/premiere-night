import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, Cpu, Clock, Users } from "lucide-react";
import dehackBg from "@/assets/dehack-bg.jpg";

const DeHackSection = () => {
  return (
    <section id="dehack" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${dehackBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background" />

      {/* Animated Circuit Lines */}
      <div className="absolute inset-0 circuit-bg" />

      {/* Scan Line Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: ["0%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-glow/50 to-transparent"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-glow/10 border border-cyan-glow/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-cyan-glow rounded-full animate-pulse" />
              <span className="font-heading text-sm text-cyan-glow uppercase tracking-widest">
                Day 2 - Day 6
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display text-5xl md:text-6xl font-black mb-4">
              <span className="text-cyan-glow text-glow-strong glitch" data-text="DeHack">
                DeHack
              </span>
            </h2>
            <p className="font-display text-2xl text-foreground/80 mb-2">
              Desert Hack
            </p>
            <p className="font-heading text-xl text-muted-foreground mb-8">
              "Build your ideas from scratch, on campus."
            </p>

            {/* Description */}
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The ultimate 120-hour hackathon challenge. No scripts. No shortcuts. 
              Just you, your team, and the limitless possibilities of innovation. 
              Transform your boldest ideas into reality while competing for glory 
              and life-changing prizes.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <StatCard icon={Clock} value="120" label="Hours" />
              <StatCard icon={Users} value="500+" label="Hackers" />
              <StatCard icon={Code} value="50+" label="Projects" />
              <StatCard icon={Cpu} value="₹5L+" label="Prizes" />
            </div>

            {/* CTA */}
            <Button variant="glitch" size="xl">
              Register for DeHack
            </Button>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Glowing Terminal Window */}
            <div className="relative bg-card/80 border-2 border-cyan-glow/30 rounded-lg p-6 shadow-glow backdrop-blur-sm">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-accent-red" />
                <div className="w-3 h-3 rounded-full bg-accent-yellow" />
                <div className="w-3 h-3 rounded-full bg-accent-green" />
                <span className="ml-4 font-mono text-sm text-muted-foreground">
                  dehack@bits-pilani:~
                </span>
              </div>

              {/* Terminal Content */}
              <div className="font-mono text-sm space-y-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-cyan-glow"
                >
                  $ ./start_hackathon.sh
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-muted-foreground"
                >
                  Initializing DeHack 2026...
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="text-accent-green"
                >
                  ✓ Loading creative environment
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="text-accent-green"
                >
                  ✓ Connecting 500+ innovators
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.7 }}
                  className="text-accent-green"
                >
                  ✓ Unlocking unlimited potential
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-accent-yellow"
                >
                  Ready to hack the future? [Y/n]
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ delay: 2.3, repeat: Infinity, duration: 1 }}
                  className="inline-block w-3 h-5 bg-cyan-glow"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-cyan-glow/20 rounded-lg animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-glow/10 rounded-lg animate-float" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon: Icon, value, label }: { icon: any; value: string; label: string }) => (
  <div className="text-center p-4 bg-card/50 border border-cyan-glow/20 rounded-lg backdrop-blur-sm hover:border-cyan-glow/50 transition-colors">
    <Icon className="w-6 h-6 text-cyan-glow mx-auto mb-2" />
    <div className="font-display text-2xl font-bold text-foreground">{value}</div>
    <div className="font-heading text-sm text-muted-foreground">{label}</div>
  </div>
);

export default DeHackSection;
