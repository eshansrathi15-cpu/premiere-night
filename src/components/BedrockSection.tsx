import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Store, TrendingUp, Users, Trophy, Crown } from "lucide-react";
import bedrockBg from "@/assets/bedrock-bg.jpg";

const BedrockSection = () => {
  return (
    <section id="bedrock" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${bedrockBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-l from-background via-background/90 to-background" />

      {/* Spotlight Effects */}
      <div className="absolute inset-0 spotlight" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Awards Show Card */}
            <div className="relative bg-card/60 border-2 border-gold/40 rounded-lg p-8 backdrop-blur-sm shadow-glow">
              {/* Gold Corner Decorations */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-gold -translate-x-1 -translate-y-1" />
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-gold translate-x-1 -translate-y-1" />
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-gold -translate-x-1 translate-y-1" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-gold translate-x-1 translate-y-1" />

              <div className="text-center mb-6">
                <Crown className="w-10 h-10 text-gold mx-auto mb-3" />
                <h3 className="font-display text-xl text-gold tracking-wider">
                  THE ULTIMATE CHALLENGE
                </h3>
              </div>

              {/* Steps */}
              <div className="space-y-5">
                <StepCard
                  number="I"
                  title="The Takeover"
                  description="Your team seizes control of a campus restaurant for one dramatic day."
                />
                <StepCard
                  number="II"
                  title="The Strategy"
                  description="Deploy cunning marketing tactics and irresistible offers."
                />
                <StepCard
                  number="III"
                  title="The Performance"
                  description="Run operations, serve customers, deliver an unforgettable experience."
                />
                <StepCard
                  number="IV"
                  title="The Glory"
                  description="Maximum profits win the crown. History remembers the victors."
                />
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -left-8 w-16 h-16 border border-gold/30 rounded-full"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/40 rounded-full mb-6">
              <Trophy className="w-4 h-4 text-gold" />
              <span className="font-heading text-sm text-gold uppercase tracking-[0.2em]">
                Scene 7 • The Grand Finale
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-4 tracking-wide">
              <span className="text-gold text-glow">BedRock</span>
            </h2>
            <p className="font-display text-2xl text-foreground/80 mb-2 italic">
              The Ultimate Campus Takeover
            </p>
            <p className="font-heading text-xl text-gold mb-8">
              "Where business legends are born."
            </p>

            {/* Description */}
            <p className="text-muted-foreground mb-8 leading-relaxed font-heading">
              The awards night of E-Week. Student teams compete in the ultimate 
              business showdown. Take over restaurants, deploy Oscar-worthy marketing 
              strategies, and battle for maximum profits. This is where entrepreneurs 
              claim their moment of glory.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <FeatureCard icon={Store} label="Restaurant Control" />
              <FeatureCard icon={TrendingUp} label="Marketing Mastery" />
              <FeatureCard icon={Users} label="Team Showdown" />
              <FeatureCard icon={Trophy} label="Winner Takes All" />
            </div>

            {/* CTA */}
            <Button variant="golden" size="xl">
              <Crown className="w-5 h-5" />
              Claim Your Throne
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="flex gap-4 items-start">
    <div className="flex-shrink-0 w-10 h-10 bg-gold/20 border border-gold/50 rounded-full flex items-center justify-center font-display text-sm text-gold">
      {number}
    </div>
    <div>
      <h4 className="font-display text-lg text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground font-heading">{description}</p>
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <div className="flex items-center gap-3 p-3 bg-card/30 border border-gold/20 rounded-lg backdrop-blur-sm hover:border-gold/40 transition-colors">
    <Icon className="w-5 h-5 text-gold" />
    <span className="font-heading text-sm text-foreground">{label}</span>
  </div>
);

export default BedrockSection;
