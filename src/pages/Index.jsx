import { useProducts } from "@/integrations/supabase/index.js";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const { data: products, error, isLoading } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
        <p className="text-lg text-muted-foreground">Discover our amazing products</p>
      </header>
      <main>
        {products.map((product) => (
          <section key={product.id} className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{product.description}</p>
                <p className="mt-4 font-bold">${product.price}</p>
                {product.image_url && <img src={product.image_url} alt={product.name} className="mt-4 w-full h-auto" />}
              </CardContent>
            </Card>
            <Separator />
          </section>
        ))}
      </main>
      <footer className="text-center mt-8">
        <p>&copy; 2023 Our Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
