import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Store, TrendingUp, Users, Trophy } from "lucide-react";
import bedrockBg from "@/assets/bedrock-bg.jpg";

const BedrockSection = () => {
  return (
    <section id="bedrock" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
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
            {/* Gold Frame Card */}
            <div className="relative bg-card/60 border-2 border-accent-yellow/30 rounded-lg p-8 backdrop-blur-sm">
              {/* Gold Corner Decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent-yellow -translate-x-1 -translate-y-1" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent-yellow translate-x-1 -translate-y-1" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent-yellow -translate-x-1 translate-y-1" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent-yellow translate-x-1 translate-y-1" />

              <h3 className="font-display text-2xl text-accent-yellow mb-6 text-center">
                The Grand Challenge
              </h3>

              {/* Steps */}
              <div className="space-y-6">
                <StepCard
                  number="01"
                  title="Take Over"
                  description="Your team takes complete control of a campus restaurant for one day."
                />
                <StepCard
                  number="02"
                  title="Strategize"
                  description="Develop innovative marketing campaigns and irresistible offers."
                />
                <StepCard
                  number="03"
                  title="Operate"
                  description="Run the restaurant, serve customers, and manage operations."
                />
                <StepCard
                  number="04"
                  title="Profit"
                  description="The team with maximum profits wins the ultimate glory!"
                />
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -left-8 w-16 h-16 border border-accent-yellow/30 rounded-full"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-yellow/10 border border-accent-yellow/30 rounded-full mb-6">
              <Trophy className="w-4 h-4 text-accent-yellow" />
              <span className="font-heading text-sm text-accent-yellow uppercase tracking-widest">
                Day 7 - Grand Finale
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-accent-yellow to-amber-500 bg-clip-text text-transparent">
                BedRock
              </span>
            </h2>
            <p className="font-display text-2xl text-foreground/80 mb-2">
              The Ultimate Campus Takeover
            </p>
            <p className="font-heading text-xl text-muted-foreground mb-8">
              "Where business meets battlefield."
            </p>

            {/* Description */}
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Student teams compete in the ultimate business simulation. Take over 
              campus restaurants, deploy cutting-edge marketing strategies, create 
              irresistible offers, and battle for maximum profits. This is where 
              entrepreneurs are forged.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <FeatureCard icon={Store} label="Restaurant Operations" />
              <FeatureCard icon={TrendingUp} label="Marketing Warfare" />
              <FeatureCard icon={Users} label="Team Competition" />
              <FeatureCard icon={Trophy} label="Glory & Prizes" />
            </div>

            {/* CTA */}
            <Button variant="golden" size="xl">
              Register Your Team
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="flex gap-4 items-start">
    <div className="flex-shrink-0 w-10 h-10 bg-accent-yellow/20 border border-accent-yellow/50 rounded-full flex items-center justify-center font-display text-sm text-accent-yellow">
      {number}
    </div>
    <div>
      <h4 className="font-display text-lg text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <div className="flex items-center gap-3 p-3 bg-card/30 border border-accent-yellow/10 rounded-lg backdrop-blur-sm hover:border-accent-yellow/30 transition-colors">
    <Icon className="w-5 h-5 text-accent-yellow" />
    <span className="font-heading text-sm text-foreground">{label}</span>
  </div>
);

export default BedrockSection;
