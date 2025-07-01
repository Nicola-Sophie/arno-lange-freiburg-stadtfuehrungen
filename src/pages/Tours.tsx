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
      description: "Der denkmalgeschützte alte Friedhof ist seit seiner Stilllegung 1873 ein Platz der Entspannung. Wer hat Kaiser Napoleon in den Fuß geschossen, wer zeigte dem Großherzog die lange Nase und wer legt dem schlafenden Mädchen jahrzehntelang frisch Blumen aufs Grab. Warum läuft ein Totenkopf unter dem Kreuz Jesu und weshalb fliegen so viele seltene Schmetterlinge herum. Dies alles und vieles mehr erfahren Sie auf einem Spaziergang von ca. 1,5 Std.",
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
      description: "Wie werden die Juden um 1280 im Münsterportal dargestellt? Warum waren sie für die Grafen von Freiburg die wichtigste Einnahmequelle und warum verschwanden sie dann für 438 Jahre völlig aus Freiburg? Der Rundgang startet am Konzerthaus und führt dann zum Platz der alten Synagoge. Dann sehen wir den Stolperstein von Edmund Husserl und beleuchten seine Beziehung zu Edith Stein und Heidegger. Auf dem weiteren Weg streifen wir den ersten jüdischen Gerichtssaal von 1860 und sehen den Platz, auf dem sich 1938 die Juden versammeln mussten, bevor sie ins Konzentrationslager nach Dachau transportiert wurden. Wir enden in der Innenstadt an der neuen Synagoge.",
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
      description: "Das Dorf Herdern ist älter als Freiburg. Ein Zähringer starb dort und hinterließ eine wichtige Reliquie. Welchen Geheimtipp gab es für heiratswillige Junggesellen, welches der spätere Papst wusste? Die Herdermer Kurklinik der \"Kaltwasserkurlehre\" – ein \"Muss\". Als wann fuhr die Straßenbahnlinie 6 bis zur Kirche und wo gaben Clara Schumann und Johannes Brahms Konzerte? Das Geld, das woanders verdient wurde, sollte in Freiburg ausgegeben werden, meinte der damalige Bürgermeister Otto Winterer um 1890. So wurde Herdern zu Pensionspolis und die Villen sprossen wie Pilze aus der Erde.",
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
      title: "Etwas Architektur in Freiburg?",
      duration: "90 Minuten",
      description: "Eine Reise durch die Jahrhunderte der Baukunst. Vom Meisterwerk der Gotik bis zur zeitgenössischen Architektur. Wo ist es am Münsterchor 'pfusch am Bau'? Die barocken Paiais: exakt rekonstruierte architektonische Hüllen. Warum hat Freiburg soviel Achaden und in der Innenstadt keinerlei Flachdächer? Dafür gibt es aber am der Nord- eingang eine Haltestelle in moderner geometrisch-verspielter Manier. Das und vieles mehr erkuden wir auf unserem architektonischen Rundgang durch Freiburg",
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

  const getShortDescription = (description: string) => {
    // Split description into words and estimate 3 lines (approximately 150-180 characters)
    const maxLength = 150;
    if (description.length <= maxLength) return description;
    
    const truncated = description.substring(0, maxLength);
    const lastSpaceIndex = truncated.lastIndexOf(' ');
    return truncated.substring(0, lastSpaceIndex) + '...';
  };

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
                className={`hover:shadow-lg transition-all cursor-pointer ${
                  selectedTour === tour.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedTour(selectedTour === tour.id ? null : tour.id)}
              >
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
