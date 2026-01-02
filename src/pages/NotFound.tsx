import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 circuit-bg opacity-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-red/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Text */}
          <h1 className="font-display text-8xl md:text-9xl font-black text-cyan-glow text-glow-strong mb-4">
            404
          </h1>
          
          {/* Message */}
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
            Scene Not Found
          </h2>
          <p className="font-heading text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Looks like this scene was left on the cutting room floor. 
            Let's get you back to the premiere.
          </p>

          {/* CTA */}
          <Link to="/">
            <Button variant="neon" size="lg">
              <ArrowLeft className="w-4 h-4" />
              Back to E-Week
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
