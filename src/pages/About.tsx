import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
              Mein Weg zum zertifizierten Gästeführer in Freiburg
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
                    Der Weg zum Gästeführer begann für mich mit der Rente. Meine Töchter meinten, dass nur auf der Chouch
                    zu liegen nichts für mich sei. 
                    Nach einer umfassenden Ausbildung und Zertifizierung durch den BVGD e.V. 
                    führe ich nun seit mehreren Jahren Besucher durch meine Wahlheimatstadt.
                  </p>
                  <p>
                    Besonders fasziniert mich die Vielfalt Freiburgs – von den gotischen 
                    Strukturen des Münsters bis hin zu den modernen nachhaltigen Stadtvierteln 
                    wie Vauban und Rieselfeld. Jede Gasse, jedes Gebäude hat seine eigene 
                    Geschichte zu erzählen.
                  </p>
                  <p>
                    Mein Ziel ist es, Ihnen nicht nur Fakten zu vermitteln, sondern 
                    Geschichten zu erzählen, die Freiburg zum Leben erwecken und Ihnen 
                    ein authentisches Gefühl für diese wunderbare Stadt geben.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center">
                Ihre Stadtführung, individuell gestaltet
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-lg">
                Jede Führung passe ich an die Interessen und Bedürfnisse meiner Gäste an. 
                Ob Sie sich für mittelalterliche Geschichte, moderne Architektur oder 
                das jüdische Leben in Freiburg interessieren – gemeinsam entdecken wir 
                die Facetten dieser einzigartigen Stadt.
              </p>
              <p className="text-muted-foreground">
                Meine Führungen richten sich an Gäste in Freiburg, Familien und Gruppen, 
                die die Stadt entdecken wollen, aber auch an Freiburger:innen, die ihre 
                Stadt nochmal neu kennenlernen möchten.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default About;
