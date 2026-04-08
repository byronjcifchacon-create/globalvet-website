import { motion } from "framer-motion";

const segments = [
  { name: "Veterinarias", image: "/images/seg-veterinarias.webp" },
  { name: "Pet Shops", image: "/images/seg-petshops.webp" },
  { name: "Acuarios", image: "/images/seg-acuarios.webp" },
  { name: "Agroservicios", image: "/images/seg-agroservicios.webp" },
  { name: "Granjas", image: "/images/seg-granjas.webp" },
  { name: "Planta de Alimentos", image: "/images/seg-planta.webp" },
  { name: "Lecherías", image: "/images/seg-lecherias.webp" },
  { name: "Fincas de Reses", image: "/images/seg-fincas.webp" },
  { name: "Camaroneras", image: "/images/seg-camaroneras.webp" },
  { name: "Aceite de Palma", image: "/images/seg-aceitepalma.webp" },
  { name: "Tilapias", image: "/images/seg-tilapias.webp" },
];

const SegmentsSection = () => {
  return (
    <section id="segmentos" className="section-padding bg-primary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-display font-semibold text-sm tracking-widest uppercase mb-3">
            Nuestros Segmentos
          </p>
          <h2 className="section-title text-primary-foreground">
            ¿A quién servimos?
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {segments.map((seg, i) => (
            <motion.div
              key={seg.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="group relative overflow-hidden rounded-2xl cursor-default"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={seg.image}
                alt={seg.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-display font-semibold text-sm md:text-base text-white text-center">
                  {seg.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;
