
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";

const Index = () => {
  const featuredTours = [
    {
      title: "Der klassische Stadtrundgang",
      description: "Ein umfassender Rundgang durch Freiburgs Geschichte und Sehenswürdigkeiten",
      duration: "90 Minuten",
      popular: true
    },
    {
      title: "Architektur in Freiburg",
      description: "Eine Reise durch die Jahrhunderte der Baukunst - von gotischen Meisterwerken bis zur zeitgenössischen Architektur",
      duration: "90 Minuten",
      popular: true
    },
    {
      title: "Alter Friedhof",
      description: "Ein besonderer Ort der Ruhe und Geschichte",
      duration: "90 Minuten",
      popular: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/20 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Thematische Stadtführungen in Freiburg – Individuell auf Ihre Interessen abgestimmt
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link to="/tours">Touren entdecken</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link to="/contact">Jetzt Buchen</Link>
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
                  Ihr persönlicher Gästeführer
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Als zertifizierter Gästeführer und Mitglied im BVGD e.V. 
                  (Bundesverband der Gästeführer in Deutschland) richten sich meine
                  Führungen an Gäste in Freiburg, Familien und Gruppen, 
                  die die Stadt entdecken wollen, aber auch an Freiburger:innen, die ihre 
                  Stadt nochmal neu kennenlernen möchten.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Jede Führung passe ich an die Interessen und Bedürfnisse meiner Gäste an. 
                  Sind Sie Arzt, Jurist, Architekt oder etwas ganz anderes? Auf alles versuche ich individuell einzugehen.
                </p>
                <Button asChild variant="outline">
                  <Link to="/about">Mehr über meine Geschichte</Link>
                </Button>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/lovable-uploads/b0457f5c-687d-4d62-85fb-d301bf3538a4.png" 
                    alt="Arno Lange - Zertifizierter Gästeführer in Freiburg"
                    className="w-full h-full object-cover"
                  />
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
                Meine beliebtesten Stadtführungen
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
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Bereit für Ihre persönliche Stadtführung?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Kontaktieren Sie mich für individuelle Termine und Preise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg" className="font-semibold">
                <Link to="/contact">Jetzt Buchen</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="font-semibold">
                <Link to="/tours">Touren ansehen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
