import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Excelente servicio y productos de alta calidad. Siempre puntuales con las entregas.",
    author: "Cliente Veterinaria",
    role: "Ciudad de Guatemala",
  },
  {
    quote: "Globalvet ha sido nuestro proveedor de confianza por más de 10 años. Totalmente recomendados.",
    author: "Cliente Agroservicio",
    role: "Quetzaltenango",
  },
  {
    quote: "Gran variedad de productos y asesoría técnica profesional. Un aliado estratégico.",
    author: "Cliente Granja",
    role: "Escuintla",
  },
];

const TestimonialsSection = () => {
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
            Testimonios
          </p>
          <h2 className="section-title text-foreground">
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="p-8 rounded-2xl bg-muted/50 relative"
            >
              <Quote className="text-accent/30 absolute top-6 right-6" size={32} />
              <p className="text-foreground leading-relaxed mb-6 text-sm">
                "{t.quote}"
              </p>
              <div>
                <p className="font-display font-bold text-sm text-foreground">{t.author}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
