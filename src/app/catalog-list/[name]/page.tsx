import { ProductCard } from "@/app/_comonents/productCard";
import { getCatalogByName } from "../../../Service/Query/get-catalog-by-name";

const CatalogSingle = async ({ params }: any) => {
  const { name } = params;

  const product = await getCatalogByName(name);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((catalog) => (
          <ProductCard key={catalog.id} {...catalog} />
        ))}
      </div>
    </div>
  );
};

export default CatalogSingle;
