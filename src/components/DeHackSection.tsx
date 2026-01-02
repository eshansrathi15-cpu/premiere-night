import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clapperboard, Clock, Users, Award, Zap } from "lucide-react";
import dehackBg from "@/assets/dehack-bg.jpg";

const DeHackSection = () => {
  return (
    <section id="dehack" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${dehackBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background" />

      {/* Curtain Effect */}
      <div className="absolute inset-0 curtain-bg" />

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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-velvet/20 border border-velvet-bright/30 rounded-full mb-6">
              <Clapperboard className="w-4 h-4 text-velvet-bright" />
              <span className="font-heading text-sm text-velvet-bright uppercase tracking-[0.2em]">
                Scenes 2-6 • The Feature Film
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-4 tracking-wide">
              <span className="text-velvet-bright">DeHack</span>
            </h2>
            <p className="font-display text-2xl text-foreground/80 mb-2 italic">
              Desert Hack
            </p>
            <p className="font-heading text-xl text-gold mb-8">
              "Build your ideas from scratch. No scripts. No stunt doubles."
            </p>

            {/* Description */}
            <p className="text-muted-foreground mb-8 leading-relaxed font-heading">
              The ultimate 120-hour hackathon saga. Like the greatest thrillers, 
              every moment counts. Your team writes the screenplay, directs the action, 
              and delivers a blockbuster innovation that leaves the audience speechless.
            </p>

            {/* Stats - Movie Style */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <StatCard icon={Clock} value="120" label="Hours" subtitle="Runtime" />
              <StatCard icon={Users} value="500+" label="Cast" subtitle="Members" />
              <StatCard icon={Zap} value="50+" label="Projects" subtitle="Productions" />
              <StatCard icon={Award} value="₹5L+" label="Awards" subtitle="Prize Pool" />
            </div>

            {/* CTA */}
            <Button variant="premiere" size="xl">
              <Clapperboard className="w-5 h-5" />
              Join the Production
            </Button>
          </motion.div>

          {/* Visual Element - Director's Chair Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Movie Script Card */}
            <div className="relative bg-card/80 border-2 border-velvet-bright/30 rounded-lg p-6 shadow-glow-red backdrop-blur-sm">
              {/* Script Header */}
              <div className="text-center mb-6 pb-4 border-b border-border">
                <p className="font-display text-sm text-velvet-bright tracking-[0.3em] uppercase">
                  Desert Hack Productions
                </p>
                <h3 className="font-display text-2xl text-foreground mt-2">
                  SCREENPLAY
                </h3>
              </div>

              {/* Script Content */}
              <div className="font-heading text-sm space-y-4 text-muted-foreground">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-velvet-bright uppercase tracking-wider mb-1">FADE IN:</p>
                  <p className="italic">INT. BITS PILANI CAMPUS - NIGHT</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <p>500 DEVELOPERS gather in the auditorium. Laptops glow in the darkness.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  <p className="text-gold uppercase tracking-wider">DIRECTOR (V.O.)</p>
                  <p className="italic pl-4">The clock starts now. You have 120 hours to change the world.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="pt-4 border-t border-border"
                >
                  <p className="text-velvet-bright">CUT TO:</p>
                  <p className="italic">Your innovation taking center stage...</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ delay: 1.7, repeat: Infinity, duration: 1 }}
                  className="inline-block w-3 h-5 bg-velvet-bright"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-velvet-bright/20 rounded-lg" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-velvet/20 rounded-lg animate-float" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon: Icon, value, label, subtitle }: { icon: any; value: string; label: string; subtitle: string }) => (
  <div className="text-center p-4 bg-card/50 border border-velvet-bright/20 rounded-lg backdrop-blur-sm hover:border-velvet-bright/50 transition-colors">
    <Icon className="w-5 h-5 text-velvet-bright mx-auto mb-2" />
    <div className="font-display text-2xl font-bold text-foreground">{value}</div>
    <div className="font-heading text-xs text-muted-foreground uppercase tracking-wider">{subtitle}</div>
  </div>
);

export default DeHackSection;
