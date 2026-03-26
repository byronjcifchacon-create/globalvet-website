import { motion } from "framer-motion";
import { Award, ShieldCheck, Boxes, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Líderes y pioneros",
    description: "En el sector mediante la innovación constante y visión de futuro.",
  },
  {
    icon: Boxes,
    title: "Multimarcas",
    description: "Productos de alta calidad de marcas reconocidas internacionalmente.",
  },
  {
    icon: ShieldCheck,
    title: "Calidad garantizada",
    description: "Productos registrados y aprobados para el mercado guatemalteco.",
  },
  {
    icon: TrendingUp,
    title: "Experiencia",
    description: "Más de 17 años de trayectoria en la industria veterinaria.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-display font-semibold text-sm tracking-widest uppercase mb-3">
            Nuestra Propuesta
          </p>
          <h2 className="section-title text-foreground">
            ¿Por qué elegirnos?
          </h2>
          <p className="section-subtitle mt-4">
            Líderes y pioneros en el sector mediante la innovación. Multimarcas con productos de alta calidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <reason.icon className="text-primary" size={30} />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
