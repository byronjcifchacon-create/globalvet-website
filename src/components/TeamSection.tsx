import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TOTAL_IMAGES = 37;
const removedImages = [29, 33, 34];
const allImages = Array.from({ length: TOTAL_IMAGES }, (_, i) => i + 1)
  .filter(num => !removedImages.includes(num))
  .map(num => `/images/${num}.webp`);
const GRID_SIZE = 12;

const TeamSection = () => {
  const [slots, setSlots] = useState<{ id: number; currentImage: string }[]>([]);

  // Inicializar slots con imágenes aleatorias únicas
  useEffect(() => {
    const shuffled = [...allImages].sort(() => 0.5 - Math.random());
    const totalAvailable = allImages.length;
    const initialSlots = Array.from({ length: GRID_SIZE }, (_, i) => ({
      id: i,
      currentImage: shuffled[i % totalAvailable]
    }));
    setSlots(initialSlots);
  }, []);

  const rotateImage = useCallback(() => {
    setSlots(prevSlots => {
      const newSlots = [...prevSlots];
      // Elegimos un slot al azar para cambiar
      const indexToUpdate = Math.floor(Math.random() * GRID_SIZE);
      
      // Buscamos una imagen que no esté siendo mostrada actualmente
      const currentImages = new Set(newSlots.map(s => s.currentImage));
      const availableImages = allImages.filter(img => !currentImages.has(img));
      
      if (availableImages.length > 0) {
        const nextImage = availableImages[Math.floor(Math.random() * availableImages.length)];
        newSlots[indexToUpdate] = { ...newSlots[indexToUpdate], currentImage: nextImage };
      }
      
      return newSlots;
    });
  }, []);

  useEffect(() => {
    if (slots.length === 0) return;
    
    const isMobile = window.innerWidth < 768;
    const interval = setInterval(rotateImage, isMobile ? 3000 : 1500);
    return () => clearInterval(interval);
  }, [slots.length, rotateImage]);

  return (
    <section id="equipo" className="section-padding bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <p className="text-accent font-display font-semibold text-sm tracking-widest uppercase mb-3">
            Nuestro Equipo
          </p>
          <h2 className="section-title text-foreground">
            Conoce a quienes lo hacen posible
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Detrás de cada envío, producto y atención, hay un equipo humano comprometido con la excelencia técnica y el bienestar animal.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {slots.map((slot) => (
            <div 
              key={slot.id} 
              className="relative overflow-hidden rounded-xl bg-muted/20 aspect-square shadow-sm"
            >
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={slot.currentImage}
                  src={slot.currentImage}
                  alt="Miembro del equipo"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.4, 0, 0.2, 1] // Custom cubic-bezier for smoother feel
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
