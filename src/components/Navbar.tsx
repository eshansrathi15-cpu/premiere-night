import { Film } from "lucide-react";
import { motion } from "framer-motion";
const Navbar = () => {
  return <motion.nav initial={{
    y: -100,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.6,
    ease: "easeOut"
  }} className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Film className="w-8 h-8 text-gold animate-flicker" />
            <div className="absolute inset-0 w-8 h-8 bg-gold/30 blur-xl" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl text-gold text-glow tracking-wider">
              E-WEEK
            </span>
            <span className="text-xs text-muted-foreground font-heading tracking-[0.3em]">#somethingcrazy</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#timeline">Schedule</NavLink>
          <NavLink href="#dehack">DeHack</NavLink>
          <NavLink href="#bedrock">Bedrock</NavLink>
          <NavLink href="#events">Events</NavLink>
        </div>

        {/* CTA Button */}
        <motion.a href="#register" whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} className="hidden sm:inline-flex items-center gap-2 px-6 py-2 bg-velvet text-foreground font-display font-bold text-sm rounded-md border border-velvet-bright/50 hover:shadow-glow-red transition-all duration-300">
          Get Tickets
        </motion.a>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>;
};
const NavLink = ({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) => <a href={href} className="relative font-heading text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-gold transition-colors duration-300 group">
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
  </a>;
export default Navbar;