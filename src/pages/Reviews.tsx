import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Familie Schmidt",
      date: "November 2024",
      comment: "Herr Lange hat uns Freiburg auf eine wunderbare Art nähergebracht. Seine Begeisterung für die Stadt ist ansteckend und er weiß viele interessante Details zu erzählen. Absolut empfehlenswert!"
    },
    {
      id: 2,
      name: "Thomas M. aus München",
      date: "September 2024",
      comment: "Eine sehr gelungene Führung! Herr Lange hat ein enormes Fachwissen und konnte alle unsere Fragen kompetent beantworten. Wir haben viel Neues über Freiburg erfahren."
    },
    {
      id: 3,
      name: "Maria und Josef K.",
      date: "September 2024",
      comment: "Eine sehr informative Tour. Herr Lange behandelt alle Themen mit großem Respekt und Sachverstand. Wir haben viel Neues über unsere Stadt erfahren."
    },
    {
      id: 4,
      name: "Sarah und Tim aus Berlin",
      date: "Juli 2024",
      comment: "Wir waren zum ersten Mal in Freiburg und Herr Lange hat uns die Stadt perfekt vorgestellt. Nach der Tour wussten wir genau, was wir noch auf eigene Faust erkunden wollten."
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
              Rezensionen & Bewertungen
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Erfahrungen meiner Gäste mit den Stadtführungen
            </p>
            
            <div className="flex justify-center items-center space-x-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">5.0</div>
                <div className="flex justify-center mb-1">
                  {renderStars(5)}
                </div>
                <div className="text-sm text-muted-foreground">
                  Durchschnitt aus {reviews.length} Bewertungen
                </div>
              </div>
            </div>
          </div>

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
