
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tour: "",
    groupSize: "",
    preferredDate: "",
    message: ""
  });
  
  const { toast } = useToast();

  const tours = [
    "Der klassische Stadtrundgang",
    "Der alte Friedhof",
    "Das moderne Freiburg",
    "Das jüdische Freiburg",
    "Mein Stadtteil Herdern",
    "Architektur in Freiburg",
    "Individuelle Tour"
  ];

  // Set the tour from URL parameter when component mounts
  useEffect(() => {
    const tourFromUrl = searchParams.get('tour');
    if (tourFromUrl && tours.includes(tourFromUrl)) {
      setFormData(prev => ({ ...prev, tour: tourFromUrl }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Anfrage für Stadtführung: ${formData.tour || 'Allgemein'}`;
    const body = `
Hallo Herr Lange,

ich interessiere mich für eine Stadtführung in Freiburg.

Kontaktdaten:
Name: ${formData.name}
E-Mail: ${formData.email}
Telefon: ${formData.phone}

Details zur gewünschten Tour:
Tour: ${formData.tour || 'Bitte kontaktieren Sie mich für Beratung'}
Gruppengröße: ${formData.groupSize || 'Nicht angegeben'}
Wunschtermin: ${formData.preferredDate || 'Flexibel'}

Nachricht:
${formData.message}

Mit freundlichen Grüßen
${formData.name}
    `.trim();

    const mailtoLink = `mailto:arno.lange@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    toast({
      title: "E-Mail wird geöffnet",
      description: "Ihr E-Mail-Programm sollte sich öffnen. Falls nicht, kopieren Sie bitte die E-Mail-Adresse.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Kontakt
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Sie können gerne das Anfrageformular nutzen – oder einfach direkt anrufen.
            </p>
            
            {/* Prominent Contact Information */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-2">Telefon</h3>
                  <a 
                    href="tel:+4916098322617" 
                    className="text-2xl font-bold text-foreground hover:text-primary hover:underline"
                  >
                    +49 160 98322617
                  </a>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-2">E-Mail</h3>
                  <a 
                    href="mailto:arno.lange@icloud.com" 
                    className="text-2xl font-bold text-foreground hover:text-primary hover:underline break-all"
                  >
                    arno.lange@icloud.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Anfrage senden
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        placeholder="ihre.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      placeholder="+49 ..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tour">Gewünschte Tour *</Label>
                      <Select 
                        value={formData.tour} 
                        onValueChange={(value) => handleInputChange("tour", value)} 
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Tour auswählen" />
                        </SelectTrigger>
                        <SelectContent>
                          {tours.map((tour) => (
                            <SelectItem key={tour} value={tour}>
                              {tour}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="groupSize">Gruppengröße *</Label>
                      <Input
                        id="groupSize"
                        value={formData.groupSize}
                        onChange={(e) => handleInputChange("groupSize", e.target.value)}
                        required
                        placeholder="z.B. 8 Personen"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Wunschtermin</Label>
                    <Input
                      id="preferredDate"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                      placeholder="z.B. 15. Dezember, nachmittags"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Nachricht</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Besondere Wünsche, Fragen oder Anmerkungen..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Anfrage senden
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Pflichtfelder
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="space-y-6">
              <Card className="bg-accent/50">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    Hinweise zur Buchung
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-base">
                  <p>• Alle Touren können individuell angepasst werden</p>
                  <p>• Gruppengröße: 1-25 Personen</p>
                  <p>• Sprache: Deutsch</p>
                  <p>• Wetterunabhängig mit entsprechender Kleidung</p>
                  <p>• Treffpunkt wird bei Buchung vereinbart</p>
                  <p>• Termine & Preise nach Vereinbarung</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
