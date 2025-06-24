
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Reviews = () => {
  const reviews = [
    {
      id: 3,
      name: "Annemarie M.",
      date: "April 2025",
      comment: "Es war super. Sehr informativ. Arno hat das Ganze total toll verpackt und ist auch super darauf eingegangen, dass Kinder in der Gruppe waren. Er hat sie mit einbezogen und alles total anschaulich erzählt. Kann ich sehr empfehlen."
    },
    {
      id: 4,
      name: "Paul G.",
      date: "April 2025",
      comment: "Unser Führer Herr Lange hat die Tour sehr informativ und kurzweilig geführt, hat uns super gefallen 😋"
    },
    {
      id: 5,
      name: "Alina K.",
      date: "April 2025",
      comment: "Der Stadtführer A. Lange brachte uns kenntnisreich, locker und sehr gut fundiert die besonderen städtebaulichen und geschichtlichen Be-u.Gegebenheiten Freiburgs zur Kenntnis. Wir können unumwunden sagen: \"Super\""
    },
    {
      id: 1,
      name: "Stefanie A.",
      date: "November 2024",
      comment: "Informative und kurzweilige Führung. Auf den Rollstuhlfahrer in der Gruppe wurde sorgsam geachtet – danke dafür!"
    },
    {
      id: 2,
      name: "Carlo B.",
      date: "Oktober 2024",
      comment: "Herr Lange hat uns freundlich und offen empfangen. Die Führung war kurzweilig, informativ und humorvoll gestaltet. Sein gutes Auge für Details hat uns vielfältige Einblicke gewährt, die man alleine niemals entdeckt hätte. Vielen Dank!"
    }
  ];

  const renderStars = (rating: number = 5) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Rezensionen
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Erfahrungen meiner Gäste mit den Stadtführungen
            </p>
            


          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                    </div>
                    <div className="text-right">
                      <div className="flex mb-1">
                        {renderStars(5)}
                      </div>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center">
                Werden Sie Teil der zufriedenen Gäste
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-lg">
                Erleben Sie selbst eine unvergessliche Stadtführung durch Freiburg. 
                Ich freue mich darauf, Ihnen meine Begeisterung für diese wunderbare Stadt zu vermitteln.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Button asChild size="lg">
                  <Link to="/tours">
                    Touren ansehen
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    Jetzt buchen
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Reviews;
