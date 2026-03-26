import { Facebook, Instagram, Clock, MapPin, Phone } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const FooterSection = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:items-center">
          {/* Brand */}
          <div>
            <img
              src={logoWhite}
              alt="Globalvet"
              className="h-20 md:h-24 w-auto mb-4"
            />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Comprometidos con el bienestar animal. Importadores y distribuidores de productos médicos veterinarios en Guatemala.
            </p>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-accent">
              Información
            </h4>
            <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
              <Clock size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>Lunes a Viernes<br />7:00 – 17:00 hrs</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>
                Km. 16.8 Carretera Interamericana, 1-95 Ofibodegas Megacentro, Bodega 25, Zona 1 de Mixco
              </span>
            </div>
            <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
              <Phone size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>2234-5516 / 2234-5507</span>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-accent">
              Síguenos
            </h4>
            <div className="space-y-3">
              <a
                href="https://www.facebook.com/GlobalVetSA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Facebook size={18} />
                <span>Global Vet S.A.</span>
              </a>
              <a
                href="https://www.instagram.com/globalvetsa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Instagram size={18} />
                <span>@globalvetsa</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/50 text-xs">
            © {new Date().getFullYear()} Globalvet S.A. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
