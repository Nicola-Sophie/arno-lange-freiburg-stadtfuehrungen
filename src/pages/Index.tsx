import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";

const Index = () => {
  const [selectedTour, setSelectedTour] = useState<string | null>(null);

  const featuredTours = [
    {
      id: "klassischer-stadtrundgang",
      title: "Der klassische Stadtrundgang",
      description: "Freiburg wurde im Hohen Mittelalter von Herzog Berthold II aus „freien Stücken\" gegründet. Was das bedeutet und warum sein zweitgeborener Sohn dort dann eine florierenden Marktsiedlung gegründet hat erfahren sie genauso, warum man die vielen Kilometer Bächle anlegte. Der Bau des Freiburger Münsters setzte neue Maßstäbe in der gotischen Kirchenbaukunst. Unter den Habsburgern blühte Freiburg in der frühen Neuzeit auf und es entstanden prächtige Bauten. Nach der Zerstörung im zweiten Weltkrieg konnte durch bewahrenden Heimatschutzstil im Wiederaufbau die Attraktivität der Altstadt gerettet werden. Warum schwimmt eigentlich ein Krokodil im Gewerbebach?",
      duration: "90 Minuten"
    },
    {
      id: "alter-friedhof",
      title: "Der alte Friedhof",
      description: "Der denkmalgeschützte alte Friedhof ist seit seiner Stilllegung 1873 ein Platz der Entspannung. Wer hat Kaiser Napoleon in den Fuß geschossen, wer zeigte dem Großherzog die lange Nase und wer legt dem schlafenden Mädchen jahrzehntelang frisch Blumen aufs Grab. Warum liegt ein Totenkopf unter dem Kreuz Jesu und weshalb fliegen so viele seteinerne Schmetterlinge herum. Dies alles und vieles mehr erfahren Sie auf einem Spaziergang.",
      duration: "90 Minuten"
    },
    {
      id: "modernes-freiburg",
      title: "Das moderne Freiburg",
      description: "Das moderne Freiburg vom Wiederaufbau bis heute\n\nVom Bahnhof zur Altstadt\nDie Führung zur Stadtentwicklung seit der Nachkriegszeit führt Sie vom Platz der alten Synagoge durch die Universitätsbibliothek zur Bismarckallee, dem verdichteten Entlastungsraum der Bahnhofs­gegend. Sie sehen die tanzenden Kegel und das Windfenster. Durch die Eisenbahnstraße gehen wir zum aktuell neu gestalteten Rotteckring und bestaunen an der Nordwest­ecke der Altstadt moderne Architektur, die sich homogen in den Stadtkörper einfügt, und gehen dann weiter zum Siegesdenkmal, wo der international renommierte Architekt Jürgen Mayer den Pavillon u. die Haltestelle futuristisch gestaltet hat. So verstehen Sie dann das Erfolgsgeheimnis des Freiburger Stadtbildes: Vielfalt in der Einheit!",
      duration: "90 Minuten"
    }
  ];

  const getShortDescription = (description: string) => {
    const maxLength = 150;
    if (description.length <= maxLength) return description;
    
    const truncated = description.substring(0, maxLength);
    const lastSpaceIndex = truncated.lastIndexOf(' ');
    return truncated.substring(0, lastSpaceIndex) + '...';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-20"
        style={{
          backgroundImage: 'url(/lovable-uploads/41b6da9e-7e67-4cfe-b9c2-aedd85b35d96.png)'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
              Thematische Stadtführungen in Freiburg
            </h1>
            <p className="text-3xl text-white mb-6 drop-shadow-lg">
              Individuell auf Ihre Interessen abgestimmt
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link to="/tours">Touren entdecken</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/90 hover:bg-white">
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
                <Card 
                  key={tour.id} 
                  className={`hover:shadow-lg transition-all cursor-pointer ${
                    selectedTour === tour.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedTour(selectedTour === tour.id ? null : tour.id)}
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{tour.title}</CardTitle>
                    <CardDescription className="text-sm text-primary font-semibold">
                      Dauer: {tour.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {selectedTour === tour.id ? tour.description : getShortDescription(tour.description)}
                    </p>
                    
                    {selectedTour === tour.id ? (
                      <div className="space-y-2">
                        <Button asChild className="w-full">
                          <Link to={`/contact?tour=${encodeURIComponent(tour.title)}`}>
                            Diese Tour buchen
                          </Link>
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full bg-white hover:bg-gray-50"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedTour(null);
                          }}
                        >
                          weniger anzeigen
                        </Button>
                      </div>
                    ) : (
                      <Button variant="outline" className="w-full">
                        mehr anzeigen
                      </Button>
                    )}
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
