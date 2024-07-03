import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import flamingoImage from "/placeholder.svg"; // Corrected path

const Flamingos = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">All About Flamingos</h1>
        <p className="text-lg text-muted-foreground">Discover the fascinating world of flamingos</p>
      </header>
      <main>
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Introduction</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Flamingos are a type of wading bird in the family Phoenicopteridae. They are known for their vibrant pink feathers, long legs, and distinctive downward-bending beaks.</p>
              <img src={flamingoImage} alt="Flamingo" className="mt-4 w-full h-auto" />
            </CardContent>
          </Card>
        </section>
        <Separator />
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Habitat</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Flamingos are found in a variety of habitats, including lakes, lagoons, and swamps. They are commonly found in parts of Africa, Asia, the Americas, and Europe.</p>
              <img src={flamingoImage} alt="Flamingo Habitat" className="mt-4 w-full h-auto" />
            </CardContent>
          </Card>
        </section>
        <Separator />
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Diet</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Flamingos primarily feed on algae, small insects, and crustaceans. Their unique beaks allow them to filter-feed while their heads are upside down in the water.</p>
              <img src={flamingoImage} alt="Flamingo Feeding" className="mt-4 w-full h-auto" />
            </CardContent>
          </Card>
        </section>
        <Separator />
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Behavior</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Flamingos are social birds that live in large colonies. They are known for their synchronized group movements and unique mating dances.</p>
              <img src={flamingoImage} alt="Flamingo Behavior" className="mt-4 w-full h-auto" />
            </CardContent>
          </Card>
        </section>
      </main>
      <footer className="text-center mt-8">
        <p>&copy; 2023 Flamingo World. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Flamingos;