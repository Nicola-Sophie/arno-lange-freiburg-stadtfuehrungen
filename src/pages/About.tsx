
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
              <div className="w-64 h-64 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-6xl text-muted-foreground">📸</span>
                <span className="sr-only">Profilbild von Arno Lange</span>
              </div>
            </div>
            
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Meine Leidenschaft für Freiburg
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg">
                  <p>
                    Freiburg im Breisgau ist eine Stadt, die mich seit jeher fasziniert. 
                    Die einzigartige Mischung aus mittelalterlicher Geschichte, lebendiger 
                    Universitätskultur und moderner Architektur macht diese Stadt zu einem 
                    besonderen Ort, den ich gerne mit anderen teile.
                  </p>
                  <p>
                    Als zertifizierter Gästeführer und Mitglied im BVGD e.V. 
                    (Bundesverband der Gästeführer in Deutschland) bringe ich nicht nur 
                    fundiertes Wissen mit, sondern auch die Begeisterung, die nötig ist, 
                    um Geschichte lebendig werden zu lassen.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  Mein Werdegang
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Der Weg zum Gästeführer begann für mich mit meiner tiefen Verbundenheit 
                  zu Freiburg und dem Wunsch, die reiche Geschichte dieser Stadt zu teilen. 
                  Nach einer umfassenden Ausbildung und Zertifizierung durch den BVGD e.V. 
                  führe ich nun seit mehreren Jahren Besucher durch meine Heimatstadt.
                </p>
                <p>
                  Besonders fasziniert mich die Vielfalt Freiburgs – von den gotischen 
                  Strukturen des Münsters bis hin zu den modernen nachhaltigen Stadtvierteln 
                  wie Vauban und Rieselfeld.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  Was mich begeistert
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Freiburg ist mehr als nur eine Stadt – es ist ein lebendiges Geschichtsbuch. 
                  Jede Gasse, jedes Gebäude hat seine eigene Geschichte zu erzählen. 
                  Von den berühmten Freiburger Bächle über das imposante Münster bis hin 
                  zu den versteckten Winkeln der Altstadt.
                </p>
                <p>
                  Mein Ziel ist es, Ihnen nicht nur Fakten zu vermitteln, sondern 
                  Geschichten zu erzählen, die Freiburg zum Leben erwecken und Ihnen 
                  ein authentisches Gefühl für diese wunderbare Stadt geben.
                </p>
              </CardContent>
            </Card>
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
                Sprechen Sie mich gerne für individuelle Wünsche und Schwerpunkte an. 
                Meine Führungen richten sich an Touristen, Schulklassen, Familien, 
                Gruppen sowie Freiburger mit Interesse an ihrer Stadtgeschichte.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
