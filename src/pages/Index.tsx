
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const featuredTours = [
    {
      title: "Allgemeine Stadtführung",
      description: "Ein umfassender Rundgang durch Freiburgs Geschichte und Sehenswürdigkeiten",
      duration: "90 Minuten"
    },
    {
      title: "Mittelalterliches Freiburg",
      description: "Entdecken Sie die faszinierende mittelalterliche Geschichte der Stadt",
      duration: "75 Minuten"
    },
    {
      title: "Architektur in Freiburg",
      description: "Von gotischen Bauten bis zur modernen Architektur",
      duration: "100 Minuten"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Thematische Stadtführungen in Freiburg
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Individuell auf Ihre Interessen abgestimmt
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link to="/tours">Touren entdecken</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link to="/contact">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Ihr zertifizierter Gästeführer
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Als Mitglied im BVGD e.V. (Bundesverband der Gästeführer in Deutschland) 
                  biete ich Ihnen professionelle und unterhaltsame Stadtführungen durch 
                  das wunderschöne Freiburg im Breisgau.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Entdecken Sie mit mir die faszinierende Geschichte, Kultur und 
                  Architektur dieser einzigartigen Stadt – ob für Touristen, 
                  Schulklassen, Familien oder Freiburger mit Interesse an ihrer Stadtgeschichte.
                </p>
                <Button asChild variant="outline">
                  <Link to="/about">Mehr über mich erfahren</Link>
                </Button>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-6xl text-muted-foreground">📸</span>
                  <span className="sr-only">Profilbild von Arno Lange</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Beliebte Stadtführungen
              </h2>
              <p className="text-lg text-muted-foreground">
                Wählen Sie aus verschiedenen thematischen Touren durch Freiburg
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredTours.map((tour, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{tour.title}</CardTitle>
                    <CardDescription className="text-sm text-primary font-semibold">
                      Dauer: {tour.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{tour.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button asChild>
                <Link to="/tours">Alle Touren ansehen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Bereit für Ihre persönliche Stadtführung?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Kontaktieren Sie mich für individuelle Termine und Preise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">Jetzt anfragen</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/tours">Touren ansehen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
