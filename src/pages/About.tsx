import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Über mich
            </h1>
            <p className="text-xl text-muted-foreground">
              
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1 flex justify-center">
              <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/b0457f5c-687d-4d62-85fb-d301bf3538a4.png" 
                  alt="Arno Lange - Zertifizierter Gästeführer in Freiburg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Freiburg und ich
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg">
                  <p>
                    Freiburg im Breisgau ist eine Stadt, die mich seit jeher fasziniert. 
                    Die einzigartige Mischung aus Geschichte, lebendiger 
                    Universitätskultur und moderner Architektur macht diese Stadt zu einem 
                    besonderen Ort, den ich gerne mit anderen teile.
                  </p>
                  <p>
                    Der Weg zum Gästeführer begann für mich nach der Rente, da meine Töchter meinten nur
                    auf der Choach liegen sein nichts für mich.
                    Besonders fasziniert mich das Erfolgsgeheimnis des Freiburger Stadtbildes, was da heißt: 
                    "Vielfalt in der Einheit". Jede Gasse, jedes Gebäude hat seine eigene 
                    Geschichte zu erzählen.
                  </p>
                  <p>
                    Jede Führung passe ich an die Interessen und Bedürfnisse meiner Gäste an. 
                    Sind Sie Arzt, Jurist, Architekt oder etwas ganz anderes? Auf alles versuche 
                    ich individuell einzugehen.
                    Mein Ziel ist es, Ihnen nicht nur Fakten zu vermitteln, sondern 
                    Geschichten zu erzählen, die Freiburg zum Leben erwecken und Ihnen 
                    ein authentisches Gefühl für diese wunderbare Stadt geben.
                  </p>
                  <p> 
                  Meine Führungen richten sich an Gäste in Freiburg, Familien und Gruppen, 
                    die die Stadt entdecken wollen, aber auch an Freiburger:innen, die ihre 
                    Stadt nochmal neu kennenlernen möchten.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>


          {/* CTA Section */}
          <section className="py-12 bg-primary text-primary-foreground rounded-lg">
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
      </main>
    </div>
  );
};

export default About;
