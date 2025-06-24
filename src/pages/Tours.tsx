import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Tours = () => {
  const [selectedTour, setSelectedTour] = useState<string | null>(null);

  const tours = [
    {
      id: "klassischer-stadtrundgang",
      title: "Der klassische Stadtrundgang",
      duration: "90 Minuten",
      description: "Freiburg wurde im Hohen Mittelalter von Herzog Berthold II aus „freien Stücken\" gegründet. Was das bedeutet und warum sein zweitgeborener Sohn dort dann eine florierenden Marktsiedlung gegründet hat erfahren sie genauso, warum man die vielen Kilometer Bächle angelegt hat. Der Bau des Freiburger Münsters setzte neue Maßstäbe in der gotischen Kirchenbaukunst. Unter den Habsburgern blühte Freiburg in der frühen Neuzeit auf und es entstanden prächtige Bauten. Nach der Zerstörung im zweiten Weltkrieg konnte durch bewahrenden Heimatschutzstil im Wiederaufbau die Attraktivität der Altstadt gerettet werden. Warum schwimmt eigentlich ein Krokodil im Gewerbebach?",
      highlights: [
        "Gründungsgeschichte durch Herzog Berthold II",
        "Die Bedeutung der Freiburger Bächle",
        "Freiburger Münster und gotische Kirchenbaukunst",
        "Habsburger Zeit und prächtige Bauten",
        "Wiederaufbau nach dem Zweiten Weltkrieg",
        "Das Geheimnis des Krokodils im Gewerbebach"
      ],
      popular: true
    },
    {
      id: "alter-friedhof",
      title: "Der alte Friedhof",
      duration: "90 Minuten",
      description: "Ein besonderer Ort der Ruhe und Geschichte. Entdecken Sie bedeutende Grabstätten und die Parkanlage des Alten Friedhofs.",
      highlights: [
        "Geschichte des Friedhofs",
        "Bedeutende Persönlichkeiten",
        "Grabmalkunst verschiedener Epochen",
        "Parkanlage und Natur",
        "Kulturhistorische Bedeutung"
      ],
      popular: true
    },
    {
      id: "modernes-freiburg",
      title: "Das moderne Freiburg",
      duration: "90 Minuten",
      description: "Das moderne Freiburg vom Wiederaufbau bis heute\n\nVom Bahnhof zur Altstadt\nDie 1,5-stündige Führung zur Stadtentwicklung seit der Nachkriegszeit führt Sie vom Platz der alten Synagoge durch die UB zur Bismarckallee, dem verdichteten Entlastungsraum des Bahnhofs­gegend. Sie sehen die tanzenden Regel und das Windfenster. Durch die Eisenbahnstraße gehen wir zum aktuell neu gestalteten Rotteckring und bestaunen an der Nordwest­ecke der Altstadt moderne Architektur, die sich homogen in den Stadtkörper einfügt, und gehen dann weiter zum Siegesdenkmal, wo der international renommierte Architekt Jürgen Mayer den Pavillon u. die Haltestelle futuristisch gestaltet hat. So verstehen Sie dann das Erfolgsgeheimnis des Freiburger Stadtbildes: Vielfalt in der Einheit!",
      highlights: [
        "Wiederaufbau nach dem Zweiten Weltkrieg",
        "Vauban - das Öko-Stadtviertel",
        "Rieselfeld und moderne Architektur", 
        "Nachhaltige Stadtentwicklung",
        "Universitätscampus",
        "Green City Konzepte"
      ],
      popular: false
    },
    {
      id: "juedisches-freiburg",
      title: "Das jüdische Freiburg",
      duration: "90 Minuten",
      description: "Die Geschichte der jüdischen Gemeinde in Freiburg von den Anfängen bis heute. Ein wichtiger Teil der Stadtgeschichte.",
      highlights: [
        "Mittelalterliche jüdische Gemeinde",
        "Synagogen in Freiburg",
        "Jüdisches Leben und Kultur",
        "Verfolgung und Widerstand",
        "Neue jüdische Gemeinde"
      ],
      popular: false
    },
    {
      id: "stadtteil-herdern",
      title: "Mein Stadtteil Herdern",
      duration: "90 Minuten",
      description: "Entdecken Sie den historischen Stadtteil Herdern mit seinen Villen, dem Stadtgarten und besonderen Geschichten.",
      highlights: [
        "Villenarchitektur des 19. Jahrhunderts",
        "Stadtgarten und Parkanlagen",
        "Herdern als Wohnviertel",
        "Besondere Gebäude und Geschichten",
        "Entwicklung des Stadtteils"
      ],
      popular: false
    },
    {
      id: "architektur-freiburg",
      title: "Architektur in Freiburg",
      duration: "90 Minuten",
      description: "Eine Reise durch die Jahrhunderte der Baukunst - von gotischen Meisterwerken bis zur zeitgenössischen Architektur.",
      highlights: [
        "Gotik: Freiburger Münster",
        "Renaissance und Barock",
        "Jugendstil-Gebäude",
        "Moderne Architektur",
        "Zeitgenössische Bauten"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Thematische Stadtführungen
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Wählen Sie aus verschiedenen Touren durch Freiburg - individuell auf Ihre Interessen abgestimmt
            </p>
            <Badge variant="outline" className="text-sm">
              Alle Führungen finden auf Deutsch statt
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tours.map((tour) => (
              <Card 
                key={tour.id} 
                className={`hover:shadow-lg transition-all cursor-pointer relative ${
                  selectedTour === tour.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedTour(selectedTour === tour.id ? null : tour.id)}
              >
                {tour.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">
                    Beliebt
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{tour.title}</CardTitle>
                      <CardDescription className="text-primary font-semibold">
                        Dauer: {tour.duration}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{tour.description}</p>
                  
                  {selectedTour === tour.id && (
                    <div className="mt-6 space-y-4 border-t border-border pt-4">
                      <h4 className="font-semibold text-foreground">
                        Highlights dieser Tour:
                      </h4>
                      <ul className="space-y-2">
                        {tour.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full mt-4">
                        <Link to="/contact">
                          Diese Tour buchen
                        </Link>
                      </Button>
                    </div>
                  )}
                  
                  {selectedTour !== tour.id && (
                    <Button variant="outline" className="w-full">
                      Details anzeigen
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-accent/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Individuelle Anpassungen möglich
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">
                  Jede Führung passe ich an die Interessen und Bedürfnisse meiner Gäste an. 
                  Sind sie Arzt, Jurist, Architekt oder etwas ganz anderes? Auf alles versuche ich individuell einzugehen.

                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div>
                    <strong>Geeignet für:</strong>
                    <ul className="mt-2 space-y-1">
                      <li>• Gäste in Freiburg</li>
                      <li>• Familien mit Kindern</li>
                      <li>• Gruppen und Vereine</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Auch für:</strong>
                    <ul className="mt-2 space-y-1">
                      <li>• Freiburger:innen</li>
                      <li>• Firmenevents</li>
                      <li>• Individuelle Wünsche</li>
                    </ul>
                  </div>
                </div>
                <Button asChild size="lg" className="mt-6">
                  <Link to="/contact">
                    Jetzt Ihre Wunschtour anfragen
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tours;
