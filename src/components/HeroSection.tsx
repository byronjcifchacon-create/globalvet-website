import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logoWhite from "@/assets/logo-white.png";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          videoRef.current.muted = true;
          await videoRef.current.play();
        }
      } catch (err) {
        console.warn("Autoplay blocked, retrying on interaction:", err);
      }
    };

    playVideo();
    document.addEventListener("click", playVideo, { once: true });
    document.addEventListener("scroll", playVideo, { once: true });

    return () => {
      document.removeEventListener("click", playVideo);
      document.removeEventListener("scroll", playVideo);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          className="absolute inset-0"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={logoWhite}
            alt="Globalvet"
            className="w-[180px] md:w-[280px] mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10"
        >
          <div className="w-16 h-[2px] bg-accent mx-auto mb-6" />
          <p className="text-primary-foreground/90 text-xl md:text-2xl lg:text-3xl font-display font-medium leading-snug">
            Comprometidos con el bienestar animal.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <a
            href="#nosotros"
            className="inline-flex items-center gap-2 text-primary-foreground/70 text-sm font-medium hover:text-accent transition-colors"
          >
            <span>Conoce más</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="animate-bounce">
              <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
