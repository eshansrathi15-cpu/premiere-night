import { motion } from "framer-motion";
import { Rocket, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border/50 pt-16 pb-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 circuit-bg opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Rocket className="w-10 h-10 text-cyan-glow" />
                <div className="absolute inset-0 w-10 h-10 bg-cyan-glow/30 blur-xl" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-cyan-glow text-glow">
                  E-WEEK 2026
                </h3>
                <p className="font-heading text-sm text-muted-foreground tracking-widest">
                  BITS PILANI
                </p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
              The Director's Cut of entrepreneurship. Join us for 7 days of 
              innovation, competition, and the creation of tomorrow's 
              business leaders.
            </p>
            <p className="font-display text-lg text-cyan-glow">
              February 9-15, 2026
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display text-lg text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink href="#timeline">Timeline</FooterLink>
              <FooterLink href="#dehack">DeHack</FooterLink>
              <FooterLink href="#bedrock">Bedrock</FooterLink>
              <FooterLink href="#events">All Events</FooterLink>
              <FooterLink href="#register">Register Now</FooterLink>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display text-lg text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-glow flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  BITS Pilani, Pilani Campus,<br />
                  Rajasthan 333031
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-glow" />
                <a 
                  href="mailto:eweek@pilani.bits-pilani.ac.in"
                  className="text-muted-foreground text-sm hover:text-cyan-glow transition-colors"
                >
                  eweek@pilani.bits-pilani.ac.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-glow" />
                <span className="text-muted-foreground text-sm">
                  +91 1596 515XXX
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm font-heading"
          >
            © {currentYear} E-Week BITS Pilani. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <SocialLink href="#" icon={Instagram} label="Instagram" />
            <SocialLink href="#" icon={Twitter} label="Twitter" />
            <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
          </motion.div>

          {/* Credits */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-xs font-heading"
          >
            Directed by CEL | Produced with ❤️ at BITS Pilani
          </motion.p>
        </div>

        {/* End Credits Rolling Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="font-display text-xs text-muted-foreground/50 uppercase tracking-[0.3em]">
            The End
          </p>
          <div className="mt-4 flex justify-center gap-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                className="w-1 h-1 bg-cyan-glow rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a
      href={href}
      className="text-muted-foreground text-sm hover:text-cyan-glow transition-colors font-heading"
    >
      {children}
    </a>
  </li>
);

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <a
    href={href}
    aria-label={label}
    className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:border-cyan-glow hover:bg-cyan-glow/10 text-muted-foreground hover:text-cyan-glow transition-all duration-300"
  >
    <Icon className="w-5 h-5" />
  </a>
);

export default Footer;
