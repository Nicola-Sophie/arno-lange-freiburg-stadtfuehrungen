
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-foreground mb-3">Arno Lange</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Zertifizierter Gästeführer
            </p>
            <p className="text-sm text-muted-foreground">
              Mitglied im BVGD e.V.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-3">Navigation</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Startseite
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Über mich
              </Link>
              <Link to="/tours" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Touren
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Kontakt
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-3">Kontakt</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>arno.lange@icloud.com</p>
              <p>+49 160 98322617</p>
              <p className="text-xs mt-4">
                Termine & Preise nach Vereinbarung
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Arno Lange - Stadtführungen Freiburg. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
