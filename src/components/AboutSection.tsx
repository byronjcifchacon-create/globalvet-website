import { motion } from "framer-motion";
import { Building2, Calendar, Warehouse } from "lucide-react";

const stats = [
  { icon: Building2, label: "Fundada por", value: "2 Médicos Veterinarios" },
  { icon: Calendar, label: "Constituida en", value: "2007" },
  { icon: Warehouse, label: "Almacenaje", value: "1,240+ m²" },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-display font-semibold text-sm tracking-widest uppercase mb-3">
            Sobre Nosotros
          </p>
          <h2 className="section-title text-foreground">
            Quiénes somos
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-subtitle text-center mb-16"
        >
          Somos una empresa registrante, importadora y distribuidora de productos médicos veterinarios
          para animales de producción y compañía. Fundada por 2 médicos veterinarios, constituida en
          el año 2007. Más de 1,240 m² de almacenaje.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="text-center p-8 rounded-2xl bg-muted/50"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-primary" size={28} />
              </div>
              <p className="text-sm text-muted-foreground font-medium mb-1">{stat.label}</p>
              <p className="font-display font-bold text-xl text-foreground">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
