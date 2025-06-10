
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Reviews = () => {
  const [selectedCategory, setSelectedCategory] = useState("alle");

  const reviews = [
    {
      id: 1,
      name: "Familie Schmidt",
      tour: "Allgemeine Stadtführung",
      rating: 5,
      date: "November 2024",
      comment: "Herr Lange hat uns Freiburg auf eine wunderbare Art nähergebracht. Seine Begeisterung für die Stadt ist ansteckend und er weiß viele interessante Details zu erzählen. Absolut empfehlenswert!",
      category: "familie"
    },
    {
      id: 2,
      name: "Klasse 9b, Gymnasium Offenburg",
      tour: "Mittelalterliches Freiburg",
      rating: 5,
      date: "Oktober 2024",
      comment: "Die Schüler waren begeistert! Herr Lange hat es geschafft, Geschichte lebendig zu machen. Auch die sonst eher schwer zu motivierenden Schüler haben aufmerksam zugehört.",
      category: "schulklasse"
    },
    {
      id: 3,
      name: "Thomas M. aus München",
      tour: "Architektur in Freiburg",
      rating: 5,
      date: "September 2024",
      comment: "Als Architekt war ich besonders an der Bautour interessiert. Herr Lange hat ein enormes Fachwissen und konnte alle meine Fragen kompetent beantworten. Eine sehr gelungene Führung!",
      category: "tourist"
    },
    {
      id: 4,
      name: "Maria und Josef K.",
      tour: "Jüdisches Freiburg",
      rating: 5,
      date: "September 2024",
      comment: "Eine sehr bewegende und informative Tour. Herr Lange behandelt das sensible Thema mit großem Respekt und Sachverstand. Wir haben viel Neues über unsere Stadt erfahren.",
      category: "freiburger"
    },
    {
      id: 5,
      name: "Wandergruppe Schwarzwald",
      tour: "Modernes Freiburg",
      rating: 4,
      date: "August 2024",
      comment: "Interessante Einblicke in die moderne Stadtentwicklung. Besonders Vauban hat uns beeindruckt. Die Tour war gut strukturiert und informativ.",
      category: "gruppe"
    },
    {
      id: 6,
      name: "Sarah und Tim aus Berlin",
      tour: "Allgemeine Stadtführung",
      rating: 5,
      date: "Juli 2024",
      comment: "Wir waren zum ersten Mal in Freiburg und Herr Lange hat uns die Stadt perfekt vorgestellt. Nach der Tour wussten wir genau, was wir noch auf eigene Faust erkunden wollten.",
      category: "tourist"
    },
    {
      id: 7,
      name: "Renate W., Freiburg",
      tour: "Der Alte Friedhof",
      rating: 4,
      date: "Juni 2024",
      comment: "Obwohl ich schon lange in Freiburg wohne, habe ich viel Neues über den Alten Friedhof erfahren. Eine ruhige und besinnliche Tour durch einen besonderen Ort.",
      category: "freiburger"
    },
    {
      id: 8,
      name: "Verein für Stadtgeschichte",
      tour: "Freiburg-Herdern",
      rating: 5,
      date: "Mai 2024",
      comment: "Herr Lange kennt jeden Winkel von Herdern und hat uns Geschichten erzählt, die selbst wir als Geschichtsinteressierte noch nicht kannten. Sehr empfehlenswert!",
      category: "gruppe"
    }
  ];

  const categories = [
    { key: "alle", label: "Alle Bewertungen" },
    { key: "tourist", label: "Touristen" },
    { key: "familie", label: "Familien" },
    { key: "schulklasse", label: "Schulklassen" },
    { key: "gruppe", label: "Gruppen" },
    { key: "freiburger", label: "Freiburger" }
  ];

  const filteredReviews = selectedCategory === "alle" 
    ? reviews 
    : reviews.filter(review => review.category === selectedCategory);

  const averageRating = (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1);
  const totalReviews = reviews.length;

  const renderStars = (rating: number) => {
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
                <div className="text-3xl font-bold text-primary mb-1">{averageRating}</div>
                <div className="flex justify-center mb-1">
                  {renderStars(Math.round(parseFloat(averageRating)))}
                </div>
                <div className="text-sm text-muted-foreground">
                  Durchschnitt aus {totalReviews} Bewertungen
                </div>
              </div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={selectedCategory === category.key ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.key)}
                className="text-sm"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {filteredReviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <p className="text-sm text-primary font-medium">{review.tour}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex mb-1">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.comment}"</p>
                  <Badge variant="outline" className="mt-3 text-xs">
                    {categories.find(cat => cat.key === review.category)?.label}
                  </Badge>
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

      <Footer />
    </div>
  );
};

export default Reviews;
