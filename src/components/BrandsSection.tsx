import { useState } from "react";
import { motion } from "framer-motion";

interface Brand {
  name: string;
  file: string;
  dark?: boolean;
}

const brands: Brand[] = [
  { name: "BC", file: "bc_logo.png" },
  { name: "Bereum", file: "bereum logo.png" },
  { name: "Erma", file: "Erma logo.png" },
  { name: "Figapets", file: "Figapets.png" },
  { name: "Inform Nutrition", file: "Inform Nutrition.png" },
  { name: "Innopharma", file: "Innopharma logo.png" },
  { name: "KW", file: "KW logo.png" },
  { name: "Agrovet", file: "Logo Agrovet.png" },
  { name: "FIGA", file: "Logo FIGA.png" },
  { name: "Hipra", file: "Logo hipra.jpg" },
  { name: "Kirón", file: "Logo Kirón.png" },
  { name: "Prodac", file: "logo prodac.jpg" },
  { name: "Unimedical", file: "Logo Unimedical.png" },
  { name: "Nufit", file: "Logo_nufit_blanco_NMC.png", dark: true },
  { name: "Alcames", file: "Logo-Alcames.png" },
  { name: "Allignani", file: "Logo-Allignani-1.png" },
  { name: "Love Sudamérica", file: "Love sudamerica.jpg" },
  { name: "Mervue", file: "Mervue logo.png" },
  { name: "Nupec", file: "Nupec_NMC.png" },
  { name: "NutraPro", file: "NutraPro-LOGO-e1523273929859.png" },
  { name: "Pets HD", file: "Pets HD.png" },
  { name: "Pharmapec", file: "Pharmapec.png" },
  { name: "Viyo", file: "Viyo Logo.png" },
  { name: "Von Fraken", file: "Von fraken logo.png" },
];

const row1 = brands.slice(0, 12);
const row2 = brands.slice(12);

function LogoCard({ brand }: { brand: Brand }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="shrink-0 flex items-center justify-center"
      style={{
        width: 140,
        height: 80,
        padding: 16,
        borderRadius: 8,
        border: "1px solid #e5e7eb",
        backgroundColor: brand.dark ? "#8d1a14" : "#ffffff",
        transition: "border-color 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#8d1a14";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#e5e7eb";
      }}
    >
      {failed ? (
        <span className="text-xs text-center text-gray-500 font-medium leading-tight">
          {brand.name}
        </span>
      ) : (
        <img
          src={`/logos/${brand.file}`}
          alt={brand.name}
          onError={() => setFailed(true)}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          loading="lazy"
        />
      )}
    </div>
  );
}

interface CarouselRowProps {
  items: Brand[];
  duration: number;
  reverse?: boolean;
  paused: boolean;
}

function CarouselRow({ items, duration, reverse, paused }: CarouselRowProps) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div
        style={{
          display: "flex",
          gap: 20,
          width: "max-content",
          animationName: reverse ? "scroll-right" : "scroll-left",
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {doubled.map((brand, i) => (
          <LogoCard key={`${brand.file}-${i}`} brand={brand} />
        ))}
      </div>
    </div>
  );
}

const BrandsSection = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section id="marcas" className="section-padding" style={{ backgroundColor: "#f9fafb" }}>
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-display font-semibold text-sm tracking-widest uppercase mb-3">
            Nuestro Portafolio
          </p>
          <h2 className="section-title text-foreground">
            Marcas que distribuimos
          </h2>
        </motion.div>

        <div
          className="space-y-5"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, #f9fafb 5%, #f9fafb 95%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, #f9fafb 5%, #f9fafb 95%, transparent 100%)",
          }}
        >
          <CarouselRow items={row1} duration={35} paused={paused} />
          <CarouselRow items={row2} duration={28} reverse paused={paused} />
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
