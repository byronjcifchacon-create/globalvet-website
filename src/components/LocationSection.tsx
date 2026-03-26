import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="ubicacion" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent font-display font-semibold text-sm tracking-widest uppercase mb-3">
            Encuéntranos
          </p>
          <h2 className="section-title text-foreground">
            Ubicación
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground">
            <MapPin size={18} className="text-primary" />
            <p className="text-sm">
              Km. 16.8 Carretera Interamericana, 1-95 Ofibodegas Megacentro, Bodega #25, Zona 1 de Mixco
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-lg aspect-[16/7]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.6!2d-90.6!3d14.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM2JzAwLjAiTiA5MMKwMzYnMDAuMCJX!5e0!3m2!1ses!2sgt!4v1700000000000!5m2!1ses!2sgt"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Globalvet S.A."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
